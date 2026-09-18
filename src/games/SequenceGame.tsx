import { useEffect, useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { SequenceGameData } from '../data/types';
import { shuffle } from '../utils/random';
import ResultScreen from '../components/ResultScreen';

interface StepChip {
  id: string;
  text: string;
}

function toChips(steps: string[]): StepChip[] {
  return steps.map((text, i) => ({ id: `${i}-${text.slice(0, 6)}`, text }));
}

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  datasets: SequenceGameData[];
}

export default function SequenceGame({ gameId, title, emoji, datasets }: Props) {
  const [round, setRound] = useState(0);
  const dataset = useMemo(() => datasets[round % datasets.length], [datasets, round]);
  const correctChips = useMemo(() => toChips(dataset.steps), [dataset]);

  const [pool, setPool] = useState<StepChip[]>(() => shuffle(correctChips));
  const [ordered, setOrdered] = useState<StepChip[]>([]);
  const [checkedWrong, setCheckedWrong] = useState<Set<string> | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakeMade, setMistakeMade] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setPool(shuffle(correctChips));
    setOrdered([]);
    setCheckedWrong(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataset]);

  function addChip(chip: StepChip) {
    if (checkedWrong) return;
    setPool((p) => p.filter((c) => c.id !== chip.id));
    setOrdered((prev) => [...prev, chip]);
  }

  useEffect(() => {
    if (checkedWrong !== null) return;
    if (ordered.length !== correctChips.length || correctChips.length === 0) return;
    const wrongSet = new Set<string>();
    ordered.forEach((c, i) => {
      if (dataset.steps[i] !== c.text) wrongSet.add(c.id);
    });
    setCheckedWrong(wrongSet);
    if (wrongSet.size === 0) {
      if (!mistakeMade) setCorrectCount((c) => c + 1);
      setTimeout(goToNext, 1200);
    } else {
      setMistakeMade(true);
      setTimeout(() => {
        setPool(shuffle(correctChips));
        setOrdered([]);
        setCheckedWrong(null);
      }, 1600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordered]);

  function removeChip(chip: StepChip) {
    if (checkedWrong) return;
    setOrdered((o) => o.filter((c) => c.id !== chip.id));
    setPool((p) => [...p, chip]);
  }

  function goToNext() {
    if (dataIndex + 1 >= datasets.length) {
      setFinished(true);
      return;
    }
    setDataIndex((d) => d + 1);
    setRound((r) => r + 1);
    setMistakeMade(false);
  }

  function restart() {
    setDataIndex(0);
    setRound((r) => r + 1);
    setCorrectCount(0);
    setMistakeMade(false);
    setFinished(false);
  }

  if (finished) {
    return <ResultScreen gameId={gameId} gameTitle={title} correct={correctCount} total={datasets.length} onRetry={restart} emoji={emoji} />;
  }

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-1 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <p className="mb-4 text-center text-xs font-semibold text-slate-400">
        {dataset.emoji} {dataset.title} — Process {dataIndex + 1} of {datasets.length}
      </p>

      <div className="rounded-3xl bg-white p-4 shadow-lg shadow-teal-100 ring-1 ring-teal-50">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-teal-500">Your Order</p>
        <div className="flex min-h-16 flex-col gap-2">
          {ordered.length === 0 && <p className="rounded-xl bg-slate-50 py-4 text-center text-xs text-slate-400">Tap steps below to build the order</p>}
          {ordered.map((chip, i) => {
            const isWrong = checkedWrong?.has(chip.id);
            const isChecked = checkedWrong !== null;
            return (
              <button
                key={chip.id}
                onClick={() => removeChip(chip)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                  isChecked
                    ? isWrong
                      ? 'bg-rose-100 text-rose-600 ring-2 ring-rose-300 shadow-md shadow-rose-100'
                      : 'bg-emerald-100 text-emerald-600 ring-2 ring-emerald-300 shadow-md shadow-emerald-100'
                    : 'bg-teal-50 text-teal-700 ring-1 ring-teal-200 shadow-md shadow-teal-100'
                }`}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[11px] font-bold text-white">{i + 1}</span>
                {chip.text}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-2 mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-400">
        <span>👇 Available Steps</span>
        <span>{pool.length} left</span>
      </p>
      <div className="flex flex-col gap-2">
        {pool.map((chip) => (
          <button
            key={chip.id}
            onClick={() => addChip(chip)}
            className="rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 px-3 py-2.5 text-left text-sm font-semibold text-white shadow-md shadow-teal-200 active:scale-[0.98] transition"
          >
            {chip.text}
          </button>
        ))}
      </div>

      {checkedWrong && checkedWrong.size > 0 && (
        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-rose-500">
          <RotateCcw size={14} /> Not quite right — shuffling for another try!
        </p>
      )}
    </div>
  );
}
