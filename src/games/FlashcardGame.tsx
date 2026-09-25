import { useMemo, useState } from 'react';
import { RotateCw, ArrowRight } from 'lucide-react';
import type { FlashcardItem } from '../data/mathsGames';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  cards: FlashcardItem[];
  accentClass?: string;
}

/**
 * A simple tap-to-flip flashcard "learn" mode. Not a quiz - it's designed to help
 * kids repeat and remember facts (e.g. multiplication tables) before they get
 * quizzed on them. Completing the deck always awards a perfect score, since the
 * goal here is repetition/memorisation rather than testing.
 */
export default function FlashcardGame({ gameId, title, emoji, cards, accentClass = 'bg-fuchsia-500' }: Props) {
  const [round, setRound] = useState(0);
  const deck = useMemo(() => cards, [cards, round]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = deck[index];

  function next() {
    if (index + 1 >= deck.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setFlipped(false);
    }
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setFlipped(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <ResultScreen gameId={gameId} gameTitle={title} correct={deck.length} total={deck.length} onRetry={restart} emoji={emoji} />
    );
  }
  if (!current) return null;

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-4 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <ProgressBar current={index} total={deck.length} colorClass={accentClass} />

      <button
        key={current.id}
        onClick={() => setFlipped((f) => !f)}
        className="mt-6 flex h-56 w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-5 text-center shadow-lg shadow-purple-100 ring-1 ring-purple-50 animate-pop transition active:scale-[0.98]"
      >
        {!flipped ? (
          <>
            <p className="font-display text-4xl font-extrabold text-slate-800">{current.prompt}</p>
            <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-purple-400">
              <RotateCw size={14} /> Tap to reveal
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-lg font-semibold text-slate-500">{current.prompt} =</p>
            <p className="font-display text-5xl font-extrabold text-emerald-500">{current.answer}</p>
          </>
        )}
      </button>

      <button
        onClick={next}
        disabled={!flipped}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 font-bold text-white shadow-lg transition active:scale-95 ${
          flipped ? 'bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-purple-200' : 'cursor-not-allowed bg-slate-200 text-slate-400 shadow-none'
        }`}
      >
        {index + 1 >= deck.length ? 'Finish' : 'Next Card'} <ArrowRight size={18} />
      </button>
    </div>
  );
}
