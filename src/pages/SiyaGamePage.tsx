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
  birdsQuiz,
  birdsTrueFalse,
  birdsFillBlanks,
  birdsScramble,
  sortBirdsByFeet,
  sortBirdsByNest,
  sequenceBirdFlight,
  sequenceWoodpecker,
} from '../data/siyaBirds';
import {
  organsQuiz,
  organsTrueFalse,
  organsFillBlanks,
  organsScramble,
  sortOrgansExternalInternal,
  sortOrgansBySystem,
  sequenceDigestion,
  sequenceBreathing,
} from '../data/siyaOrgans';
import { birdsMatchPairs, organsMatchPairs } from '../data/siyaMatchPairs';
import { siyaGamesList } from '../data/siyaGamesList';

const mixedQuiz = [...birdsQuiz, ...organsQuiz];
const mixedTrueFalse = [...birdsTrueFalse, ...organsTrueFalse];
const mixedFillBlanks = [...birdsFillBlanks, ...organsFillBlanks];
const mixedScramble = [...birdsScramble, ...organsScramble];
const mixedMatchPairs = [...birdsMatchPairs, ...organsMatchPairs];
const allSortDatasets = [sortBirdsByFeet, sortBirdsByNest, sortOrgansExternalInternal, sortOrgansBySystem];
const allSequenceDatasets = [sequenceBirdFlight, sequenceWoodpecker, sequenceDigestion, sequenceBreathing];

export default function SiyaGamePage() {
  const { gameId } = useParams();
  const meta = siyaGamesList.find((g) => g.id === gameId);
  if (!meta) return <Navigate to="/siya" replace />;

  switch (gameId) {
    // ---------- Chapter 4: Birds ----------
    case 'siya-birds-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={birdsQuiz} questionCount={10} accentClass="bg-sky-500" />;
    case 'siya-birds-true-false':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={birdsTrueFalse} questionCount={10} accentClass="bg-emerald-500" />;
    case 'siya-birds-memory-match':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={birdsMatchPairs} pairCount={6} />;
    case 'siya-birds-term-matcher':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={birdsMatchPairs} pairCount={8} />;
    case 'siya-birds-fill-blank':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={birdsFillBlanks} questionCount={10} />;
    case 'siya-birds-word-scramble':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={birdsScramble} questionCount={8} />;
    case 'siya-birds-sort':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sortBirdsByFeet, sortBirdsByNest]} />;
    case 'siya-birds-sequence':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sequenceBirdFlight, sequenceWoodpecker]} />;

    // ---------- Chapter 6: Organs Working Together ----------
    case 'siya-organs-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={organsQuiz} questionCount={10} accentClass="bg-rose-500" />;
    case 'siya-organs-true-false':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={organsTrueFalse} questionCount={10} accentClass="bg-orange-500" />;
    case 'siya-organs-memory-match':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={organsMatchPairs} pairCount={6} />;
    case 'siya-organs-term-matcher':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={organsMatchPairs} pairCount={8} />;
    case 'siya-organs-fill-blank':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={organsFillBlanks} questionCount={10} />;
    case 'siya-organs-word-scramble':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={organsScramble} questionCount={8} />;
    case 'siya-organs-sort':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sortOrgansExternalInternal, sortOrgansBySystem]} />;
    case 'siya-organs-sequence':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={[sequenceDigestion, sequenceBreathing]} />;

    // ---------- Combined: Both Chapters ----------
    case 'siya-combined-quiz':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={mixedQuiz} questionCount={12} accentClass="bg-indigo-500" />;
    case 'siya-combined-true-false':
      return <TrueFalseGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedTrueFalse} questionCount={12} accentClass="bg-sky-500" />;
    case 'siya-combined-memory-match':
      return <MemoryMatchGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={mixedMatchPairs} pairCount={8} />;
    case 'siya-combined-term-matcher':
      return <TermMatcherGame gameId={meta.id} title={meta.title} emoji={meta.emoji} pairs={mixedMatchPairs} pairCount={10} />;
    case 'siya-combined-fill-blank':
      return <FillBlankGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedFillBlanks} questionCount={12} />;
    case 'siya-combined-word-scramble':
      return <WordScrambleGame gameId={meta.id} title={meta.title} emoji={meta.emoji} items={mixedScramble} questionCount={10} />;
    case 'siya-combined-sort':
      return <SortGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={allSortDatasets} />;
    case 'siya-combined-sequence':
      return <SequenceGame gameId={meta.id} title={meta.title} emoji={meta.emoji} datasets={allSequenceDatasets} />;
    case 'siya-speed-round':
      return <QuizGame gameId={meta.id} title={meta.title} emoji={meta.emoji} questions={mixedQuiz} questionCount={15} timerSeconds={10} accentClass="bg-red-500" />;

    default:
      return <Navigate to="/siya" replace />;
  }
}
