export type SiyaChapterGroup = 'birds' | 'creepy' | 'organs' | 'combined';

export interface SiyaGameMeta {
  id: string;
  title: string;
  description: string;
  emoji: string;
  img: string; // reuses the same game-type banner image keys as Riya's games
  chapterGroup: SiyaChapterGroup;
  gradient: string;
}

export const siyaGamesList: SiyaGameMeta[] = [
  // ---------- Chapter 4: Birds ----------
  { id: 'siya-birds-quiz', title: 'Bird Quiz Nest', description: 'Answer MCQs on feathers, beaks, feet & nests!', emoji: '🐦', img: 'game-quiz', chapterGroup: 'birds', gradient: 'from-sky-400 to-blue-500' },
  { id: 'siya-birds-true-false', title: 'True or Flop: Birds', description: 'Tap True or False for fun bird facts!', emoji: '✅', img: 'game-truefalse', chapterGroup: 'birds', gradient: 'from-emerald-400 to-teal-500' },
  { id: 'siya-birds-memory-match', title: 'Memory Match: Birds', description: 'Flip cards & find matching bird pairs!', emoji: '🧩', img: 'game-memory', chapterGroup: 'birds', gradient: 'from-pink-400 to-rose-500' },
  { id: 'siya-birds-term-matcher', title: 'Tap & Match Bird Words', description: 'Match each bird word to its meaning!', emoji: '🔗', img: 'game-matching', chapterGroup: 'birds', gradient: 'from-violet-400 to-indigo-500' },
  { id: 'siya-birds-fill-blank', title: 'Fill the Gap', description: 'Pick the right word to finish the sentence!', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'birds', gradient: 'from-lime-400 to-green-500' },
  { id: 'siya-birds-word-scramble', title: 'Word Scramble Sprint', description: 'Unscramble mixed-up bird words!', emoji: '🔤', img: 'game-scramble', chapterGroup: 'birds', gradient: 'from-cyan-400 to-sky-500' },
  { id: 'siya-birds-sort', title: 'Sort It Out!', description: 'Put each bird in its correct group!', emoji: '🗂️', img: 'game-sort', chapterGroup: 'birds', gradient: 'from-amber-400 to-orange-500' },
  { id: 'siya-birds-sequence', title: 'Step Order Challenge', description: 'Put the steps in the right order!', emoji: '🔢', img: 'game-sequence', chapterGroup: 'birds', gradient: 'from-teal-400 to-emerald-500' },

  // ---------- Chapter 5: Creepy Crawlies ----------
  { id: 'siya-creepy-quiz', title: 'Creepy Crawlies Quiz', description: 'Answer MCQs on insects, worms and earthworms!', emoji: '🐛', img: 'game-quiz', chapterGroup: 'creepy', gradient: 'from-lime-400 to-green-500' },
  { id: 'siya-creepy-true-false', title: 'True or Flop: Crawlies', description: 'Tap True or False for creepy crawly facts!', emoji: '✅', img: 'game-truefalse', chapterGroup: 'creepy', gradient: 'from-emerald-400 to-lime-500' },
  { id: 'siya-creepy-memory-match', title: 'Memory Match: Crawlies', description: 'Flip cards & find matching insect pairs!', emoji: '🧩', img: 'game-memory', chapterGroup: 'creepy', gradient: 'from-yellow-400 to-lime-500' },
  { id: 'siya-creepy-term-matcher', title: 'Tap & Match Crawly Words', description: 'Match each crawly word to its meaning!', emoji: '🔗', img: 'game-matching', chapterGroup: 'creepy', gradient: 'from-teal-400 to-green-500' },
  { id: 'siya-creepy-fill-blank', title: 'Fill the Gap', description: 'Pick the right word about insects and worms!', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'creepy', gradient: 'from-lime-400 to-emerald-500' },
  { id: 'siya-creepy-word-scramble', title: 'Word Scramble Sprint', description: 'Unscramble creepy crawly words!', emoji: '🔤', img: 'game-scramble', chapterGroup: 'creepy', gradient: 'from-cyan-400 to-green-500' },
  { id: 'siya-creepy-sort', title: 'Sort It Out!', description: 'Sort helpful/harmful insects and food habits!', emoji: '🗂️', img: 'game-sort', chapterGroup: 'creepy', gradient: 'from-amber-400 to-lime-500' },
  { id: 'siya-creepy-sequence', title: 'Step Order Challenge', description: 'Put creepy crawly steps in the right order!', emoji: '🔢', img: 'game-sequence', chapterGroup: 'creepy', gradient: 'from-green-400 to-teal-500' },

  // ---------- Chapter 6: Organs Working Together ----------
  { id: 'siya-organs-quiz', title: 'Body Organs Quiz', description: 'Answer MCQs on bones, muscles & organ systems!', emoji: '🫀', img: 'game-quiz', chapterGroup: 'organs', gradient: 'from-rose-400 to-red-500' },
  { id: 'siya-organs-true-false', title: 'True or Flop: Body', description: 'Tap True or False for fun body facts!', emoji: '🧐', img: 'game-truefalse', chapterGroup: 'organs', gradient: 'from-orange-400 to-amber-500' },
  { id: 'siya-organs-memory-match', title: 'Memory Match: Organs', description: 'Flip cards & find matching organ pairs!', emoji: '🧩', img: 'game-memory', chapterGroup: 'organs', gradient: 'from-pink-400 to-fuchsia-500' },
  { id: 'siya-organs-term-matcher', title: 'Tap & Match Body Words', description: 'Match each body word to its meaning!', emoji: '🔗', img: 'game-matching', chapterGroup: 'organs', gradient: 'from-violet-400 to-purple-500' },
  { id: 'siya-organs-fill-blank', title: 'Fill the Gap', description: 'Pick the right word to finish the sentence!', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'organs', gradient: 'from-lime-400 to-teal-500' },
  { id: 'siya-organs-word-scramble', title: 'Word Scramble Sprint', description: 'Unscramble mixed-up body words!', emoji: '🔤', img: 'game-scramble', chapterGroup: 'organs', gradient: 'from-cyan-400 to-indigo-500' },
  { id: 'siya-organs-sort', title: 'Sort It Out!', description: 'Put each organ in its correct group!', emoji: '🗂️', img: 'game-sort', chapterGroup: 'organs', gradient: 'from-amber-400 to-rose-500' },
  { id: 'siya-organs-sequence', title: 'Step Order Challenge', description: 'Put the steps in the right order!', emoji: '🔢', img: 'game-sequence', chapterGroup: 'organs', gradient: 'from-teal-400 to-blue-500' },

  // ---------- Combined: All Chapters ----------
  { id: 'siya-combined-quiz', title: 'Mega Quiz Mashup', description: 'MCQs from all Science chapters mixed together!', emoji: '🎯', img: 'game-quiz', chapterGroup: 'combined', gradient: 'from-fuchsia-400 to-indigo-500' },
  { id: 'siya-combined-true-false', title: 'True or Flop: All-Star', description: 'True or False facts from all chapters!', emoji: '🌟', img: 'game-truefalse', chapterGroup: 'combined', gradient: 'from-emerald-400 to-sky-500' },
  { id: 'siya-combined-memory-match', title: 'Memory Match: All-Star', description: 'Flip cards mixing all chapters!', emoji: '🧠', img: 'game-memory', chapterGroup: 'combined', gradient: 'from-pink-400 to-fuchsia-500' },
  { id: 'siya-combined-term-matcher', title: 'Vocabulary Master', description: 'Match every important word to its meaning!', emoji: '🏆', img: 'game-matching', chapterGroup: 'combined', gradient: 'from-violet-400 to-purple-500' },
  { id: 'siya-combined-fill-blank', title: 'Fill the Gap: All-Star', description: 'Sentences from both chapters mixed!', emoji: '📚', img: 'game-fillblank', chapterGroup: 'combined', gradient: 'from-lime-400 to-teal-500' },
  { id: 'siya-combined-word-scramble', title: 'Word Scramble: All-Star', description: 'Unscramble words from both chapters!', emoji: '🔠', img: 'game-scramble', chapterGroup: 'combined', gradient: 'from-cyan-400 to-indigo-500' },
  { id: 'siya-combined-sort', title: 'Sort It Out: All-Star', description: 'Sorting challenges from both chapters!', emoji: '🗃️', img: 'game-sort', chapterGroup: 'combined', gradient: 'from-amber-400 to-rose-500' },
  { id: 'siya-combined-sequence', title: 'Step Order: All-Star', description: 'Order the steps from both chapters!', emoji: '🧮', img: 'game-sequence', chapterGroup: 'combined', gradient: 'from-teal-400 to-blue-500' },
  { id: 'siya-speed-round', title: 'Speed Round Showdown', description: 'Beat the clock in this rapid-fire final challenge!', emoji: '⏱️', img: 'game-speedround', chapterGroup: 'combined', gradient: 'from-red-400 to-pink-500' },
];

