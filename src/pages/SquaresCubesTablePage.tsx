import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import {
  sqCubeGameId,
  SINGLE_SQCUBE_GAME_TYPES,
  MIXED_SQCUBE_GAME_TYPES,
  type SqCubeMode,
  type SqCubeGameType,
} from '../data/mathsGames';
import { loadScores, type ScoreBoard } from '../utils/storage';

const modeMeta: Record<SqCubeMode, { title: string; blurb: string; emoji: string; gradient: string }> = {
  square: { title: 'Squares', blurb: '1² through 20²', emoji: '🔲', gradient: 'from-sky-500 via-blue-500 to-indigo-500' },
  cube: { title: 'Cubes', blurb: '1³ through 20³', emoji: '🧊', gradient: 'from-emerald-500 via-teal-500 to-cyan-500' },
  mixed: { title: 'Mixed Challenge', blurb: 'Squares + Cubes together', emoji: '⭐', gradient: 'from-rose-500 via-pink-500 to-fuchsia-500' },
};

const gameLabels: Record<SqCubeGameType, { title: string; description: string; emoji: string; gradient: string }> = {
  learn: { title: 'Learn & Remember', description: 'Flip flashcards to learn every value!', emoji: '🧠', gradient: 'from-fuchsia-500 to-purple-600' },
  quiz: { title: 'Quiz', description: 'Answer MCQs on squares & cubes!', emoji: '🔢', gradient: 'from-sky-500 to-blue-600' },
  truefalse: { title: 'True or Flop', description: 'Tap True or False for the facts!', emoji: '✅', gradient: 'from-emerald-500 to-teal-600' },
  missing: { title: 'Missing Number', description: 'Find the missing base number!', emoji: '❓', gradient: 'from-amber-500 to-orange-600' },
  speed: { title: 'Speed Round', description: 'Beat the clock with rapid-fire facts!', emoji: '⏱️', gradient: 'from-red-500 to-pink-600' },
};

export default function SquaresCubesTablePage() {
  const { mode } = useParams();
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, [mode]);

  if (mode !== 'square' && mode !== 'cube' && mode !== 'mixed') {
    return <Navigate to="/riya/maths/squares-cubes" replace />;
  }

  const meta = modeMeta[mode];
  const gameTypes = mode === 'mixed' ? MIXED_SQCUBE_GAME_TYPES : SINGLE_SQCUBE_GAME_TYPES;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${meta.gradient} p-6 text-white shadow-xl shadow-purple-200`}>
        <div className="absolute -right-6 -top-6 text-8xl opacity-20">{meta.emoji}</div>
        <span className="relative text-5xl drop-shadow-sm">{meta.emoji}</span>
        <h1 className="relative mt-2 font-display text-2xl font-extrabold leading-tight">{meta.title}</h1>
        <p className="relative mt-1 text-sm text-white/85">{meta.blurb}</p>
      </section>

      <h2 className="mt-7 mb-3 font-display text-lg font-bold text-slate-700">Pick a Game to Play 🎲</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gameTypes.map((gameType) => {
          const gMeta = gameLabels[gameType];
          const gameId = sqCubeGameId(mode, gameType);
          return (
            <GameCard
              key={gameId}
              game={{ id: gameId, title: gMeta.title, description: gMeta.description, emoji: gMeta.emoji, img: '', gradient: gMeta.gradient }}
              result={scores[gameId]}
              to={`/riya/maths/squares-cubes/${mode}/game/${gameType}`}
            />
          );
        })}
      </div>
    </div>
  );
}
