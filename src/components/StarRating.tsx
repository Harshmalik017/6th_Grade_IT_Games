import { Star } from 'lucide-react';

export default function StarRating({ stars, size = 22 }: { stars: 0 | 1 | 2 | 3; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= stars ? 'fill-amber-400 text-amber-500' : 'fill-slate-200 text-slate-300'}
        />
      ))}
    </div>
  );
}