export const siyaChapterMeta = {
  birds: {
    title: 'Chapter 4',
    subtitle: 'Birds',
    emoji: '🐦',
    img: 'chapter-birds-cover',
    gradient: 'from-sky-400 via-blue-400 to-cyan-400',
    blurb: 'Feathers, beaks, feet, claws & nests of birds!',
  },
  creepy: {
    title: 'Chapter 5',
    subtitle: 'Creepy Crawlies',
    emoji: '🐛',
    img: 'chapter-creepy-cover',
    gradient: 'from-lime-400 via-green-400 to-emerald-400',
    blurb: 'Insects, worms, helpful/harmful insects and earthworms!',
  },
  organs: {
    title: 'Chapter 6',
    subtitle: 'Organs Working Together',
    emoji: '🫀',
    img: 'chapter-organs-cover',
    gradient: 'from-rose-400 via-pink-400 to-orange-400',
    blurb: 'Bones, muscles, and the amazing organ systems in our body!',
  },
} as const;

export const siyaCombinedMeta = {
  title: 'All Chapters',
  subtitle: 'All-Star Challenge',
  emoji: '🏆',
  img: 'combined-siya-cover',
  gradient: 'from-amber-400 via-orange-400 to-pink-400',
  blurb: 'Mix it up! Games that cover Birds, Creepy Crawlies and Organs together.',
};

export function siyaGamesForGroup(group: SiyaChapterGroup): SiyaGameMeta[] {
  return siyaGamesList.filter((g) => g.chapterGroup === group);
}
