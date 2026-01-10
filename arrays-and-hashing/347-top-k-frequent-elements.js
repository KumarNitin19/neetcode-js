/**
 * LeetCode #347 - Top K Frequent Elements
 * Difficulty: Medium
 *
 * Problem Link:
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach 1: Hash Map + Bucket Sort
 *
 * - Count frequency of each number using a hash map
 * - Use bucket sort where index = frequency
 * - Traverse buckets from high to low frequency
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  // Step 1: Frequency count
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }

  // Step 2: Bucket array (index = frequency)
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Step 3: Collect top k frequent elements
  const result = [];

  for (let i = buckets.length - 1; i >= 0 && k > 0; i--) {
    if (buckets[i].length) {
      result.push(...buckets[i]);
      k -= buckets[i].length;
    }
  }

  return result;
};

/**
 * ---------------------------------------------------------
 * Most Optimal / Standard Solution
 * ---------------------------------------------------------
 *
 * Approach 2: Hash Map + Bucket Sort (Concise & Interview-Standard)
 *
 * - Same algorithm, cleaner implementation
 * - No unnecessary maps or checks
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentOptimal = function (nums, k) {
  const count = new Map();
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  for (let [num, freq] of count) {
    buckets[freq].push(num);
  }

  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...buckets[i]);
  }

  return res.slice(0, k);
};

module.exports = {
  topKFrequent,
  topKFrequentOptimal,
};