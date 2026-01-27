/**
 * 287. Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 *
 * Uses Floyd’s Tortoise and Hare (Cycle Detection).
 * Treat the array as a linked list where nums[i] -> nums[nums[i]].
 */

/**
 * ------------------------------------
 * Optimal Solution (Iterative)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    // Phase 1: detect cycle
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) break;
    }

    // Phase 2: find entrance of cycle (duplicate)
    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];

        if (slow === slow2) return slow;
    }
};
