import { Link } from 'react-router-dom';
import TechImage from './TechImage';

interface Props {
  to: string;
  title: string;
  subtitle: string;
  emoji: string;
  img: string;
  gradient: string;
  blurb: string;
  gameCount: number;
  starsEarned: number;
  maxStars: number;
}

export default function ChapterCard({ to, title, subtitle, emoji, img, gradient, blurb, gameCount, starsEarned, maxStars }: Props) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-5 text-white shadow-xl shadow-purple-200/60 transition active:scale-[0.97]`}
    >
      <div className="absolute -right-4 -top-4 text-7xl opacity-10">{emoji}</div>
      <TechImage img={img} emoji={emoji} className="text-6xl drop-shadow-md" />
      <h2 className="mt-3 font-display text-xl font-extrabold leading-tight">{title}</h2>
      <p className="text-sm font-semibold text-white/85">{subtitle}</p>
      <p className="mt-2 text-xs leading-snug text-white/80">{blurb}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">🎮 {gameCount} games</span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">⭐ {starsEarned}/{maxStars}</span>
      </div>
    </Link>
  );
}
