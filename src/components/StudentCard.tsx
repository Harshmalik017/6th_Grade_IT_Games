import { Link } from 'react-router-dom';
import TechImage from './TechImage';

interface Props {
  to: string;
  name: string;
  classLabel: string;
  subtitle: string;
  emoji: string;
  img: string;
  gradient: string;
  comingSoon?: boolean;
}

export default function StudentCard({ to, name, classLabel, subtitle, emoji, img, gradient, comingSoon = false }: Props) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-6 text-center text-white shadow-xl shadow-purple-200/60 transition active:scale-[0.97]`}
    >
      {comingSoon && (
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
          Coming Soon
        </span>
      )}
      <div className="absolute -right-6 -top-6 text-8xl opacity-10">{emoji}</div>
      <div className="absolute -bottom-8 -left-6 text-7xl opacity-10">{emoji}</div>

      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 shadow-inner backdrop-blur-sm">
        <TechImage img={img} emoji={emoji} className="text-6xl drop-shadow-md" />
      </span>

      <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight">{name}</h2>
      <span className="mt-1 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">{classLabel}</span>
      <p className="mt-3 max-w-[220px] text-sm leading-snug text-white/85">{subtitle}</p>

      <span className="mt-5 rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-slate-700 shadow-sm transition group-active:scale-95">
        {comingSoon ? 'Peek Inside 👀' : "Let's Play! 🎮"}
      </span>
    </Link>
  );
}
