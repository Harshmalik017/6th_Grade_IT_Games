import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import TechImage from './TechImage';
import type { GameResult } from '../utils/storage';

interface GameCardMeta {
  id: string;
  title: string;
  description: string;
  emoji: string;
  img: string;
  gradient: string;
}

interface Props {
  game: GameCardMeta;
  result?: GameResult;
  to?: string;
}

export default function GameCard({ game, result, to }: Props) {
  return (
    <Link
      to={to ?? `/game/${game.id}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-purple-100 ring-1 ring-black/5 transition active:scale-95"
    >
      <div className={`flex h-24 items-center justify-center bg-gradient-to-br ${game.gradient}`}>
        <TechImage img={game.img} emoji={game.emoji} className="text-5xl drop-shadow-sm transition group-active:scale-90" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <h3 className="font-display text-base font-bold leading-tight text-slate-800">{game.title}</h3>
        <p className="text-xs leading-snug text-slate-500">{game.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating stars={result?.bestStars ?? 0} size={18} />
          {result && result.plays > 0 && (
            <span className="text-[11px] font-semibold text-slate-400">Best {result.bestPercent}%</span>
          )}
        </div>
      </div>
    </Link>
  );
}
