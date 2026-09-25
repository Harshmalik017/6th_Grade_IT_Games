// Shared content types used across all games

export type ChapterId = 2 | 3 | 4 | 5 | 6;

export interface QuizQuestion {
  id: string;
  chapter?: ChapterId;
  question: string;
  options: string[];
  answerIndex: number;
  emoji?: string;
  img?: string; // optional key into /public/images/<img>.png, falls back to emoji
}

export interface TrueFalseItem {
  id: string;
  chapter?: ChapterId;
  statement: string;
  answer: boolean;
}

export interface MatchPair {
  id: string;
  chapter: ChapterId;
  term: string;
  definition: string;
  emoji: string;
  img?: string;
}

export interface FillBlankItem {
  id: string;
  chapter?: ChapterId;
  sentence: string; // contains "___" as the blank placeholder
  options: string[];
  answer: string;
}

export interface ScrambleItem {
  id: string;
  chapter: ChapterId;
  word: string; // the answer, letters only (spaces allowed but keep short)
  hint: string;
  emoji: string;
  img?: string;
}

export interface SortItem {
  name: string;
  category: string;
  emoji: string;
  img?: string;
}

export interface SortGameData {
  id: string;
  title: string;
  categories: string[];
  items: SortItem[];
}

export interface SequenceGameData {
  id: string;
  title: string;
  emoji: string;
  img?: string;
  steps: string[];
}
