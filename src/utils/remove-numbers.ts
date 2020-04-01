import { GRID } from "../typings/fill-grid";
import { copyGrid } from "./copy-grid";
import { global } from '../global/global'
import { solveGrid } from "./solve-grid";

const randomIndex = () => {
  return Math.floor(Math.random() * Math.floor(9));
};

export const removeNumbers = (grid: GRID, attempts = 5): GRID => {
  while (attempts > 0) {
    let row = randomIndex()
    let col = randomIndex()

    while (grid[row][col] === 0) {
      row = randomIndex()
      col = randomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }

  return grid
}
