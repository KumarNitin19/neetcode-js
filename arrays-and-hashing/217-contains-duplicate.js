/**
 * LeetCode #217 - Contains Duplicate
 * Difficulty: Easy
 *
 * Problem:
 * https://leetcode.com/problems/contains-duplicate/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach 1: Hash Map (Frequency Count)
 *
 * - Track frequency of each number using a Map
 * - If any number appears more than once, return true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const mp = new Map();

  for (let num of nums) {
    const count = mp.get(num) ?? 0;
    if (count === 1) return true;
    mp.set(num, count + 1);
  }

  return false;
};

/**
 * ---------------------------------------------------------
 * Most Optimal Solution
 * ---------------------------------------------------------
 *
 * Approach 2: Hash Set
 *
 * - Use a Set to track elements
 * - If an element already exists in the set, it's a duplicate
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateOptimal = function (nums) {
  const mp = new Set();

  for (let num of nums) {
    if (mp.has(num)) return true;
    mp.add(num);
  }

  return false;
};

module.exports = {
  containsDuplicate,
  containsDuplicateOptimal,
};
