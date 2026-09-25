import { useParams, Navigate } from 'react-router-dom';
import QuizGame from '../games/QuizGame';
import TrueFalseGame from '../games/TrueFalseGame';
import FillBlankGame from '../games/FillBlankGame';
import SequenceGame from '../games/SequenceGame';
import FlashcardGame from '../games/FlashcardGame';
import {
  TABLE_MIN,
  TABLE_MAX,
  tableGameId,
  tableQuizQuestions,
  tableTrueFalseItems,
  tableMissingNumberItems,
  tableFlashcards,
  tableSequenceData,
  mixedQuizPool,
  mixedTrueFalsePool,
  mixedMissingNumberPool,
  mixedSequenceDatasets,
} from '../data/mathsGames';

export default function MathsGamePage() {
  const { student, table, gameType } = useParams();

  if (student !== 'riya' && student !== 'siya') return <Navigate to="/" replace />;

  const isMixed = table === 'mixed';
  const tableNum = isMixed ? null : Number(table);
  if (!isMixed && (!tableNum || tableNum < TABLE_MIN || tableNum > TABLE_MAX)) {
    return <Navigate to={`/${student}/maths`} replace />;
  }

  const gameId = tableGameId(isMixed ? 'mixed' : tableNum!, gameType as any);
  const title = isMixed ? 'Mixed Tables Challenge' : `Table of ${tableNum}`;
  const backTo = `/${student}/maths/table/${table}`;

  if (!isMixed) {
    switch (gameType) {
      case 'learn':
        return <FlashcardGame gameId={gameId} title={title} emoji="🧠" cards={tableFlashcards(tableNum!)} />;
      case 'quiz':
        return <QuizGame gameId={gameId} title={title} emoji="🔢" questions={tableQuizQuestions(tableNum!)} questionCount={10} accentClass="bg-sky-500" />;
      case 'truefalse':
        return <TrueFalseGame gameId={gameId} title={title} emoji="✅" items={tableTrueFalseItems(tableNum!)} questionCount={10} accentClass="bg-emerald-500" />;
      case 'missing':
        return <FillBlankGame gameId={gameId} title={title} emoji="❓" items={tableMissingNumberItems(tableNum!)} questionCount={10} />;
      case 'sequence':
        return <SequenceGame gameId={gameId} title={title} emoji="🔗" datasets={[tableSequenceData(tableNum!)]} />;
      default:
        return <Navigate to={backTo} replace />;
    }
  }

  switch (gameType) {
    case 'quiz':
      return <QuizGame gameId={gameId} title={title} emoji="🎯" questions={mixedQuizPool()} questionCount={12} accentClass="bg-indigo-500" />;
    case 'truefalse':
      return <TrueFalseGame gameId={gameId} title={title} emoji="🌟" items={mixedTrueFalsePool()} questionCount={12} accentClass="bg-sky-500" />;
    case 'missing':
      return <FillBlankGame gameId={gameId} title={title} emoji="❓" items={mixedMissingNumberPool()} questionCount={12} />;
    case 'sequence':
      return <SequenceGame gameId={gameId} title={title} emoji="🔗" datasets={mixedSequenceDatasets(4)} />;
    case 'speed':
      return <QuizGame gameId={gameId} title={title} emoji="⏱️" questions={mixedQuizPool()} questionCount={15} timerSeconds={8} accentClass="bg-red-500" />;
    default:
      return <Navigate to={backTo} replace />;
  }
}
