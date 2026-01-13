/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Problem:
 * Given a 1-indexed array of integers that is already sorted,
 * find two numbers such that they add up to a specific target number.
 * Return their indices (1-based).
 */

/**
 * -------------------------------
 * Optimal Solution (Two Pointers)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];

        if (sum < target) {
            l++;
        } else if (sum > target) {
            r--;
        } else {
            // 1-indexed result
            return [l + 1, r + 1];
        }
    }

    // Guaranteed one solution exists as per problem statement
    return [0, 0];
};
