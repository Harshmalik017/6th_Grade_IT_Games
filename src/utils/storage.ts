export interface GameResult {
  bestPercent: number; // 0-100
  bestStars: 0 | 1 | 2 | 3;
  plays: number;
  lastPercent: number;
  updatedAt: number;
}

export type ScoreBoard = Record<string, GameResult>;

const STORAGE_KEY = 'riya-tech-games:scores:v1';

export function loadScores(): ScoreBoard {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ScoreBoard) : {};
  } catch {
    return {};
  }
}

function saveScores(board: ScoreBoard) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  } catch {
    // localStorage may be unavailable (private mode) - fail silently
  }
}

export function starsForPercent(percent: number): 0 | 1 | 2 | 3 {
  if (percent >= 90) return 3;
  if (percent >= 60) return 2;
  if (percent >= 30) return 1;
  return 0;
}

export function recordResult(gameId: string, correct: number, total: number): GameResult {
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const stars = starsForPercent(percent);
  const board = loadScores();
  const existing = board[gameId];
  const updated: GameResult = {
    bestPercent: Math.max(existing?.bestPercent ?? 0, percent),
    bestStars: (Math.max(existing?.bestStars ?? 0, stars) as 0 | 1 | 2 | 3),
    plays: (existing?.plays ?? 0) + 1,
    lastPercent: percent,
    updatedAt: Date.now(),
  };
  board[gameId] = updated;
  saveScores(board);
  return updated;
}

export function getGameResult(gameId: string): GameResult | undefined {
  return loadScores()[gameId];
}

export function resetAllScores() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function totalStarsCollected(gameIds: string[]): number {
  const board = loadScores();
  return gameIds.reduce((sum, id) => sum + (board[id]?.bestStars ?? 0), 0);
}
