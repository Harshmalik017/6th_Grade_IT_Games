import { useEffect, useState } from 'react';
import { siyaGamesList, siyaChapterMeta, siyaCombinedMeta, siyaGamesForGroup } from '../data/siyaGamesList';
import ChapterCard from '../components/ChapterCard';
import { loadScores, type ScoreBoard } from '../utils/storage';

function starsEarnedFor(scores: ScoreBoard, ids: string[]): number {
  return ids.reduce((sum, id) => sum + (scores[id]?.bestStars ?? 0), 0);
}

export default function SiyaHome() {
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const birdsGames = siyaGamesForGroup('birds');
  const organsGames = siyaGamesForGroup('organs');
  const combinedGames = siyaGamesForGroup('combined');

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 p-6 text-white shadow-xl shadow-sky-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">✨</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🐦</div>
        <p className="relative text-sm font-semibold text-sky-50">Hi Siya! 👋</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Let's Play &amp; Learn ✨
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-sky-50">
          Class 3 Science · Pick a chapter to start playing!
        </p>
      </section>

      <h2 className="mt-7 mb-3 font-display text-lg font-bold text-slate-700">Choose a Chapter 📖</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ChapterCard
          to="/siya/chapter/birds"
          title={siyaChapterMeta.birds.title}
          subtitle={siyaChapterMeta.birds.subtitle}
          emoji={siyaChapterMeta.birds.emoji}
          img={siyaChapterMeta.birds.img}
          gradient={siyaChapterMeta.birds.gradient}
          blurb={siyaChapterMeta.birds.blurb}
          gameCount={birdsGames.length}
          starsEarned={starsEarnedFor(scores, birdsGames.map((g) => g.id))}
          maxStars={birdsGames.length * 3}
        />
        <ChapterCard
          to="/siya/chapter/organs"
          title={siyaChapterMeta.organs.title}
          subtitle={siyaChapterMeta.organs.subtitle}
          emoji={siyaChapterMeta.organs.emoji}
          img={siyaChapterMeta.organs.img}
          gradient={siyaChapterMeta.organs.gradient}
          blurb={siyaChapterMeta.organs.blurb}
          gameCount={organsGames.length}
          starsEarned={starsEarnedFor(scores, organsGames.map((g) => g.id))}
          maxStars={organsGames.length * 3}
        />
      </div>

      <div className="mt-4">
        <ChapterCard
          to="/siya/chapter/combined"
          title={siyaCombinedMeta.title}
          subtitle={siyaCombinedMeta.subtitle}
          emoji={siyaCombinedMeta.emoji}
          img={siyaCombinedMeta.img}
          gradient={siyaCombinedMeta.gradient}
          blurb={siyaCombinedMeta.blurb}
          gameCount={combinedGames.length}
          starsEarned={starsEarnedFor(scores, combinedGames.map((g) => g.id))}
          maxStars={combinedGames.length * 3}
        />
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        🎮 {siyaGamesList.length} games in total across all chapters. Scores are saved on this device, so clearing
        your browser history will erase them — use the reset button up top anytime for a fresh start!
      </p>
    </div>
  );
}
