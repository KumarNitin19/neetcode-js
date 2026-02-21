/**
 * 90. Subsets II
 * https://leetcode.com/problems/subsets-ii/
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    function backtrack(i, subset) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        backtrack(i + 1, subset);
        subset.pop();

        while (i < nums.length && nums[i] === nums[i + 1]) i++;

        backtrack(i + 1, subset);
    }

    backtrack(0, []);
    return res;
};