import { useEffect, useMemo, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { MatchPair } from '../data/types';
import { sample, shuffle } from '../utils/random';
import ResultScreen from '../components/ResultScreen';
import TechImage from '../components/TechImage';

interface CardData {
  cardId: string;
  pairId: string;
  face: 'term' | 'def';
  label: string;
  emoji?: string;
  img?: string;
}

function buildCards(pairs: MatchPair[]): CardData[] {
  const cards: CardData[] = [];
  pairs.forEach((p) => {
    cards.push({ cardId: `${p.id}-term`, pairId: p.id, face: 'term', label: p.term, emoji: p.emoji, img: p.img });
    cards.push({ cardId: `${p.id}-def`, pairId: p.id, face: 'def', label: p.definition });
  });
  return shuffle(cards);
}

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  pairs: MatchPair[];
  pairCount?: number;
}

export default function MemoryMatchGame({ gameId, title, emoji, pairs, pairCount = 6 }: Props) {
  const [round, setRound] = useState(0);
  const chosenPairs = useMemo(() => sample(pairs, pairCount), [pairs, pairCount, round]);
  const cards = useMemo(() => buildCards(chosenPairs), [chosenPairs]);

  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);
  const busyRef = useRef(false);

  function handleFlip(card: CardData) {
    if (busyRef.current || flipped.includes(card.cardId) || matched.includes(card.pairId)) return;
    if (flipped.length >= 2) return;
    setFlipped((prev) => (prev.length >= 2 ? prev : [...prev, card.cardId]));
  }

  useEffect(() => {
    if (flipped.length !== 2) return;
    busyRef.current = true;
    const [firstId, secondId] = flipped;
    const first = cards.find((c) => c.cardId === firstId)!;
    const second = cards.find((c) => c.cardId === secondId)!;
    setAttempts((a) => a + 1);
    const isMatch = first.pairId === second.pairId;
    const timer = setTimeout(() => {
      if (isMatch) {
        setMatched((prevMatched) => {
          const newMatched = [...prevMatched, first.pairId];
          if (newMatched.length === chosenPairs.length) {
            setFinished(true);
          }
          return newMatched;
        });
      }
      setFlipped([]);
      busyRef.current = false;
    }, isMatch ? 500 : 900);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped]);

  function restart() {
    setRound((r) => r + 1);
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
    busyRef.current = false;
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
      <div className="mb-3 flex items-center justify-between">
        <h1 className="font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
        <span className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-bold text-pink-600">Tries: {attempts}</span>
      </div>
      <p className="mb-4 text-center text-xs font-semibold text-slate-400">
        👇 Tap two cards to find each term &amp; its meaning! ({matched.length}/{chosenPairs.length} found)
      </p>

      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.cardId) || matched.includes(card.pairId);
          const isMatched = matched.includes(card.pairId);
          return (
            <button
              key={card.cardId}
              onClick={() => handleFlip(card)}
              className={`relative flex h-24 items-center justify-center rounded-2xl p-1.5 text-center transition active:scale-95 sm:h-28 ${
                isMatched
                  ? 'bg-emerald-100 ring-2 ring-emerald-400 shadow-md shadow-emerald-200'
                  : isFlipped
                  ? 'bg-white ring-2 ring-purple-300 shadow-md shadow-purple-200'
                  : 'bg-gradient-to-br from-purple-400 to-fuchsia-500 shadow-md shadow-purple-300'
              }`}
            >
              {isFlipped ? (
                <span className={`text-[11px] font-semibold leading-tight ${card.face === 'term' ? 'text-base' : ''} text-slate-700`}>
                  {card.face === 'term' ? (
                    <span className="flex flex-col items-center gap-1">
                      <TechImage img={card.img} emoji={card.emoji} className="text-2xl" />
                      <span className="font-display font-bold">{card.label}</span>
                    </span>
                  ) : (
                    card.label
                  )}
                </span>
              ) : (
                <Sparkles className="text-white/80" size={22} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
