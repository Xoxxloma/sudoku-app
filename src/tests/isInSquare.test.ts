import { isInSquare } from "../utils/isIn";
import { SQUARE } from "../typings/fill-grid";


describe("isInSquare", () => {
  it("returns true when value is in grid square", () => {
    const square: SQUARE = [
      [1, 7, 8],
      [6, 3, 9],
      [4, 2, 5]
    ]
    expect(isInSquare({square, value: 1})).toBeTruthy()
    expect(isInSquare({square, value: 6})).toBeTruthy()
  })

  it("returns false when value is not in grid square", () => {
    const square: SQUARE = [
      [0, 7, 8],
      [0, 3, 9],
      [4, 2, 5]
    ]
    expect(isInSquare({square, value: 1})).toBeFalsy()
    expect(isInSquare({square, value: 6})).toBeFalsy()
  })
})