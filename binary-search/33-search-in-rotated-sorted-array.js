/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * Problem:
 * Given a rotated sorted array with distinct integers,
 * return the index of the target if it exists, otherwise -1.
 */

/**
 * ------------------------------------
 * Optimal Solution (Binary Search)
 * ------------------------------------
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (target < nums[left] || target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        // Right half is sorted
        else {
            if (target > nums[right] || target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
};
