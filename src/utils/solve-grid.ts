import { GRID, NUMBERS } from "../typings/fill-grid";
import { global } from "../global/global";
import { isInRow, isInCol, isInSquare } from "./isIn";
import { identifyWorkingSquare } from "./identify-square";
import { checkGrid } from "./checkGrid";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const solveGrid = (grid: GRID) => {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifyWorkingSquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) return true
            }
          }
      break
    }
  }

  grid[row][col] = 0
}
