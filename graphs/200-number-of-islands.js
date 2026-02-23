/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid.length) return 0;

    const visit = new Set();
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function bfs(r, c) {
        const q = [[r, c]];
        visit.add(`${r}-${c}`);
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        while (q.length) {
            const [row, col] = q.pop();

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < rows &&
                    nc < cols &&
                    grid[nr][nc] === "1" &&
                    !visit.has(`${nr}-${nc}`)
                ) {
                    visit.add(`${nr}-${nc}`);
                    q.push([nr, nc]);
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1" && !visit.has(`${i}-${j}`)) {
                bfs(i, j);
                islands++;
            }
        }
    }

    return islands;
};