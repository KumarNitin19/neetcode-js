/**
 * LeetCode #36 - Valid Sudoku
 * Difficulty: Medium
 *
 * Problem Link:
 * https://leetcode.com/problems/valid-sudoku/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach: Hash Maps + Sets
 *
 * - Track seen numbers in:
 *   - rows
 *   - columns
 *   - 3x3 sub-boxes
 *
 * - If any number appears more than once
 *   in the same row, column, or box → invalid
 *
 * Time Complexity: O(1)
 *   (board size is fixed at 9x9)
 *
 * Space Complexity: O(1)
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Map();
  const cols = new Map();
  const boxes = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c];

      if (value === ".") continue;

      const boxKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

      if (
        (rows.get(r)?.has(value)) ||
        (cols.get(c)?.has(value)) ||
        (boxes.get(boxKey)?.has(value))
      ) {
        return false;
      }

      if (!rows.has(r)) rows.set(r, new Set());
      if (!cols.has(c)) cols.set(c, new Set());
      if (!boxes.has(boxKey)) boxes.set(boxKey, new Set());

      rows.get(r).add(value);
      cols.get(c).add(value);
      boxes.get(boxKey).add(value);
    }
  }

  return true;
};

module.exports = isValidSudoku;
