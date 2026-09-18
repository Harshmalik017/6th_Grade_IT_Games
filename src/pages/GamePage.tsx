import { useParams, Navigate } from 'react-router-dom';
import QuizGame from '../games/QuizGame';
import TrueFalseGame from '../games/TrueFalseGame';
import MemoryMatchGame from '../games/MemoryMatchGame';
import TermMatcherGame from '../games/TermMatcherGame';
import FillBlankGame from '../games/FillBlankGame';
import WordScrambleGame from '../games/WordScrambleGame';
import SortGame from '../games/SortGame';
import SequenceGame from '../games/SequenceGame';

import {
  chapter4Quiz,
  chapter4TrueFalse,
  chapter4FillBlanks,
  chapter4Scramble,
  sortGame4Assistants,
  sortGame4VrAr,
  sequence4Blockchain,
  sequence4Printing,
} from '../data/chapter4';
import {
  chapter5Quiz,
  chapter5TrueFalse,
  chapter5FillBlanks,
  chapter5Scramble,
  sortGame5Ecommerce,
  sortGame5Payments,
  sequence5Purchase,
  sequence5Blog,
} from '../data/chapter5';
import { chapter4MatchPairs, chapter5MatchPairs } from '../data/matchPairs';
import { gamesList } from '../data/gamesList';

const mixedQuiz = [...chapter4Quiz, ...chapter5Quiz];
const mixedTrueFalse = [...chapter4TrueFalse, ...chapter5TrueFalse];
const mixedFillBlanks = [...chapter4FillBlanks, ...chapter5FillBlanks];
const mixedScramble = [...chapter4Scramble, ...chapter5Scramble];
const mixedMatchPairs = [...chapter4MatchPairs, ...chapter5MatchPairs];
const allSortDatasets = [sortGame4Assistants, sortGame4VrAr, sortGame5Ecommerce, sortGame5Payments];
const allSequenceDatasets = [sequence4Blockchain, sequence4Printing, sequence5Purchase, sequence5Blog];

export default function GamePage() {
  const { gameId } = useParams();
  const meta = gamesList.find((g) => g.id === gameId);
  if (!meta) return <Navigate to="/" replace />;

  switch (gameId) {
    // ---------- Chapter 4 ----------
    case 'tech-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={chapter4Quiz} questionCount={10} accentClass="bg-fuchsia-500" />;
    case 'true-false-tech':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter4TrueFalse} questionCount={10} accentClass="bg-emerald-500" />;
    case 'memory-match-4':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={chapter4MatchPairs} pairCount={6} />;
    case 'term-matcher-4':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={chapter4MatchPairs} pairCount={8} />;
    case 'fill-blank-4':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter4FillBlanks} questionCount={10} />;
    case 'word-scramble-4':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter4Scramble} questionCount={8} />;
    case 'sort-it-out-4':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sortGame4Assistants, sortGame4VrAr]} />;
    case 'sequence-builder-4':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sequence4Blockchain, sequence4Printing]} />;

    // ---------- Chapter 5 ----------
    case 'net-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={chapter5Quiz} questionCount={10} accentClass="bg-sky-500" />;
    case 'true-false-net':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter5TrueFalse} questionCount={10} accentClass="bg-amber-500" />;
    case 'memory-match-5':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={chapter5MatchPairs} pairCount={6} />;
    case 'term-matcher-5':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={chapter5MatchPairs} pairCount={8} />;
    case 'fill-blank-5':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter5FillBlanks} questionCount={10} />;
    case 'word-scramble-5':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={chapter5Scramble} questionCount={8} />;
    case 'sort-it-out-5':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sortGame5Ecommerce, sortGame5Payments]} />;
    case 'sequence-builder-5':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sequence5Purchase, sequence5Blog]} />;

    // ---------- Combined: Both Chapters ----------
    case 'combined-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={mixedQuiz} questionCount={12} accentClass="bg-indigo-500" />;
    case 'combined-true-false':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedTrueFalse} questionCount={12} accentClass="bg-sky-500" />;
    case 'combined-memory-match':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={mixedMatchPairs} pairCount={8} />;
    case 'combined-term-matcher':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={mixedMatchPairs} pairCount={10} />;
    case 'combined-fill-blank':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedFillBlanks} questionCount={12} />;
    case 'combined-word-scramble':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedScramble} questionCount={10} />;
    case 'combined-sort-it-out':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={allSortDatasets} />;
    case 'combined-sequence-builder':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={allSequenceDatasets} />;
    case 'speed-round':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={mixedQuiz} questionCount={15} timerSeconds={10} accentClass="bg-red-500" />;

    default:
      return <Navigate to="/" replace />;
  }
}
