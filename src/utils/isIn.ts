import { GRID, NUMBERS, SQUARE } from "../typings/fill-grid";

interface IRow {
  grid: GRID
  row: number
  value: NUMBERS
}

export const isInRow = ({grid, row, value}: IRow): boolean => {
  return grid[row].includes(value)
}

interface ICol {
  grid: GRID
  value: NUMBERS
  col: number
}

export const isInCol = ({grid, col, value}: ICol): boolean => {
  for (let i = 0; i < 9; i ++) {
    if (value === grid[i][col]) {
      return true;
    }
  }
  return false;
}

interface IInput {
  square: SQUARE
  value: NUMBERS
}

export const isInSquare = ({ square, value }: IInput): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}