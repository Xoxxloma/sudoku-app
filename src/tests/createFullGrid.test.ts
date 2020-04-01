import { GRID } from "../typings/fill-grid";
import { createFulllGrid } from "../utils/create-full-grid";

describe("it fills full 9x9 sudoku grid", () => {
  it("should return array of arrays 9x9 sudoky grid", () => {
    const grid = createFulllGrid()
    for (let row in grid) {
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })
})

