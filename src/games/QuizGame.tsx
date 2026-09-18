import { useEffect, useMemo, useState } from 'react';
import { Check, X, Timer } from 'lucide-react';
import type { QuizQuestion } from '../data/types';
import { sample, shuffle } from '../utils/random';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';
import TechImage from '../components/TechImage';

interface PreparedQuestion {
  id: string;
  question: string;
  emoji?: string;
  img?: string;
  options: string[];
  correctIndex: number;
}

function prepare(questions: QuizQuestion[], count: number): PreparedQuestion[] {
  return sample(questions, count).map((q) => {
    const correctAnswer = q.options[q.answerIndex];
    const options = shuffle(q.options);
    return {
      id: q.id,
      question: q.question,
      emoji: q.emoji,
      img: q.img,
      options,
      correctIndex: options.indexOf(correctAnswer),
    };
  });
}

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  questions: QuizQuestion[];
  questionCount?: number;
  timerSeconds?: number; // if set, enables speed-round countdown per question
  accentClass?: string; // tailwind bg-* class for progress bar
}

export default function QuizGame({
  gameId,
  title,
  emoji,
  questions,
  questionCount = 10,
  timerSeconds,
  accentClass = 'bg-purple-500',
}: Props) {
  const [round, setRound] = useState(0);
  const prepared = useMemo(() => prepare(questions, questionCount), [questions, questionCount, round]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerSeconds ?? 0);

  const current = prepared[index];

  useEffect(() => {
    if (!timerSeconds || selected !== null || finished) return;
    if (timeLeft <= 0) {
      handleAnswer(-1);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, selected, finished, timerSeconds]);

  function handleAnswer(optionIndex: number) {
    if (selected !== null || !current) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === current.correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setTimeout(() => {
      if (index + 1 >= prepared.length) {
        setFinished(true);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
        setTimeLeft(timerSeconds ?? 0);
      }
    }, 900);
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
    setTimeLeft(timerSeconds ?? 0);
  }

  if (finished) {
    return (
      <ResultScreen
        gameId={gameId}
        gameTitle={title}
        correct={correctCount}
        total={prepared.length}
        onRetry={restart}
        emoji={emoji}
      />
    );
  }

  if (!current) return null;

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
        {timerSeconds ? (
          <div
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-bold ${
              timeLeft <= 3 ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'
            }`}
          >
            <Timer size={14} /> {timeLeft}s
          </div>
        ) : null}
      </div>

      <ProgressBar current={index} total={prepared.length} colorClass={accentClass} />

      <div className="mt-6 rounded-3xl bg-white p-5 text-center shadow-lg shadow-purple-100 ring-1 ring-purple-50 animate-pop" key={current.id}>
        <div className="flex justify-center">
          <TechImage img={current.img} emoji={current.emoji ?? '❓'} className="text-5xl" />
        </div>
        <p className="mt-3 font-display text-lg font-bold leading-snug text-slate-800">{current.question}</p>
      </div>

      <p className="mt-5 mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-400">
        <span>👇 Choose the correct answer</span>
        <span>{current.options.length} options</span>
      </p>
      <div className="grid grid-cols-1 gap-3">
        {current.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrectOpt = i === current.correctIndex;
          let stateClass = 'bg-white ring-1 ring-slate-200 text-slate-700 shadow-md shadow-slate-200/70';
          if (selected !== null) {
            if (isCorrectOpt) stateClass = 'bg-emerald-500 text-white ring-emerald-500 shadow-md shadow-emerald-200';
            else if (isSelected) stateClass = 'bg-rose-500 text-white ring-rose-500 shadow-md shadow-rose-200';
            else stateClass = 'bg-white text-slate-400 ring-slate-100 shadow-sm';
          }
          return (
            <button
              key={i}
              disabled={selected !== null}
              onClick={() => handleAnswer(i)}
              className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-left font-semibold transition active:scale-[0.98] ${stateClass}`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    selected !== null && (isCorrectOpt || isSelected) ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </span>
              {selected !== null && isCorrectOpt && <Check size={20} />}
              {selected !== null && isSelected && !isCorrectOpt && <X size={20} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
