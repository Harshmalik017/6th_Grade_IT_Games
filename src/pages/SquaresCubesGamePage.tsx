import { useParams, Navigate } from 'react-router-dom';
import QuizGame from '../games/QuizGame';
import TrueFalseGame from '../games/TrueFalseGame';
import FillBlankGame from '../games/FillBlankGame';
import FlashcardGame from '../games/FlashcardGame';
import {
  sqCubeGameId,
  sqCubeQuizQuestions,
  sqCubeTrueFalseItems,
  sqCubeMissingNumberItems,
  sqCubeFlashcards,
  sqCubeMixedQuizPool,
} from '../data/mathsGames';

export default function SquaresCubesGamePage() {
  const { mode, gameType } = useParams();

  if (mode !== 'square' && mode !== 'cube' && mode !== 'mixed') {
    return <Navigate to="/riya/maths/squares-cubes" replace />;
  }

  const gameId = sqCubeGameId(mode, gameType as any);
  const backTo = `/riya/maths/squares-cubes/${mode}`;

  if (mode === 'square' || mode === 'cube') {
    const label = mode === 'square' ? 'Squares' : 'Cubes';
    const emoji = mode === 'square' ? '🔲' : '🧊';
    switch (gameType) {
      case 'learn':
        return <FlashcardGame gameId={gameId} title={label} emoji={emoji} cards={sqCubeFlashcards(mode)} />;
      case 'quiz':
        return <QuizGame gameId={gameId} title={label} emoji={emoji} questions={sqCubeQuizQuestions(mode)} questionCount={10} accentClass="bg-sky-500" />;
      case 'truefalse':
        return <TrueFalseGame gameId={gameId} title={label} emoji="✅" items={sqCubeTrueFalseItems(mode)} questionCount={10} accentClass="bg-emerald-500" />;
      case 'missing':
        return <FillBlankGame gameId={gameId} title={label} emoji="❓" items={sqCubeMissingNumberItems(mode)} questionCount={10} />;
      default:
        return <Navigate to={backTo} replace />;
    }
  }

  switch (gameType) {
    case 'quiz':
      return <QuizGame gameId={gameId} title="Mixed Challenge" emoji="⭐" questions={sqCubeMixedQuizPool()} questionCount={12} accentClass="bg-indigo-500" />;
    case 'speed':
      return <QuizGame gameId={gameId} title="Mixed Challenge" emoji="⏱️" questions={sqCubeMixedQuizPool()} questionCount={15} timerSeconds={8} accentClass="bg-red-500" />;
    default:
      return <Navigate to={backTo} replace />;
  }
}
