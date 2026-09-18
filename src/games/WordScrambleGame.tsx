import { useEffect, useMemo, useState } from 'react';
import { Eraser, Lightbulb } from 'lucide-react';
import type { ScrambleItem } from '../data/types';
import { sample, shuffle } from '../utils/random';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';
import TechImage from '../components/TechImage';

interface Letter {
  id: string;
  char: string;
}

function scrambleWord(word: string): Letter[] {
  let letters = word.split('').map((char, i) => ({ id: `${i}-${char}-${Math.random()}`, char }));
  // ensure the scramble differs from the original order when possible
  for (let attempt = 0; attempt < 5; attempt++) {
    letters = shuffle(letters);
    if (letters.map((l) => l.char).join('') !== word || word.length <= 1) break;
  }
  return letters;
}

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  items: ScrambleItem[];
  questionCount?: number;
}

export default function WordScrambleGame({ gameId, title, emoji, items, questionCount = 8 }: Props) {
  const [round, setRound] = useState(0);
  const prepared = useMemo(() => sample(items, questionCount), [items, questionCount, round]);
  const [index, setIndex] = useState(0);
  const [pool, setPool] = useState<Letter[]>(() => scrambleWord(prepared[0]?.word ?? ''));
  const [answer, setAnswer] = useState<Letter[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakeMade, setMistakeMade] = useState(false);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = prepared[index];

  function pickLetter(letter: Letter) {
    if (status !== 'playing') return;
    setPool((p) => p.filter((l) => l.id !== letter.id));
    setAnswer((prev) => [...prev, letter]);
  }

  useEffect(() => {
    if (status !== 'playing' || !current) return;
    if (answer.length !== current.word.length || current.word.length === 0) return;
    const formed = answer.map((l) => l.char).join('');
    if (formed === current.word) {
      setStatus('correct');
      if (!mistakeMade) setCorrectCount((c) => c + 1);
      setTimeout(nextWord, 1000);
    } else {
      setStatus('wrong');
      setMistakeMade(true);
      setTimeout(() => {
        setPool((p) => [...p, ...answer]);
        setAnswer([]);
        setStatus('playing');
      }, 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  function removeLetter(letter: Letter) {
    if (status !== 'playing') return;
    setAnswer((a) => a.filter((l) => l.id !== letter.id));
    setPool((p) => [...p, letter]);
  }

  function clearAnswer() {
    if (status !== 'playing') return;
    setPool((p) => [...p, ...answer]);
    setAnswer([]);
  }

  function nextWord() {
    if (index + 1 >= prepared.length) {
      setFinished(true);
      return;
    }
    const next = index + 1;
    setIndex(next);
    setPool(scrambleWord(prepared[next].word));
    setAnswer([]);
    setStatus('playing');
    setMistakeMade(false);
    setShowHint(false);
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setPool(scrambleWord(prepared[0]?.word ?? ''));
    setAnswer([]);
    setCorrectCount(0);
    setMistakeMade(false);
    setStatus('playing');
    setShowHint(false);
    setFinished(false);
  }

  if (finished) {
    return <ResultScreen gameId={gameId} gameTitle={title} correct={correctCount} total={prepared.length} onRetry={restart} emoji={emoji} />;
  }
  if (!current) return null;

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-4 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <ProgressBar current={index} total={prepared.length} colorClass="bg-cyan-500" />

      <div className="mt-6 flex flex-col items-center rounded-3xl bg-white p-5 shadow-lg shadow-cyan-100 ring-1 ring-cyan-50">
        <TechImage img={current.img} emoji={current.emoji} className="text-5xl" />

        <div className="mt-4 flex min-h-14 flex-wrap justify-center gap-2">
          {current.word.split('').map((_, i) => {
            const letter = answer[i];
            return (
              <button
                key={i}
                onClick={() => letter && removeLetter(letter)}
                className={`flex h-11 w-9 items-center justify-center rounded-lg border-b-4 text-lg font-extrabold uppercase transition ${
                  status === 'correct'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-600'
                    : status === 'wrong'
                    ? 'border-rose-500 bg-rose-50 text-rose-600 animate-shake'
                    : 'border-cyan-300 bg-cyan-50 text-cyan-700'
                }`}
              >
                {letter?.char ?? ''}
              </button>
            );
          })}
        </div>

        {showHint && <p className="mt-3 text-center text-xs font-semibold text-cyan-600">💡 {current.hint}</p>}

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {pool.map((letter) => (
            <button
              key={letter.id}
              onClick={() => pickLetter(letter)}
              className="flex h-11 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 text-lg font-extrabold uppercase text-white shadow-md shadow-cyan-200 active:scale-90 transition"
            >
              {letter.char}
            </button>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <button onClick={clearAnswer} className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-500 shadow-md shadow-slate-200/70 active:scale-95 transition">
            <Eraser size={14} /> Clear
          </button>
          <button onClick={() => setShowHint(true)} className="flex items-center gap-1.5 rounded-xl bg-amber-100 px-3.5 py-2 text-xs font-bold text-amber-600 shadow-md shadow-amber-200/70 active:scale-95 transition">
            <Lightbulb size={14} /> Hint
          </button>
        </div>
      </div>
    </div>
  );
}
