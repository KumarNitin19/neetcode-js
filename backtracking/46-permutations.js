/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 *
 * Time Complexity: O(n!)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const used = new Array(nums.length).fill(false);
    const curr = [];

    function dfs() {
        if (curr.length === nums.length) {
            res.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            curr.push(nums[i]);
            dfs();
            curr.pop();
            used[i] = false;
        }
    }

    dfs();
    return res;
};