import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  TABLES,
  gradientForTable,
  tableGameIdsFor,
  mixedTableGameIds,
  allTablesGameIds,
  allSquaresCubesGameIds,
} from '../data/mathsGames';
import { loadScores, type ScoreBoard } from '../utils/storage';

const SINGLE_TABLE_GAME_COUNT = 5; // learn, quiz, truefalse, missing, sequence
const MIXED_GAME_COUNT = 5; // quiz, truefalse, missing, sequence, speed

function starsEarnedFor(scores: ScoreBoard, ids: string[]): number {
  return ids.reduce((sum, id) => sum + (scores[id]?.bestStars ?? 0), 0);
}

export default function MathsHome() {
  const { student } = useParams();
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, []);

  if (student !== 'riya' && student !== 'siya') return <Navigate to="/" replace />;

  const isRiya = student === 'riya';

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-6 text-white shadow-xl shadow-purple-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">🔢</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">✖️</div>
        <p className="relative text-sm font-semibold text-purple-100">Maths Tables</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Learn Your Tables! 🔢
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-purple-100">
          Pick a table from 1 to 20 and play games to learn &amp; remember it.
        </p>
      </section>

      <div className="mt-6">
        <Link
          to={`/${student}/maths/table/mixed`}
          className="group flex items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-5 text-white shadow-xl shadow-orange-200 transition active:scale-[0.97]"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-orange-100">All Tables</p>
            <h3 className="mt-1 font-display text-xl font-extrabold">Mixed Practice 🎯</h3>
            <p className="mt-1 text-sm text-white/85">Quiz, Speed Round &amp; more from every table!</p>
            <p className="mt-3 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
              ⭐ {starsEarnedFor(scores, mixedTableGameIds())}/{MIXED_GAME_COUNT * 3}
            </p>
          </div>
          <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🎯</span>
        </Link>
      </div>

      <h2 className="mt-8 mb-3 text-center font-display text-lg font-bold text-slate-700">Choose a Table 📖</h2>
      <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-5">
        {TABLES.map((table) => {
          const ids = tableGameIdsFor(table);
          const stars = starsEarnedFor(scores, ids);
          const maxStars = SINGLE_TABLE_GAME_COUNT * 3;
          return (
            <Link
              key={table}
              to={`/${student}/maths/table/${table}`}
              className={`group flex flex-col items-center justify-center gap-1 rounded-2xl bg-gradient-to-br ${gradientForTable(
                table,
              )} p-3 text-white shadow-lg shadow-purple-200/60 transition active:scale-[0.94]`}
            >
              <span className="font-display text-2xl font-extrabold leading-none">{table}</span>
              <span className="text-[10px] font-bold text-white/80">times</span>
              <span className="text-[10px] font-bold text-amber-200">
                {stars > 0 ? `⭐ ${stars}/${maxStars}` : ' '}
              </span>
            </Link>
          );
        })}
      </div>

      {isRiya && (
        <>
          <h2 className="mt-9 mb-3 text-center font-display text-lg font-bold text-slate-700">Squares &amp; Cubes ✨</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              to="/riya/maths/squares-cubes/square"
              className="group flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 p-5 text-white shadow-xl shadow-sky-200 transition active:scale-[0.97]"
            >
              <span className="text-4xl drop-shadow-sm">🔲</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">Squares</h3>
              <p className="mt-1 text-xs text-white/85">n² of numbers 1-20</p>
            </Link>
            <Link
              to="/riya/maths/squares-cubes/cube"
              className="group flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-5 text-white shadow-xl shadow-emerald-200 transition active:scale-[0.97]"
            >
              <span className="text-4xl drop-shadow-sm">🧊</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">Cubes</h3>
              <p className="mt-1 text-xs text-white/85">n³ of numbers 1-20</p>
            </Link>
            <Link
              to="/riya/maths/squares-cubes/mixed"
              className="group flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 p-5 text-white shadow-xl shadow-rose-200 transition active:scale-[0.97]"
            >
              <span className="text-4xl drop-shadow-sm">⭐</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">Mixed Challenge</h3>
              <p className="mt-1 text-xs text-white/85">Squares + Cubes quiz &amp; speed round</p>
            </Link>
          </div>
        </>
      )}

      <p className="mt-8 text-center text-xs text-slate-400">
        🎮 {allTablesGameIds().length + (isRiya ? allSquaresCubesGameIds().length : 0)} maths games to master. Scores
        are saved on this device — use the reset button up top anytime for a fresh start!
      </p>
    </div>
  );
}
