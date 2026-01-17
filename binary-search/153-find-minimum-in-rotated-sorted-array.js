/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * Problem:
 * Given a rotated sorted array of unique integers,
 * find the minimum element in O(log n) time.
 */

/**
 * ------------------------------------
 * Optimal Solution (Binary Search)
 * ------------------------------------
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = nums[0];

    while (left <= right) {
        // If current window is already sorted
        if (nums[left] < nums[right]) {
            result = Math.min(result, nums[left]);
            break;
        }

        const mid = Math.floor((left + right) / 2);
        result = Math.min(result, nums[mid]);

        // Left half is sorted
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};
