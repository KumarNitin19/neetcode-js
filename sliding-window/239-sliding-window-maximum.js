/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * Problem:
 * You are given an array of integers nums and an integer k.
 * There is a sliding window of size k which is moving from the
 * very left of the array to the very right.
 * You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 * Return the max sliding window.
 */

/**
 * ------------------------------------
 * Optimal Solution (Monotonic Deque)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var maxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = []; // stores indices
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }
        deque.push(right);

        if (left > deque[0]) {
            deque.shift();
        }

        if (right + 1 >= k) {
            result.push(nums[deque[0]]);
            left++;
        }
    }

    return result;
};
