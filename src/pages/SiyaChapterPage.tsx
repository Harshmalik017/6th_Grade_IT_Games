import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { siyaChapterMeta, siyaCombinedMeta, siyaGamesForGroup, type SiyaChapterGroup } from '../data/siyaGamesList';
import GameCard from '../components/GameCard';
import TechImage from '../components/TechImage';
import { loadScores, type ScoreBoard } from '../utils/storage';

function isSiyaChapterGroup(group: string | undefined): group is SiyaChapterGroup {
  return group === 'birds' || group === 'creepy' || group === 'organs' || group === 'combined';
}

export default function SiyaChapterPage() {
  const { group } = useParams();
  const [scores, setScores] = useState<ScoreBoard>({});

  useEffect(() => {
    setScores(loadScores());
  }, [group]);

  if (!isSiyaChapterGroup(group)) return <Navigate to="/siya" replace />;

  const meta = group === 'combined' ? siyaCombinedMeta : siyaChapterMeta[group];
  const games = siyaGamesForGroup(group);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${meta.gradient} p-6 text-white shadow-xl shadow-sky-200`}>
        <div className="absolute -right-6 -top-6 text-8xl opacity-20">{meta.emoji}</div>
        <TechImage img={meta.img} emoji={meta.emoji} className="text-5xl" />
        <h1 className="relative mt-2 font-display text-2xl font-extrabold leading-tight">{meta.title}</h1>
        <p className="relative text-sm font-semibold text-white/85">{meta.subtitle}</p>
        <p className="relative mt-2 max-w-sm text-sm text-white/80">{meta.blurb}</p>
      </section>

      <h2 className="mt-7 mb-3 font-display text-lg font-bold text-slate-700">Pick a Game to Play 🎲</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} result={scores[game.id]} to={`/siya/game/${game.id}`} />
        ))}
      </div>
    </div>
  );
}
