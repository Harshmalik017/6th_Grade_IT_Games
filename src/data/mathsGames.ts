// Procedurally generated content for the shared Maths Tables module (Riya & Siya)
// and the Squares & Cubes module (Riya only). Facts are generated on the fly instead
// of hand-authored, since multiplication/square/cube facts follow a simple pattern.
import type { QuizQuestion, TrueFalseItem, FillBlankItem, SequenceGameData } from './types';
import { shuffle, sample } from '../utils/random';

export const TABLE_MIN = 1;
export const TABLE_MAX = 20;
export const MULTIPLIER_MAX = 10;
export const TABLES: number[] = Array.from({ length: TABLE_MAX - TABLE_MIN + 1 }, (_, i) => TABLE_MIN + i);

export type TableGameType = 'learn' | 'quiz' | 'truefalse' | 'missing' | 'sequence';
export type MixedGameType = 'quiz' | 'truefalse' | 'missing' | 'sequence' | 'speed';

const tileGradients = [
  'from-fuchsia-500 to-purple-600',
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-indigo-600',
  'from-cyan-500 to-sky-600',
  'from-lime-500 to-green-600',
];

export function gradientForTable(table: number): string {
  return tileGradients[table % tileGradients.length];
}

function uniqueDistractors(correct: number, count: number, min: number, spread: number): number[] {
  const set = new Set<number>();
  let guard = 0;
  while (set.size < count && guard < 200) {
    guard++;
    const offset = Math.floor(Math.random() * (spread * 2 + 1)) - spread;
    const candidate = correct + offset;
    if (candidate !== correct && candidate >= min) set.add(candidate);
  }
  // Fallback in the rare case we couldn't find enough unique nearby numbers
  let filler = correct + spread + 1;
  while (set.size < count) {
    if (filler !== correct) set.add(filler);
    filler++;
  }
  return [...set];
}

export interface TableFact {
  multiplier: number;
  product: number;
}

export function tableFacts(table: number): TableFact[] {
  return Array.from({ length: MULTIPLIER_MAX }, (_, i) => ({ multiplier: i + 1, product: table * (i + 1) }));
}

export function tableQuizQuestions(table: number): QuizQuestion[] {
  return tableFacts(table).map(({ multiplier, product }) => {
    const distractors = uniqueDistractors(product, 3, 0, Math.max(6, table));
    const options = shuffle([product, ...distractors]).map(String);
    return {
      id: `t${table}-quiz-${multiplier}`,
      question: `${table} × ${multiplier} = ?`,
      options,
      answerIndex: options.indexOf(String(product)),
      emoji: '🔢',
    };
  });
}

export function tableTrueFalseItems(table: number): TrueFalseItem[] {
  return tableFacts(table).map(({ multiplier, product }, i) => {
    const shouldBeTrue = i % 2 === 0;
    const shownProduct = shouldBeTrue ? product : product + (i % 4 === 1 ? table : -table || table);
    return {
      id: `t${table}-tf-${multiplier}`,
      statement: `${table} × ${multiplier} = ${shownProduct}`,
      answer: shownProduct === product,
    };
  });
}

export function tableMissingNumberItems(table: number): FillBlankItem[] {
  return tableFacts(table).map(({ multiplier, product }) => {
    const distractors = uniqueDistractors(multiplier, 3, 1, 4);
    const options = shuffle([multiplier, ...distractors]).map(String);
    return {
      id: `t${table}-fb-${multiplier}`,
      sentence: `${table} × ___ = ${product}`,
      options,
      answer: String(multiplier),
    };
  });
}

export interface FlashcardItem {
  id: string;
  prompt: string;
  answer: string;
}

export function tableFlashcards(table: number): FlashcardItem[] {
  return tableFacts(table).map(({ multiplier, product }) => ({
    id: `t${table}-fc-${multiplier}`,
    prompt: `${table} × ${multiplier}`,
    answer: String(product),
  }));
}

export function tableSequenceData(table: number): SequenceGameData {
  const facts = tableFacts(table);
  return {
    id: `t${table}-seq`,
    title: `Table of ${table}`,
    emoji: '🔢',
    steps: facts.map((f) => `${table} × ${f.multiplier} = ${f.product}`),
  };
}

// ---------- Mixed pools across all tables (1-20) ----------
export function mixedQuizPool(): QuizQuestion[] {
  return TABLES.flatMap((t) => tableQuizQuestions(t));
}

export function mixedTrueFalsePool(): TrueFalseItem[] {
  return TABLES.flatMap((t) => tableTrueFalseItems(t));
}

export function mixedMissingNumberPool(): FillBlankItem[] {
  return TABLES.flatMap((t) => tableMissingNumberItems(t));
}

export function mixedSequenceDatasets(count = 4): SequenceGameData[] {
  return sample(TABLES, count).map((t) => tableSequenceData(t));
}

