/**
 * LeetCode #242 - Valid Anagram
 * Difficulty: Easy
 *
 * Problem:
 * https://leetcode.com/problems/valid-anagram/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach 1: Hash Maps (Frequency Count)
 *
 * - If lengths differ, strings cannot be anagrams
 * - Use two hash maps to store character frequencies
 * - Compare frequencies of both maps
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const m = s.length;
  const n = t.length;

  if (m !== n) return false;

  const mp = new Map();
  const np = new Map();

  for (let i = 0; i < m; i++) {
    mp.set(s[i], (mp.get(s[i]) ?? 0) + 1);
    np.set(t[i], (np.get(t[i]) ?? 0) + 1);
  }

  for (const [key, value] of mp) {
    if (value !== np.get(key)) return false;
  }

  return true;
};

/**
 * ---------------------------------------------------------
 * Most Optimal Solution
 * ---------------------------------------------------------
 *
 * Approach 2: Single Hash Map
 *
 * - Count characters in `s`
 * - Decrement counts while traversing `t`
 * - If any count goes negative or missing, not an anagram
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (since only lowercase English letters)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramOptimal = function (s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (let char of s) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }

  for (let char of t) {
    if (!count.has(char) || count.get(char) === 0) return false;
    count.set(char, count.get(char) - 1);
  }

  return true;
};

module.exports = {
  isAnagram,
  isAnagramOptimal,
};
