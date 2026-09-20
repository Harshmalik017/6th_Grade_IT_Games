import { useEffect, useState } from 'react';
import ChapterCard from '../components/ChapterCard';
import {
  riyaScienceChapterMeta,
  riyaScienceCombinedMeta,
  riyaScienceGamesForGroup,
  riyaScienceGamesList,
  type RiyaScienceGroup,
} from '../data/riyaScience';
import { loadScores, type ScoreBoard } from '../utils/storage';

function starsEarnedFor(scores: ScoreBoard, ids: string[]): number {
  return ids.reduce((sum, id) => sum + (scores[id]?.bestStars ?? 0), 0);
}

type RiyaScienceChapterGroup = Exclude<RiyaScienceGroup, 'combined'>;

const chapterGroups: RiyaScienceChapterGroup[] = ['diversity', 'eating', 'magnets', 'measurement', 'materials'];

export default function RiyaScienceHome() {
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const combinedGames = riyaScienceGamesForGroup('combined');

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 p-6 text-white shadow-xl shadow-emerald-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">🔬</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🌿</div>
        <p className="relative text-sm font-semibold text-emerald-50">Hi Riya! 👋</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Science Games
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-emerald-50">
          Class 6 Science · Pick a chapter to start playing!
        </p>
      </section>

      <section className="mt-7 rounded-3xl bg-white/80 p-4 shadow-lg shadow-emerald-100 ring-1 ring-emerald-100">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-500">Subject</p>
            <h2 className="font-display text-xl font-extrabold text-slate-800">Science</h2>
            <p className="text-xs text-slate-500">Riya · Class 6 · Chapters 2 to 6</p>
          </div>
          <span className="rounded-2xl bg-emerald-100 px-3 py-2 text-2xl">🔬</span>
        </div>

        <h3 className="mb-3 font-display text-lg font-bold text-slate-700">Choose a Chapter 📖</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {chapterGroups.map((group) => {
            const meta = riyaScienceChapterMeta[group];
            const games = riyaScienceGamesForGroup(group);
            return (
              <ChapterCard
                key={group}
                to={`/riya/science/chapter/${group}`}
                title={meta.title}
                subtitle={meta.subtitle}
                emoji={meta.emoji}
                img={meta.img}
                gradient={meta.gradient}
                blurb={meta.blurb}
                gameCount={games.length}
                starsEarned={starsEarnedFor(scores, games.map((game) => game.id))}
                maxStars={games.length * 3}
              />
            );
          })}
        </div>

        <div className="mt-4">
          <ChapterCard
            to="/riya/science/chapter/combined"
            title={riyaScienceCombinedMeta.title}
            subtitle={riyaScienceCombinedMeta.subtitle}
            emoji={riyaScienceCombinedMeta.emoji}
            img={riyaScienceCombinedMeta.img}
            gradient={riyaScienceCombinedMeta.gradient}
            blurb={riyaScienceCombinedMeta.blurb}
            gameCount={combinedGames.length}
            starsEarned={starsEarnedFor(scores, combinedGames.map((game) => game.id))}
            maxStars={combinedGames.length * 3}
          />
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-slate-400">
        🎮 {riyaScienceGamesList.length} Science games in total. Scores are saved on this device, so clearing your
        browser history will erase them — use the Data Reset button up top anytime for a fresh start!
      </p>
    </div>
  );
}
