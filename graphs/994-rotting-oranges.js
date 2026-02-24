/**
 * 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const q = [];
    let fresh = 0;
    let time = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                q.push([r, c]);
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];

    while (q.length && fresh > 0) {
        let size = q.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = q.shift();

            for (const [dr, dc] of directions) {
                const newR = r + dr;
                const newC = c + dc;

                if (
                    newR < 0 ||
                    newC < 0 ||
                    newR === rows ||
                    newC === cols ||
                    grid[newR][newC] !== 1
                ) continue;

                grid[newR][newC] = 2;
                q.push([newR, newC]);
                fresh--;
            }
        }

        time++;
    }

    return fresh === 0 ? time : -1;
};