export function tableGameId(table: number | 'mixed', gameType: TableGameType | MixedGameType): string {
  return `table-${table}-${gameType}`;
}

export const SINGLE_TABLE_GAME_TYPES: TableGameType[] = ['learn', 'quiz', 'truefalse', 'missing', 'sequence'];
export const MIXED_TABLE_GAME_TYPES: MixedGameType[] = ['quiz', 'truefalse', 'missing', 'sequence', 'speed'];

export function tableGameIdsFor(table: number): string[] {
  return SINGLE_TABLE_GAME_TYPES.map((g) => tableGameId(table, g));
}

export function mixedTableGameIds(): string[] {
  return MIXED_TABLE_GAME_TYPES.map((g) => tableGameId('mixed', g));
}

export function allTablesGameIds(): string[] {
  return [...TABLES.flatMap((t) => tableGameIdsFor(t)), ...mixedTableGameIds()];
}

// ---------- Squares & Cubes (Riya only) ----------
export const SQUARE_MIN = 1;
export const SQUARE_MAX = 20;
export const SQ_NUMBERS: number[] = Array.from({ length: SQUARE_MAX - SQUARE_MIN + 1 }, (_, i) => SQUARE_MIN + i);

export type SqCubeMode = 'square' | 'cube' | 'mixed';
export type SqCubeGameType = 'learn' | 'quiz' | 'truefalse' | 'missing' | 'speed';

function powerOf(n: number, mode: 'square' | 'cube'): number {
  return mode === 'square' ? n * n : n * n * n;
}

function symbolFor(mode: 'square' | 'cube'): string {
  return mode === 'square' ? '²' : '³';
}

export function sqCubeQuizQuestions(mode: 'square' | 'cube'): QuizQuestion[] {
  return SQ_NUMBERS.map((n) => {
    const value = powerOf(n, mode);
    const distractors = uniqueDistractors(value, 3, 1, Math.max(12, n * 2));
    const options = shuffle([value, ...distractors]).map(String);
    return {
      id: `${mode}-quiz-${n}`,
      question: `${n}${symbolFor(mode)} = ?`,
      options,
      answerIndex: options.indexOf(String(value)),
      emoji: mode === 'square' ? '🔲' : '🧊',
    };
  });
}

export function sqCubeTrueFalseItems(mode: 'square' | 'cube'): TrueFalseItem[] {
  return SQ_NUMBERS.map((n, i) => {
    const value = powerOf(n, mode);
    const shouldBeTrue = i % 2 === 0;
    const shownValue = shouldBeTrue ? value : value + (i % 4 === 1 ? n : -n || n);
    return {
      id: `${mode}-tf-${n}`,
      statement: `${n}${symbolFor(mode)} = ${shownValue}`,
      answer: shownValue === value,
    };
  });
}

export function sqCubeMissingNumberItems(mode: 'square' | 'cube'): FillBlankItem[] {
  return SQ_NUMBERS.map((n) => {
    const value = powerOf(n, mode);
    const distractors = uniqueDistractors(n, 3, 1, 4);
    const options = shuffle([n, ...distractors]).map(String);
    return {
      id: `${mode}-fb-${n}`,
      sentence: `___${symbolFor(mode)} = ${value}`,
      options,
      answer: String(n),
    };
  });
}

export function sqCubeFlashcards(mode: 'square' | 'cube'): FlashcardItem[] {
  return SQ_NUMBERS.map((n) => ({
    id: `${mode}-fc-${n}`,
    prompt: `${n}${symbolFor(mode)}`,
    answer: String(powerOf(n, mode)),
  }));
}

export function sqCubeMixedQuizPool(): QuizQuestion[] {
  return [...sqCubeQuizQuestions('square'), ...sqCubeQuizQuestions('cube')];
}

export function sqCubeMixedTrueFalsePool(): TrueFalseItem[] {
  return [...sqCubeTrueFalseItems('square'), ...sqCubeTrueFalseItems('cube')];
}

export function sqCubeGameId(mode: SqCubeMode, gameType: SqCubeGameType): string {
  return `sqcube-${mode}-${gameType}`;
}

export const SINGLE_SQCUBE_GAME_TYPES: SqCubeGameType[] = ['learn', 'quiz', 'truefalse', 'missing'];
export const MIXED_SQCUBE_GAME_TYPES: SqCubeGameType[] = ['quiz', 'speed'];

export function sqCubeGameIdsFor(mode: 'square' | 'cube'): string[] {
  return SINGLE_SQCUBE_GAME_TYPES.map((g) => sqCubeGameId(mode, g));
}

export function mixedSqCubeGameIds(): string[] {
  return MIXED_SQCUBE_GAME_TYPES.map((g) => sqCubeGameId('mixed', g));
}

export function allSquaresCubesGameIds(): string[] {
  return [...sqCubeGameIdsFor('square'), ...sqCubeGameIdsFor('cube'), ...mixedSqCubeGameIds()];
}
