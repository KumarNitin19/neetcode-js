/**
 * 51. N-Queens
 * https://leetcode.com/problems/n-queens/
 *
 * Time Complexity: O(n!)
 * Space Complexity: O(n^2)
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = [];

    const col = new Set();
    const pos = new Set();
    const neg = new Set();

    const board = Array.from({ length: n }, () => Array(n).fill("."));

    function backtrack(r) {
        if (r === n) {
            res.push(board.map(row => row.join("")));
            return;
        }

        for (let c = 0; c < n; c++) {
            if (col.has(c) || pos.has(r + c) || neg.has(r - c)) continue;

            col.add(c);
            pos.add(r + c);
            neg.add(r - c);
            board[r][c] = "Q";

            backtrack(r + 1);

            col.delete(c);
            pos.delete(r + c);
            neg.delete(r - c);
            board[r][c] = ".";
        }
    }

    backtrack(0);
    return res;
};