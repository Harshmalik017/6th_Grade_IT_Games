export type ChapterGroup = 4 | 5 | 'combined';

export interface GameMeta {
  id: string;
  title: string;
  description: string;
  emoji: string;
  img: string; // game-type banner image key, shared across chapter variants
  chapterGroup: ChapterGroup;
  gradient: string;
}

export const gamesList: GameMeta[] = [
  // ---------- Chapter 4: Emerging Technologies ----------
  { id: 'tech-quiz', title: 'Tech Quiz Blast', description: 'Answer MCQs on AI, VR, AR, Blockchain & more!', emoji: '🤖', img: 'game-quiz', chapterGroup: 4, gradient: 'from-fuchsia-500 to-purple-600' },
  { id: 'true-false-tech', title: 'True or Flop: Future Tech', description: 'Tap True or False for fun tech facts!', emoji: '✅', img: 'game-truefalse', chapterGroup: 4, gradient: 'from-emerald-500 to-teal-600' },
  { id: 'memory-match-4', title: 'Memory Match: Tech Icons', description: 'Flip cards & find matching tech pairs!', emoji: '🧩', img: 'game-memory', chapterGroup: 4, gradient: 'from-pink-500 to-rose-600' },
  { id: 'term-matcher-4', title: 'Tap & Match Vocabulary', description: 'Match each tech word to its meaning!', emoji: '🔗', img: 'game-matching', chapterGroup: 4, gradient: 'from-violet-500 to-indigo-600' },
  { id: 'fill-blank-4', title: 'Fill the Gap', description: 'Pick the right word to finish the sentence!', emoji: '✏️', img: 'game-fillblank', chapterGroup: 4, gradient: 'from-lime-500 to-green-600' },
  { id: 'word-scramble-4', title: 'Word Scramble Sprint', description: 'Unscramble mixed-up tech words!', emoji: '🔤', img: 'game-scramble', chapterGroup: 4, gradient: 'from-cyan-500 to-sky-600' },
  { id: 'sort-it-out-4', title: 'Sort It Out!', description: 'Put each item in its correct group!', emoji: '🗂️', img: 'game-sort', chapterGroup: 4, gradient: 'from-amber-500 to-orange-600' },
  { id: 'sequence-builder-4', title: 'Step Order Challenge', description: 'Put the steps in the right order!', emoji: '🔢', img: 'game-sequence', chapterGroup: 4, gradient: 'from-teal-500 to-emerald-600' },

  // ---------- Chapter 5: Internet Services ----------
  { id: 'net-quiz', title: 'Web Wizard Quiz', description: 'Test what you know about the Internet & shopping online!', emoji: '🌐', img: 'game-quiz', chapterGroup: 5, gradient: 'from-sky-500 to-blue-600' },
  { id: 'true-false-net', title: 'True or Flop: Web World', description: 'Tap True or False for Internet facts!', emoji: '🧐', img: 'game-truefalse', chapterGroup: 5, gradient: 'from-orange-500 to-amber-600' },
  { id: 'memory-match-5', title: 'Memory Match: Web Icons', description: 'Flip cards & find matching web pairs!', emoji: '🧩', img: 'game-memory', chapterGroup: 5, gradient: 'from-pink-500 to-rose-600' },
  { id: 'term-matcher-5', title: 'Tap & Match Vocabulary', description: 'Match each web word to its meaning!', emoji: '🔗', img: 'game-matching', chapterGroup: 5, gradient: 'from-violet-500 to-indigo-600' },
  { id: 'fill-blank-5', title: 'Fill the Gap', description: 'Pick the right word to finish the sentence!', emoji: '✏️', img: 'game-fillblank', chapterGroup: 5, gradient: 'from-lime-500 to-green-600' },
  { id: 'word-scramble-5', title: 'Word Scramble Sprint', description: 'Unscramble mixed-up web words!', emoji: '🔤', img: 'game-scramble', chapterGroup: 5, gradient: 'from-cyan-500 to-sky-600' },
  { id: 'sort-it-out-5', title: 'Sort It Out!', description: 'Put each item in its correct group!', emoji: '🗂️', img: 'game-sort', chapterGroup: 5, gradient: 'from-amber-500 to-orange-600' },
  { id: 'sequence-builder-5', title: 'Step Order Challenge', description: 'Put the steps in the right order!', emoji: '🔢', img: 'game-sequence', chapterGroup: 5, gradient: 'from-teal-500 to-emerald-600' },

  // ---------- Combined: Both Chapters ----------
  { id: 'combined-quiz', title: 'Mega Quiz Mashup', description: 'MCQs from both chapters mixed together!', emoji: '🎯', img: 'game-quiz', chapterGroup: 'combined', gradient: 'from-fuchsia-500 to-indigo-600' },
  { id: 'combined-true-false', title: 'True or Flop: All-Star', description: 'True or False facts from both chapters!', emoji: '🌟', img: 'game-truefalse', chapterGroup: 'combined', gradient: 'from-emerald-500 to-sky-600' },
  { id: 'combined-memory-match', title: 'Memory Match: All-Star', description: 'Flip cards mixing both chapters!', emoji: '🧠', img: 'game-memory', chapterGroup: 'combined', gradient: 'from-pink-500 to-fuchsia-600' },
  { id: 'combined-term-matcher', title: 'Vocabulary Master', description: 'Match every important word to its meaning!', emoji: '🏆', img: 'game-matching', chapterGroup: 'combined', gradient: 'from-violet-500 to-purple-600' },
  { id: 'combined-fill-blank', title: 'Fill the Gap: All-Star', description: 'Sentences from both chapters mixed!', emoji: '📚', img: 'game-fillblank', chapterGroup: 'combined', gradient: 'from-lime-500 to-teal-600' },
  { id: 'combined-word-scramble', title: 'Word Scramble: All-Star', description: 'Unscramble words from both chapters!', emoji: '🔠', img: 'game-scramble', chapterGroup: 'combined', gradient: 'from-cyan-500 to-indigo-600' },
  { id: 'combined-sort-it-out', title: 'Sort It Out: All-Star', description: 'Sorting challenges from both chapters!', emoji: '🗃️', img: 'game-sort', chapterGroup: 'combined', gradient: 'from-amber-500 to-rose-600' },
  { id: 'combined-sequence-builder', title: 'Step Order: All-Star', description: 'Order the steps from both chapters!', emoji: '🧮', img: 'game-sequence', chapterGroup: 'combined', gradient: 'from-teal-500 to-blue-600' },
  { id: 'speed-round', title: 'Speed Round Showdown', description: 'Beat the clock in this rapid-fire final challenge!', emoji: '⏱️', img: 'game-speedround', chapterGroup: 'combined', gradient: 'from-red-500 to-pink-600' },
];

export const chapterMeta = {
  4: {
    title: 'Chapter 4',
    subtitle: 'Emerging Technologies',
    emoji: '🤖',
    img: 'chapter4-cover',
    gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    blurb: 'AI, VR, AR, Blockchain, Metaverse, Robots & more!',
  },
  5: {
    title: 'Chapter 5',
    subtitle: 'Internet Services',
    emoji: '🌐',
    img: 'chapter5-cover',
    gradient: 'from-sky-500 via-blue-500 to-cyan-500',
    blurb: 'Internet, Wi-Fi, Shopping Online, Blogging & more!',
  },
} as const;

export const combinedMeta = {
  title: 'Both Chapters',
  subtitle: 'All-Star Challenge',
  emoji: '🏆',
  img: 'combined-cover',
  gradient: 'from-amber-500 via-orange-500 to-pink-500',
  blurb: 'Mix it up! Games that cover Chapter 4 and 5 together.',
};

export function gamesForGroup(group: ChapterGroup): GameMeta[] {
  return gamesList.filter((g) => g.chapterGroup === group);
}
