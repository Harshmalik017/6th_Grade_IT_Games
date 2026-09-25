import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import {
  TABLE_MIN,
  TABLE_MAX,
  gradientForTable,
  tableGameId,
  SINGLE_TABLE_GAME_TYPES,
  MIXED_TABLE_GAME_TYPES,
  type TableGameType,
  type MixedGameType,
} from '../data/mathsGames';
import { loadScores, type ScoreBoard } from '../utils/storage';

const gameLabels: Record<TableGameType | MixedGameType, { title: string; description: string; emoji: string; gradient: string }> = {
  learn: { title: 'Learn & Remember', description: 'Flip flashcards to learn every fact!', emoji: '🧠', gradient: 'from-fuchsia-500 to-purple-600' },
  quiz: { title: 'Table Quiz', description: 'Answer multiplication MCQs!', emoji: '🔢', gradient: 'from-sky-500 to-blue-600' },
  truefalse: { title: 'True or Flop', description: 'Tap True or False for table facts!', emoji: '✅', gradient: 'from-emerald-500 to-teal-600' },
  missing: { title: 'Missing Number', description: 'Find the missing multiplier!', emoji: '❓', gradient: 'from-amber-500 to-orange-600' },
  sequence: { title: 'Order the Multiples', description: 'Put the multiples in the right order!', emoji: '🔗', gradient: 'from-violet-500 to-indigo-600' },
  speed: { title: 'Speed Round', description: 'Beat the clock with rapid-fire facts!', emoji: '⏱️', gradient: 'from-red-500 to-pink-600' },
};

export default function MathsTablePage() {
  const { student, table } = useParams();
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, [table]);

  if (student !== 'riya' && student !== 'siya') return <Navigate to="/" replace />;

  const isMixed = table === 'mixed';
  const tableNum = isMixed ? null : Number(table);
  if (!isMixed && (!tableNum || tableNum < TABLE_MIN || tableNum > TABLE_MAX)) {
    return <Navigate to={`/${student}/maths`} replace />;
  }

  const gameTypes: (TableGameType | MixedGameType)[] = isMixed ? MIXED_TABLE_GAME_TYPES : SINGLE_TABLE_GAME_TYPES;
  const heroGradient = isMixed ? 'from-amber-500 via-orange-500 to-rose-500' : gradientForTable(tableNum!);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${heroGradient} p-6 text-white shadow-xl shadow-purple-200`}>
        <div className="absolute -right-6 -top-6 text-8xl opacity-20">{isMixed ? '🎯' : '🔢'}</div>
        <p className="relative font-display text-4xl font-extrabold">{isMixed ? '🎯' : tableNum}</p>
        <h1 className="relative mt-2 font-display text-2xl font-extrabold leading-tight">
          {isMixed ? 'Mixed Tables Challenge' : `Table of ${tableNum}`}
        </h1>
        <p className="relative mt-1 text-sm text-white/85">
          {isMixed ? 'Facts from every table, 1 to 20!' : `${tableNum} × 1 through ${tableNum} × 10`}
        </p>
      </section>

      <h2 className="mt-7 mb-3 font-display text-lg font-bold text-slate-700">Pick a Game to Play 🎲</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gameTypes.map((gameType) => {
          const meta = gameLabels[gameType];
          const gameId = tableGameId(isMixed ? 'mixed' : tableNum!, gameType);
          return (
            <GameCard
              key={gameId}
              game={{ id: gameId, title: meta.title, description: meta.description, emoji: meta.emoji, img: '', gradient: meta.gradient }}
              result={scores[gameId]}
              to={`/${student}/maths/table/${table}/game/${gameType}`}
            />
          );
        })}
      </div>
    </div>
  );
}
