import { useEffect, useRef, useState } from 'react';
import { RotateCcw, Home, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import StarRating from './StarRating';
import { recordResult, type GameResult } from '../utils/storage';

interface Props {
  gameId: string;
  gameTitle: string;
  correct: number;
  total: number;
  onRetry: () => void;
  emoji?: string;
}

function celebration() {
  confetti({
    particleCount: 100,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#f472b6', '#a855f7', '#facc15', '#38bdf8', '#34d399'],
  });
}

function messageFor(percent: number): string {
  if (percent === 100) return 'Perfect score! You are a Tech Superstar! 🌟';
  if (percent >= 80) return 'Excellent work! You really know your stuff! 🎉';
  if (percent >= 60) return 'Good job! Keep practicing to get even better! 💪';
  if (percent >= 30) return "Nice try! Let's play again to improve! 📚";
  return "Keep going! Practice makes perfect! 🌱";
}

export default function ResultScreen({ gameId, gameTitle, correct, total, onRetry, emoji = '🎮' }: Props) {
  const navigate = useNavigate();
  const [result, setResult] = useState<GameResult | null>(null);
  const recorded = useRef(false);

  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    const r = recordResult(gameId, correct, total);
    setResult(r);
    if (r.bestStars >= 2) celebration();
  }, [gameId, correct, total]);

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-8 text-center animate-pop">
      <div className="text-6xl">{emoji}</div>
      <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-800">{gameTitle}</h2>
      <p className="mt-1 text-sm font-medium text-slate-500">{messageFor(percent)}</p>

      <div className="mt-6 w-full rounded-3xl bg-white p-6 shadow-xl shadow-purple-100 ring-1 ring-purple-50">
        <div className="flex items-center justify-center gap-2 text-amber-500">
          <Trophy size={28} />
          <span className="font-display text-4xl font-extrabold text-slate-800">
            {correct}/{total}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-400">{percent}% correct</p>
        <div className="mt-4 flex justify-center">
          {result && <StarRating stars={result.bestStars} size={32} />}
        </div>
        {result && result.bestPercent > percent && (
          <p className="mt-3 text-xs font-semibold text-emerald-600">🏆 Personal best: {result.bestPercent}%</p>
        )}
      </div>

      <div className="mt-6 flex w-full gap-3">
        <button
          onClick={onRetry}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 active:scale-95 transition"
        >
          <RotateCcw size={18} /> Play Again
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-100 py-3.5 font-semibold text-slate-600 active:scale-95 transition"
        >
          <Home size={18} /> All Games
        </button>
      </div>
    </div>
  );
}
