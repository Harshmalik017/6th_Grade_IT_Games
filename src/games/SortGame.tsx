import { useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';
import type { SortGameData } from '../data/types';
import { shuffle } from '../utils/random';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';
import TechImage from '../components/TechImage';

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  datasets: SortGameData[];
}

export default function SortGame({ gameId, title, emoji, datasets }: Props) {
  const [round, setRound] = useState(0);
  const dataset = useMemo(() => datasets[round % datasets.length], [datasets, round]);
  const items = useMemo(() => shuffle(dataset.items), [dataset]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = items[index];

  function handlePick(category: string) {
    if (selected !== null || !current) return;
    setSelected(category);
    if (category === current.category) setCorrectCount((c) => c + 1);
    setTimeout(() => {
      if (index + 1 >= items.length) {
        setFinished(true);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
      }
    }, 800);
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    return <ResultScreen gameId={gameId} gameTitle={title} correct={correctCount} total={items.length} onRetry={restart} emoji={emoji} />;
  }
  if (!current) return null;

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-1 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <p className="mb-4 text-center text-xs font-semibold text-slate-400">{dataset.title}</p>
      <ProgressBar current={index} total={items.length} colorClass="bg-amber-500" />

      <div key={current.name} className="mt-6 rounded-3xl bg-white p-6 text-center shadow-lg shadow-amber-100 ring-1 ring-amber-50 animate-pop">
        <TechImage img={current.img} emoji={current.emoji} className="text-5xl" />
        <p className="mt-3 font-display text-lg font-bold leading-snug text-slate-800">{current.name}</p>
      </div>

      <p className="mt-5 mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-400">
        <span>👇 Choose the correct group</span>
        <span>{dataset.categories.length} options</span>
      </p>
      <div className={`grid gap-3 ${dataset.categories.length > 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {dataset.categories.map((cat) => {
          const isSelected = selected === cat;
          const isCorrectCat = cat === current.category;
          let stateClass = 'bg-white ring-1 ring-slate-200 text-slate-700 shadow-md shadow-slate-200/70';
          if (selected !== null) {
            if (isCorrectCat) stateClass = 'bg-emerald-500 text-white ring-emerald-500 shadow-md shadow-emerald-200';
            else if (isSelected) stateClass = 'bg-rose-500 text-white ring-rose-500 shadow-md shadow-rose-200';
            else stateClass = 'bg-white text-slate-400 ring-slate-100 shadow-sm';
          }
          return (
            <button
              key={cat}
              disabled={selected !== null}
              onClick={() => handlePick(cat)}
              className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-center font-bold transition active:scale-95 ${stateClass}`}
            >
              <span>{cat}</span>
              {selected !== null && isCorrectCat && <Check size={18} />}
              {selected !== null && isSelected && !isCorrectCat && <X size={18} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
