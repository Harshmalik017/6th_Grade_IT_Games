import { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import type { MatchPair } from '../data/types';
import { sample, shuffle } from '../utils/random';
import ResultScreen from '../components/ResultScreen';
import TechImage from '../components/TechImage';

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  pairs: MatchPair[];
  pairCount?: number;
}

export default function TermMatcherGame({ gameId, title, emoji, pairs, pairCount = 8 }: Props) {
  const [round, setRound] = useState(0);
  const chosenPairs = useMemo(() => sample(pairs, pairCount), [pairs, pairCount, round]);
  const shuffledDefs = useMemo(() => shuffle(chosenPairs), [chosenPairs]);

  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ term: string; def: string } | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);

  function selectTerm(id: string) {
    if (matched.includes(id) || wrongPair) return;
    setSelectedTerm(id === selectedTerm ? null : id);
  }

  function selectDef(pairId: string) {
    if (matched.includes(pairId) || wrongPair) return;
    if (!selectedTerm) return;
    setAttempts((a) => a + 1);
    if (selectedTerm === pairId) {
      setMatched((prev) => {
        const next = [...prev, pairId];
        if (next.length === chosenPairs.length) {
          setTimeout(() => setFinished(true), 400);
        }
        return next;
      });
      setSelectedTerm(null);
    } else {
      setWrongPair({ term: selectedTerm, def: pairId });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedTerm(null);
      }, 600);
    }
  }

  function restart() {
    setRound((r) => r + 1);
    setSelectedTerm(null);
    setMatched([]);
    setWrongPair(null);
    setAttempts(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <ResultScreen
        gameId={gameId}
        gameTitle={title}
        correct={chosenPairs.length}
        total={Math.max(attempts, chosenPairs.length)}
        onRetry={restart}
        emoji={emoji}
      />
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-1 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <p className="mb-4 text-center text-xs font-semibold text-slate-400">
        👇 Tap a term, then tap its matching meaning! ({matched.length}/{chosenPairs.length})
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {chosenPairs.map((p) => {
            const isMatched = matched.includes(p.id);
            const isSelected = selectedTerm === p.id;
            const isWrong = wrongPair?.term === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectTerm(p.id)}
                disabled={isMatched}
                className={`flex items-center gap-1.5 rounded-2xl px-2.5 py-3 text-left text-xs font-bold transition active:scale-95 ${
                  isMatched
                    ? 'bg-emerald-100 text-emerald-600 ring-2 ring-emerald-300 shadow-md shadow-emerald-100'
                    : isWrong
                    ? 'animate-shake bg-rose-100 text-rose-600 ring-2 ring-rose-300 shadow-md shadow-rose-100'
                    : isSelected
                    ? 'bg-purple-500 text-white ring-2 ring-purple-500 shadow-md shadow-purple-200'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 shadow-md shadow-slate-200/70'
                }`}
              >
                <TechImage img={p.img} emoji={p.emoji} className="text-base" />
                <span className="leading-tight">{p.term}</span>
                {isMatched && <Check size={14} className="ml-auto" />}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {shuffledDefs.map((p) => {
            const isMatched = matched.includes(p.id);
            const isWrong = wrongPair?.def === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectDef(p.id)}
                disabled={isMatched}
                className={`rounded-2xl px-2.5 py-3 text-left text-[11px] font-medium leading-snug transition active:scale-95 ${
                  isMatched
                    ? 'bg-emerald-100 text-emerald-600 ring-2 ring-emerald-300 shadow-md shadow-emerald-100'
                    : isWrong
                    ? 'animate-shake bg-rose-100 text-rose-600 ring-2 ring-rose-300 shadow-md shadow-rose-100'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 shadow-md shadow-slate-200/70'
                }`}
              >
                {p.definition}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
