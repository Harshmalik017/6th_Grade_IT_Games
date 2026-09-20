import { Navigate, useParams } from 'react-router-dom';
import FillBlankGame from '../games/FillBlankGame';
import QuizGame from '../games/QuizGame';
import TermMatcherGame from '../games/TermMatcherGame';
import TrueFalseGame from '../games/TrueFalseGame';
import {
  diversityFillBlanks,
  diversityMatchPairs,
  diversityQuiz,
  diversityTrueFalse,
  eatingFillBlanks,
  eatingMatchPairs,
  eatingQuiz,
  eatingTrueFalse,
  magnetsFillBlanks,
  magnetsMatchPairs,
  magnetsQuiz,
  magnetsTrueFalse,
  materialsFillBlanks,
  materialsMatchPairs,
  materialsQuiz,
  materialsTrueFalse,
  measurementFillBlanks,
  measurementMatchPairs,
  measurementQuiz,
  measurementTrueFalse,
  riyaScienceGamesList,
} from '../data/riyaScience';

const quizByGameId = {
  'riya-science-diversity-quiz': diversityQuiz,
  'riya-science-eating-quiz': eatingQuiz,
  'riya-science-magnets-quiz': magnetsQuiz,
  'riya-science-measurement-quiz': measurementQuiz,
  'riya-science-materials-quiz': materialsQuiz,
};

const trueFalseByGameId = {
  'riya-science-diversity-true-false': diversityTrueFalse,
  'riya-science-eating-true-false': eatingTrueFalse,
  'riya-science-magnets-true-false': magnetsTrueFalse,
  'riya-science-measurement-true-false': measurementTrueFalse,
  'riya-science-materials-true-false': materialsTrueFalse,
};

const matchByGameId = {
  'riya-science-diversity-match': diversityMatchPairs,
  'riya-science-eating-match': eatingMatchPairs,
  'riya-science-magnets-match': magnetsMatchPairs,
  'riya-science-measurement-match': measurementMatchPairs,
  'riya-science-materials-match': materialsMatchPairs,
};

const fillByGameId = {
  'riya-science-diversity-fill': diversityFillBlanks,
  'riya-science-eating-fill': eatingFillBlanks,
  'riya-science-magnets-fill': magnetsFillBlanks,
  'riya-science-measurement-fill': measurementFillBlanks,
  'riya-science-materials-fill': materialsFillBlanks,
};

const allQuiz = [...diversityQuiz, ...eatingQuiz, ...magnetsQuiz, ...measurementQuiz, ...materialsQuiz];
const allTrueFalse = [...diversityTrueFalse, ...eatingTrueFalse, ...magnetsTrueFalse, ...measurementTrueFalse, ...materialsTrueFalse];
const allMatchPairs = [...diversityMatchPairs, ...eatingMatchPairs, ...magnetsMatchPairs, ...measurementMatchPairs, ...materialsMatchPairs];
const allFillBlanks = [...diversityFillBlanks, ...eatingFillBlanks, ...magnetsFillBlanks, ...measurementFillBlanks, ...materialsFillBlanks];

function hasKey<T extends Record<string, unknown>>(record: T, key: string): key is Extract<keyof T, string> {
  return key in record;
}

export default function RiyaScienceGamePage() {
  const { gameId } = useParams();
  const meta = riyaScienceGamesList.find((game) => game.id === gameId);
  if (!meta || !gameId) return <Navigate to="/riya/science" replace />;

  if (hasKey(quizByGameId, gameId)) {
    return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={quizByGameId[gameId]} questionCount={10} accentClass="bg-emerald-500" />;
  }

  if (hasKey(trueFalseByGameId, gameId)) {
    return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={trueFalseByGameId[gameId]} questionCount={6} accentClass="bg-teal-500" />;
  }

  if (hasKey(matchByGameId, gameId)) {
    return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={matchByGameId[gameId]} pairCount={8} />;
  }

  if (hasKey(fillByGameId, gameId)) {
    return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={fillByGameId[gameId]} questionCount={6} />;
  }

  switch (gameId) {
    case 'riya-science-combined-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={allQuiz} questionCount={15} accentClass="bg-cyan-500" />;
    case 'riya-science-combined-true-false':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={allTrueFalse} questionCount={12} accentClass="bg-emerald-500" />;
    case 'riya-science-combined-match':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={allMatchPairs} pairCount={10} />;
    case 'riya-science-combined-fill':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={allFillBlanks} questionCount={12} />;
    case 'riya-science-speed-round':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={allQuiz} questionCount={15} timerSeconds={10} accentClass="bg-red-500" />;
    default:
      return <Navigate to="/riya/science" replace />;
  }
}
