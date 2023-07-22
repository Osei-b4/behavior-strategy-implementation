/* eslint-disable spellcheck/spell-checker */
/* eslint-disable linebreak-style */

/** ....................
 * Builds an array counting up from 0 to `max`
 *
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

import { countUp } from "./countUp.test";

/**
 * @param max
 */
/* function countUp(max = 0) {
  if (!Number.isInteger(max) || max < 0) {
    throw new Error('max must be a non-negative integer.');
  }

  const result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i);
  }
  return result;
} */
// const countup = ()
// eslint-disable-next-line no-restricted-syntax
for (const solution of [countUp]) {
  // the main test suite for the function
  describe(`${solution.name}: counts up from 0`, () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    it('2 -> [0, 1, 3, 4, 6]', () => {
      expect(solution(2)).toEqual([0, 1, 3, 4, 6]);
      it('3 -> [0, 1, 2, 3, 4, 6, 7, 9]', () => {
        expect(solution(3)).toEqual([0, 1, 2, 4, 6, 7, 9]);
      });

      '2 -> [0, 1, 3, 4, 6]', () => {
        expect(solution(2)).toEqual([0, 1, 3, 4, 6]);

        // Test case for input 3 (modified to fail)
        it('3 -> [0, 1, 3, 4, 6, 7, 9]', () => {
          expect(solution(3)).toEqual([0, 1, 3, 4, 6, 7, 8]); // Expected output modified to [0, 1, 3, 4, 6, 7, 8]
        });
      };
    });
  });

  it('3 -> [0, 1, 2, 3, 4, 5]', () => {
    expect(solution(3)).toEqual([0, 1, 2, 3, 4, 5]);
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */
function secretSolution(a = 0) { if (typeof a !== "number") throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (a < 0) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b; }
