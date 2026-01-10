/**
 * LeetCode #238 - Product of Array Except Self
 * Difficulty: Medium
 *
 * Problem Link:
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach: Prefix & Postfix Products
 *
 * - First pass: store prefix product for each index
 * - Second pass: multiply with postfix product
 * - No division used
 *
 * Example:
 * nums = [1, 2, 3, 4]
 * prefix pass  → [1, 1, 2, 6]
 * postfix pass → [24, 12, 8, 6]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding output array)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const res = Array(n).fill(1);

  // Prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // Postfix products
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
};

module.exports = productExceptSelf;
