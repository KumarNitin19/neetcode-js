/**
 * 417. Pacific Atlantic Water Flow
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pac = new Set();
    const atl = new Set();

    function dfs(r, c, visits, prevHeight) {
        if (
            r < 0 ||
            r === rows ||
            c < 0 ||
            c === cols ||
            visits.has(`${r},${c}`) ||
            heights[r][c] < prevHeight
        ) return;

        visits.add(`${r},${c}`);

        dfs(r + 1, c, visits, heights[r][c]);
        dfs(r - 1, c, visits, heights[r][c]);
        dfs(r, c + 1, visits, heights[r][c]);
        dfs(r, c - 1, visits, heights[r][c]);
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, cols - 1, atl, heights[r][cols - 1]);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, heights[0][c]);
        dfs(rows - 1, c, atl, heights[rows - 1][c]);
    }

    const res = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                res.push([r, c]);
            }
        }
    }

    return res;
};