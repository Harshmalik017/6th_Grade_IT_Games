import { useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';
import type { FillBlankItem } from '../data/types';
import { sample, shuffle } from '../utils/random';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  items: FillBlankItem[];
  questionCount?: number;
}

export default function FillBlankGame({ gameId, title, emoji, items, questionCount = 10 }: Props) {
  const [round, setRound] = useState(0);
  const prepared = useMemo(
    () => sample(items, questionCount).map((item) => ({ ...item, options: shuffle(item.options) })),
    [items, questionCount, round],
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = prepared[index];
  const parts = current ? current.sentence.split('___') : [];

  function handleAnswer(option: string) {
    if (selected !== null || !current) return;
    setSelected(option);
    if (option === current.answer) setCorrectCount((c) => c + 1);
    setTimeout(() => {
      if (index + 1 >= prepared.length) {
        setFinished(true);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
      }
    }, 900);
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    return <ResultScreen gameId={gameId} gameTitle={title} correct={correctCount} total={prepared.length} onRetry={restart} emoji={emoji} />;
  }
  if (!current) return null;

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-4 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <ProgressBar current={index} total={prepared.length} colorClass="bg-lime-500" />

      <div key={current.id} className="mt-6 rounded-3xl bg-white p-5 text-center shadow-lg shadow-lime-100 ring-1 ring-lime-50 animate-pop">
        <p className="font-display text-lg font-semibold leading-relaxed text-slate-800">
          {parts[0]}
          <span className="mx-1 inline-block min-w-16 rounded-lg border-b-4 border-lime-400 bg-lime-50 px-2 py-0.5 font-bold text-lime-600">
            {selected ?? '?????'}
          </span>
          {parts[1]}
        </p>
      </div>

      <p className="mt-5 mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-400">
        <span>👇 Choose the missing word</span>
        <span>{current.options.length} options</span>
      </p>
      <div className="grid grid-cols-2 gap-3">
        {current.options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrectOpt = opt === current.answer;
          let stateClass = 'bg-white ring-1 ring-slate-200 text-slate-700 shadow-md shadow-slate-200/70';
          if (selected !== null) {
            if (isCorrectOpt) stateClass = 'bg-emerald-500 text-white ring-emerald-500 shadow-md shadow-emerald-200';
            else if (isSelected) stateClass = 'bg-rose-500 text-white ring-rose-500 shadow-md shadow-rose-200';
            else stateClass = 'bg-white text-slate-400 ring-slate-100 shadow-sm';
          }
          return (
            <button
              key={opt}
              disabled={selected !== null}
              onClick={() => handleAnswer(opt)}
              className={`flex items-center justify-center gap-1.5 rounded-2xl px-3 py-3.5 text-center font-semibold transition active:scale-95 ${stateClass}`}
            >
              <span>{opt}</span>
              {selected !== null && isCorrectOpt && <Check size={16} />}
              {selected !== null && isSelected && !isCorrectOpt && <X size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
