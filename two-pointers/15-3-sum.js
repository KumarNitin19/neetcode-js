/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Problem:
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that:
 * i != j, i != k, j != k
 * nums[i] + nums[j] + nums[k] == 0
 *
 * The solution set must not contain duplicate triplets.
 */

/**
 * -------------------------------
 * Optimal Solution (Sorting + Two Pointers)
 * -------------------------------
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) (excluding output array)
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;

                // Skip duplicate values for the second element
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }

    return res;
};
