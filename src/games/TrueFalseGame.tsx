import { useMemo, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { Check, X } from 'lucide-react';
import type { TrueFalseItem } from '../data/types';
import { sample } from '../utils/random';
import ProgressBar from '../components/ProgressBar';
import ResultScreen from '../components/ResultScreen';

interface Props {
  gameId: string;
  title: string;
  emoji: string;
  items: TrueFalseItem[];
  questionCount?: number;
  accentClass?: string;
}

type Feedback = 'correct' | 'wrong' | null;

export default function TrueFalseGame({ gameId, title, emoji, items, questionCount = 10, accentClass = 'bg-teal-500' }: Props) {
  const [round, setRound] = useState(0);
  const prepared = useMemo(() => sample(items, questionCount), [items, questionCount, round]);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [dragX, setDragX] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const locked = useRef(false);

  const current = prepared[index];

  function answer(choseTrue: boolean) {
    if (locked.current || !current) return;
    locked.current = true;
    const isCorrect = choseTrue === current.answer;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setCorrectCount((c) => c + 1);
    setDragX(choseTrue ? 400 : -400);
    setTimeout(() => {
      if (index + 1 >= prepared.length) {
        setFinished(true);
      } else {
        setIndex((i) => i + 1);
        setFeedback(null);
        setDragX(0);
      }
      locked.current = false;
    }, 500);
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (locked.current) return;
    dragging.current = true;
    startX.current = e.clientX;
  }
  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    setDragX(e.clientX - startX.current);
  }
  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;
    if (dragX > 90) answer(true);
    else if (dragX < -90) answer(false);
    else setDragX(0);
  }

  function restart() {
    setRound((r) => r + 1);
    setIndex(0);
    setCorrectCount(0);
    setFinished(false);
    setFeedback(null);
    setDragX(0);
  }

  if (finished) {
    return (
      <ResultScreen gameId={gameId} gameTitle={title} correct={correctCount} total={prepared.length} onRetry={restart} emoji={emoji} />
    );
  }
  if (!current) return null;

  const rotate = Math.max(-12, Math.min(12, dragX / 12));

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <h1 className="mb-4 font-display text-lg font-bold text-slate-800">{emoji} {title}</h1>
      <ProgressBar current={index} total={prepared.length} colorClass={accentClass} />

      <p className="mb-3 mt-5 text-center text-xs font-semibold text-slate-400">👈 Swipe left for False &nbsp;|&nbsp; Swipe right for True 👉</p>

      <div className="relative h-64 select-none touch-none" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
        <div
          key={current.id}
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-6 text-center shadow-xl ring-1 transition-transform ${
            feedback === 'correct'
              ? 'bg-emerald-50 ring-emerald-200'
              : feedback === 'wrong'
              ? 'bg-rose-50 ring-rose-200'
              : 'bg-white ring-purple-50'
          }`}
          style={{ transform: `translateX(${dragX}px) rotate(${rotate}deg)`, transition: dragging.current ? 'none' : 'transform 0.35s ease-out' }}
        >
          {feedback && (
            <div className={`absolute right-4 top-4 rounded-full p-1.5 ${feedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
              {feedback === 'correct' ? <Check className="text-white" size={18} /> : <X className="text-white" size={18} />}
            </div>
          )}
          <span className="text-4xl">🤔</span>
          <p className="mt-3 font-display text-lg font-semibold leading-snug text-slate-800">{current.statement}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={() => answer(false)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-rose-500 py-4 font-bold text-white shadow-lg shadow-rose-200 active:scale-95 transition"
        >
          <X size={20} /> False
        </button>
        <button
          onClick={() => answer(true)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-200 active:scale-95 transition"
        >
          <Check size={20} /> True
        </button>
      </div>
    </div>
  );
}
