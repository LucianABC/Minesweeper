export enum STATUS {
  GAME_LOST = 'gameLost',
  GAME_WON ='gameWon',
  GAME_ACTIVE = 'gameActive',
}

export const COL_COUNT = 9
export const ROW_COUNT = 9

export enum GAME_MODE {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const ROWS_AND_COLS = {
  [GAME_MODE.EASY]: {
    rowCount: 9,
    colCount: 9,
    mines: 10,
  },
  [GAME_MODE.MEDIUM]: {
    rowCount: 16,
    colCount: 16,
    mines: 40,
  },
  [GAME_MODE.HARD]: {
    rowCount: 16,
    colCount: 30,
    mines: 99,
  },
}

export interface Cell {
  id: number
  hasBomb: boolean,
  activated: boolean,
}