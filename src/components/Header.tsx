import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home, RotateCcw, Sparkles } from 'lucide-react';
import ConfirmDialog, { useConfirmDialog } from './ConfirmDialog';
import { resetAllScores, totalStarsCollected } from '../utils/storage';
import { gamesList } from '../data/gamesList';
import { siyaGamesList } from '../data/siyaGamesList';
import { riyaScienceGamesList } from '../data/riyaScience';
import { allTablesGameIds, allSquaresCubesGameIds } from '../data/mathsGames';
import { useEffect, useState } from 'react';

const riyaComputerIds = gamesList.map((g) => g.id);
const riyaScienceIds = riyaScienceGamesList.map((g) => g.id);
const siyaScienceIds = siyaGamesList.map((g) => g.id);
const tablesIds = allTablesGameIds();
const sqCubeIds = allSquaresCubesGameIds();
const riyaGameIds = [...riyaComputerIds, ...riyaScienceIds, ...tablesIds, ...sqCubeIds];
const siyaGameIds = [...siyaScienceIds, ...tablesIds];
const allGameIds = Array.from(new Set([...riyaGameIds, ...siyaGameIds]));

function idsForPath(pathname: string): string[] {
  if (pathname.startsWith('/riya/maths/squares-cubes')) return sqCubeIds;
  if (pathname === '/riya/maths') return [...tablesIds, ...sqCubeIds];
  if (pathname.startsWith('/riya/maths/')) return tablesIds;
  if (pathname === '/riya/science' || pathname.startsWith('/riya/science/')) {
    return riyaScienceIds;
  }
  if (pathname === '/riya/computer' || pathname.startsWith('/chapter/') || pathname.startsWith('/game/')) {
    return riyaComputerIds;
  }
  if (pathname === '/riya') {
    return riyaGameIds;
  }
  if (pathname === '/siya/maths' || pathname.startsWith('/siya/maths/')) return tablesIds;
  if (pathname === '/siya/science' || pathname.startsWith('/siya/chapter/') || pathname.startsWith('/siya/game/')) {
    return siyaScienceIds;
  }
  if (pathname === '/siya') {
    return siyaGameIds;
  }
  return allGameIds;
}

function titleForPath(pathname: string): string {
  if (pathname.startsWith('/riya/maths/squares-cubes')) return "Riya's Squares & Cubes";
  if (pathname.startsWith('/riya/maths')) return "Riya's Maths Tables";
  if (pathname === '/riya/science' || pathname.startsWith('/riya/science/')) return "Riya's Science Play";
  if (pathname === '/riya/computer' || pathname.startsWith('/chapter/') || pathname.startsWith('/game/')) return "Riya's Computer Science Play";
  if (pathname === '/riya') return "Riya's Learning Play";
  if (pathname.startsWith('/siya/maths')) return "Siya's Maths Tables";
  if (pathname === '/siya/science' || pathname.startsWith('/siya/chapter/') || pathname.startsWith('/siya/game/')) return "Siya's Science Play";
  if (pathname === '/siya') return "Siya's Learning Play";
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
    const mathsGameMatch = location.pathname.match(/^\/(riya|siya)\/maths\/table\/([^/]+)\/game\/([^/]+)/);
    const sqCubeGameMatch = location.pathname.match(/^\/riya\/maths\/squares-cubes\/([^/]+)\/game\/([^/]+)/);
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
      navigate(group ? `/siya/chapter/${group}` : '/siya/science');
    } else if (mathsGameMatch) {
      const [, student, table] = mathsGameMatch;
      navigate(`/${student}/maths/table/${table}`);
    } else if (sqCubeGameMatch) {
      const [, mode] = sqCubeGameMatch;
      navigate(`/riya/maths/squares-cubes/${mode}`);
    } else if (location.pathname.startsWith('/chapter/')) {
      navigate('/riya/computer');
    } else if (location.pathname.startsWith('/riya/science/chapter/')) {
      navigate('/riya/science');
    } else if (location.pathname === '/riya/computer' || location.pathname === '/riya/science') {
      navigate('/riya');
    } else if (location.pathname.startsWith('/siya/chapter/')) {
      navigate('/siya/science');
    } else if (location.pathname === '/siya/science') {
      navigate('/siya');
    } else if (/^\/riya\/maths\/table\/[^/]+$/.test(location.pathname)) {
      navigate('/riya/maths');
    } else if (/^\/siya\/maths\/table\/[^/]+$/.test(location.pathname)) {
      navigate('/siya/maths');
    } else if (location.pathname === '/riya/maths' || location.pathname === '/siya/maths') {
      navigate(location.pathname.startsWith('/riya') ? '/riya' : '/siya');
    } else if (/^\/riya\/maths\/squares-cubes\/[^/]+$/.test(location.pathname)) {
      navigate('/riya/maths/squares-cubes');
    } else if (location.pathname === '/riya/maths/squares-cubes') {
      navigate('/riya/maths');
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
