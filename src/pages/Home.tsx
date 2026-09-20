import { useEffect, useState } from 'react';
import { gamesList, chapterMeta, combinedMeta, gamesForGroup } from '../data/gamesList';
import ChapterCard from '../components/ChapterCard';
import { loadScores, type ScoreBoard } from '../utils/storage';

function starsEarnedFor(scores: ScoreBoard, ids: string[]): number {
  return ids.reduce((sum, id) => sum + (scores[id]?.bestStars ?? 0), 0);
}

export default function Home() {
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const ch4Games = gamesForGroup(4);
  const ch5Games = gamesForGroup(5);
  const combinedGames = gamesForGroup('combined');

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 p-6 text-white shadow-xl shadow-purple-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">✨</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🎮</div>
        <p className="relative text-sm font-semibold text-purple-100">Hi Riya! 👋</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Let's Play &amp; Learn ✨
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-purple-100">
          Class 6 Computer Science · Pick a chapter to start playing!
        </p>
      </section>

      <section className="mt-7 rounded-3xl bg-white/80 p-4 shadow-lg shadow-purple-100 ring-1 ring-purple-100">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-purple-500">Subject</p>
            <h2 className="font-display text-xl font-extrabold text-slate-800">Computer Science</h2>
            <p className="text-xs text-slate-500">Riya · Class 6 · Chapter 4 &amp; Chapter 6</p>
          </div>
          <span className="rounded-2xl bg-purple-100 px-3 py-2 text-2xl">💻</span>
        </div>

        <h3 className="mb-3 font-display text-lg font-bold text-slate-700">Choose a Chapter 📖</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ChapterCard
            to="/chapter/4"
            title={chapterMeta[4].title}
            subtitle={chapterMeta[4].subtitle}
            emoji={chapterMeta[4].emoji}
            img={chapterMeta[4].img}
            gradient={chapterMeta[4].gradient}
            blurb={chapterMeta[4].blurb}
            gameCount={ch4Games.length}
            starsEarned={starsEarnedFor(scores, ch4Games.map((g) => g.id))}
            maxStars={ch4Games.length * 3}
          />
          <ChapterCard
            to="/chapter/5"
            title={chapterMeta[5].title}
            subtitle={chapterMeta[5].subtitle}
            emoji={chapterMeta[5].emoji}
            img={chapterMeta[5].img}
            gradient={chapterMeta[5].gradient}
            blurb={chapterMeta[5].blurb}
            gameCount={ch5Games.length}
            starsEarned={starsEarnedFor(scores, ch5Games.map((g) => g.id))}
            maxStars={ch5Games.length * 3}
          />
        </div>

        <div className="mt-4">
          <ChapterCard
            to="/chapter/combined"
            title={combinedMeta.title}
            subtitle={combinedMeta.subtitle}
            emoji={combinedMeta.emoji}
            img={combinedMeta.img}
            gradient={combinedMeta.gradient}
            blurb={combinedMeta.blurb}
            gameCount={combinedGames.length}
            starsEarned={starsEarnedFor(scores, combinedGames.map((g) => g.id))}
            maxStars={combinedGames.length * 3}
          />
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-slate-400">
        🎮 {gamesList.length} games in total across all chapters. Scores are saved on this device, so clearing your
        browser history will erase them — use the reset button up top anytime for a fresh start!
      </p>
    </div>
  );
}
