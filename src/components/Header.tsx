import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home, RotateCcw, Sparkles } from 'lucide-react';
import ConfirmDialog, { useConfirmDialog } from './ConfirmDialog';
import { resetAllScores, totalStarsCollected } from '../utils/storage';
import { gamesList } from '../data/gamesList';
import { siyaGamesList } from '../data/siyaGamesList';
import { riyaScienceGamesList } from '../data/riyaScience';
import { useEffect, useState } from 'react';

const riyaGameIds = [...gamesList.map((g) => g.id), ...riyaScienceGamesList.map((g) => g.id)];
const allGameIds = [...riyaGameIds, ...siyaGamesList.map((g) => g.id)];

function idsForPath(pathname: string): string[] {
  if (pathname === '/riya') {
    return riyaGameIds;
  }
  if (pathname === '/riya/science' || pathname.startsWith('/riya/science/')) {
    return riyaScienceGamesList.map((g) => g.id);
  }
  if (pathname === '/riya/computer' || pathname.startsWith('/chapter/') || pathname.startsWith('/game/')) {
    return gamesList.map((g) => g.id);
  }
  if (pathname === '/siya' || pathname.startsWith('/siya/')) {
    return siyaGamesList.map((g) => g.id);
  }
  return allGameIds;
}

function titleForPath(pathname: string): string {
  if (pathname === '/siya' || pathname.startsWith('/siya/')) return "Siya's Science Play";
  if (pathname === '/riya/science' || pathname.startsWith('/riya/science/')) return "Riya's Science Play";
  if (pathname === '/riya/computer' || pathname.startsWith('/chapter/') || pathname.startsWith('/game/')) return "Riya's Computer Science Play";
  if (pathname === '/riya') return "Riya's Learning Play";
  return 'Learning Games';
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const confirm = useConfirmDialog();
  const [stars, setStars] = useState(0);
  const currentGameIds = idsForPath(location.pathname);
  const maxStars = currentGameIds.length * 3;

  useEffect(() => {
    setStars(totalStarsCollected(idsForPath(location.pathname)));
  }, [location]);

  function handleReset() {
    resetAllScores();
    setStars(0);
    confirm.hide();
  }

  function goBack() {
    const gameMatch = location.pathname.match(/^\/game\/([^/]+)/);
    const riyaScienceGameMatch = location.pathname.match(/^\/riya\/science\/game\/([^/]+)/);
    const siyaGameMatch = location.pathname.match(/^\/siya\/game\/([^/]+)/);
    if (gameMatch) {
      const game = gamesList.find((g) => g.id === gameMatch[1]);
      const group = game?.chapterGroup;
      navigate(group ? `/chapter/${group}` : '/riya');
    } else if (riyaScienceGameMatch) {
      const game = riyaScienceGamesList.find((g) => g.id === riyaScienceGameMatch[1]);
      const group = game?.chapterGroup;
      navigate(group ? `/riya/science/chapter/${group}` : '/riya/science');
    } else if (siyaGameMatch) {
      const game = siyaGamesList.find((g) => g.id === siyaGameMatch[1]);
      const group = game?.chapterGroup;
      navigate(group ? `/siya/chapter/${group}` : '/siya');
    } else if (location.pathname.startsWith('/chapter/')) {
      navigate('/riya/computer');
    } else if (location.pathname.startsWith('/riya/science/chapter/')) {
      navigate('/riya/science');
    } else if (location.pathname === '/riya/computer' || location.pathname === '/riya/science') {
      navigate('/riya');
    } else if (location.pathname.startsWith('/siya/chapter/')) {
      navigate('/siya');
    } else {
      navigate('/');
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          {!isHome ? (
            <>
              <button
                onClick={goBack}
                aria-label="Go back"
                className="flex shrink-0 items-center gap-1 rounded-full bg-purple-100 px-3 py-2 text-xs font-bold text-purple-600 shadow-sm active:scale-95 transition"
              >
                <ChevronLeft size={18} />
                <span>Back</span>
              </button>
              <button
                onClick={() => navigate('/')}
                aria-label="Main menu"
                className="flex shrink-0 items-center gap-1 rounded-full bg-purple-100 px-3 py-2 text-xs font-bold text-purple-600 shadow-sm active:scale-95 transition"
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </>
          ) : (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-md shadow-purple-200">
              <Sparkles size={18} />
            </span>
          )}
          <Link
            to="/"
            className={`min-w-0 truncate font-display text-base font-extrabold text-slate-800 sm:text-lg ${
              !isHome ? 'hidden sm:block' : ''
            }`}
          >
            {titleForPath(location.pathname)}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1.5 ring-1 ring-amber-200">
            <span className="text-sm font-bold text-amber-600">⭐ {stars}/{maxStars}</span>
          </div>
          <button
            onClick={confirm.show}
            aria-label="Reset all progress"
            className="flex h-9 items-center justify-center gap-1 rounded-full bg-rose-100 px-3 text-xs font-bold text-rose-600 shadow-sm active:scale-95 transition"
          >
            <RotateCcw size={17} />
            <span>Data Reset</span>
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={confirm.open}
        title="Reset all progress?"
        message="This will erase all your scores and stars from this device. This cannot be undone!"
        onConfirm={handleReset}
        onCancel={confirm.hide}
      />
    </header>
  );
}
