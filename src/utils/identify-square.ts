import { GRID, SQUARE } from "../typings/fill-grid";

interface ISQUARE {
  grid: GRID
  row: number
  col: number
}

export const identifyWorkingSquare = ({ col, grid, row }: ISQUARE): SQUARE => {
  const square = [];
  const colLowerLimit = col < 3 ? 0 : col < 6 ? 3 : 6;
  const rowLowerLimit = row < 3 ? 0 : row < 6 ? 3 : 6;
 
  let c = colLowerLimit;
  for (let r = rowLowerLimit; r < rowLowerLimit + 3; r++) {
    square.push([ grid[r][c], grid[r][c+1], grid[r][c+2] ]);
  }
 
  return square as SQUARE;
};