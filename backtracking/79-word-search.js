/**
 * 79. Word Search
 * https://leetcode.com/problems/word-search/
 *
 * Time Complexity: O(m * n * 4^L)
 * Space Complexity: O(L)
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const path = new Set();
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, i) {
        if (i === word.length) return true;

        if (
            row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols ||
            board[row][col] !== word[i] ||
            path.has(`${row},${col}`)
        ) {
            return false;
        }

        path.add(`${row},${col}`);

        const res =
            dfs(row + 1, col, i + 1) ||
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row, col - 1, i + 1);

        path.delete(`${row},${col}`);
        return res;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};