/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 *
 * Problem:
 * Given a sorted array nums, return the index of target if it exists.
 * Otherwise, return -1.
 */

/**
 * -------------------------------
 * Optimal Solution (Binary Search)
 * -------------------------------
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
};
