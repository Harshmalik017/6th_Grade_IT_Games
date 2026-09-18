interface Props {
  current: number;
  total: number;
  colorClass?: string;
}

export default function ProgressBar({ current, total, colorClass = 'bg-purple-500' }: Props) {
  const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0;
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs font-semibold text-slate-400">
        <span>Question {Math.min(current + 1, total)} of {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 shadow-inner ring-1 ring-slate-200">
        <div
          className={`h-full rounded-full ${colorClass} shadow-sm transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
