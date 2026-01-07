/**
 * LeetCode #242 - Valid Anagram
 * Difficulty: Easy
 *
 * Problem Link:
 * https://leetcode.com/problems/valid-anagram/
 *
 * NeetCode Roadmap: Arrays & Hashing
 *
 * Approach:
 * - If lengths differ, they cannot be anagrams
 * - Use two hash maps to count character frequencies
 * - Compare frequencies for each character
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

module.exports = isAnagram;
