/**
 * LeetCode #1 - Two Sum
 * Difficulty: Easy
 *
 * Problem:
 * https://leetcode.com/problems/two-sum/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach 1: Hash Map (Your Solution)
 *
 * - Store previously seen numbers with their indices
 * - For each number, check if (target - current) exists in map
 * - Return indices when found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const n = nums.length;

  if (n === 2) return [0, 1];

  const mp = new Map();

  for (let i = 0; i < n; i++) {
    const complement = target - nums[i];

    if (mp.has(complement)) return [mp.get(complement), i];
    
    mp.set(nums[i], i);
  }

  return [0, 0];
};

module.exports = {
  twoSum,
};