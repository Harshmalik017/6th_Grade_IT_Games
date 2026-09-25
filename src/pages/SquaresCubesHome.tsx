import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sqCubeGameIdsFor, mixedSqCubeGameIds } from '../data/mathsGames';
import { loadScores, type ScoreBoard } from '../utils/storage';

function starsEarnedFor(scores: ScoreBoard, ids: string[]): number {
  return ids.reduce((sum, id) => sum + (scores[id]?.bestStars ?? 0), 0);
}

export default function SquaresCubesHome() {
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const squareIds = sqCubeGameIdsFor('square');
  const cubeIds = sqCubeGameIdsFor('cube');
  const mixedIds = mixedSqCubeGameIds();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 p-6 text-white shadow-xl shadow-sky-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">🔲</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🧊</div>
        <p className="relative text-sm font-semibold text-sky-100">Riya · Maths</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Squares &amp; Cubes ✨
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-sky-100">Learn n² and n³ for numbers 1 to 20!</p>
      </section>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          to="/riya/maths/squares-cubes/square"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 p-5 text-white shadow-xl shadow-sky-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-sky-100">Squares</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">n²</h3>
              <p className="mt-2 text-sm text-white/85">1² to 20² — learn, quiz &amp; more</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                ⭐ {starsEarnedFor(scores, squareIds)}/{squareIds.length * 3}
              </p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🔲</span>
          </div>
        </Link>

        <Link
          to="/riya/maths/squares-cubes/cube"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-5 text-white shadow-xl shadow-emerald-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-100">Cubes</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">n³</h3>
              <p className="mt-2 text-sm text-white/85">1³ to 20³ — learn, quiz &amp; more</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                ⭐ {starsEarnedFor(scores, cubeIds)}/{cubeIds.length * 3}
              </p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🧊</span>
          </div>
        </Link>
      </div>

      <div className="mt-4">
        <Link
          to="/riya/maths/squares-cubes/mixed"
          className="group flex items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 p-5 text-white shadow-xl shadow-rose-200 transition active:scale-[0.97]"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-rose-100">Mixed Challenge</p>
            <h3 className="mt-1 font-display text-xl font-extrabold">Squares + Cubes ⭐</h3>
            <p className="mt-1 text-sm text-white/85">Mixed quiz &amp; a speed round!</p>
            <p className="mt-3 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
              ⭐ {starsEarnedFor(scores, mixedIds)}/{mixedIds.length * 3}
            </p>
          </div>
          <span className="text-5xl drop-shadow-sm transition group-active:scale-90">⭐</span>
        </Link>
      </div>
    </div>
  );
}
