import { shuffle } from '../utils/shuffle';

describe('shuffle', () => {
  it('returns same length', () => {
    const array = [1, 2, 3, 4, 5];
    shuffle(array)
    expect(array).toHaveLength(5)
  })
  it('includes the same numbers', () => {
    const array = [1, 2, 3, 4, 5];
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
    expect(array).toContain(4)
    expect(array).toContain(5)
  })
})