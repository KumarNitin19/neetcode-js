/**
 * 40. Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii/
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);

    function dfs(i, curr, total) {
        if (total === target) {
            res.push([...curr]);
            return;
        }

        if (i === candidates.length || total > target) return;

        curr.push(candidates[i]);
        dfs(i + 1, curr, total + candidates[i]);

        curr.pop();

        while (candidates[i] === candidates[i + 1]) {
            i++;
        }

        dfs(i + 1, curr, total);
    }

    dfs(0, [], 0);
    return res;
};
