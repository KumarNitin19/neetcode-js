/**
 * LeetCode #49 - Group Anagrams
 * Difficulty: Medium
 *
 * Problem Link:
 * https://leetcode.com/problems/group-anagrams/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach: Hash Map + Character Frequency Key
 *
 * - Use a hash map where:
 *   key   → character frequency signature
 *   value → list of anagrams
 *
 * - Since strings contain only lowercase letters,
 *   we use a fixed-size array of length 26 as the key.
 *
 * Time Complexity: O(n * k)
 *   n = number of strings
 *   k = max length of a string
 *
 * Space Complexity: O(n)
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    // frequency array for 26 lowercase letters
    const freq = new Array(26).fill(0);

    for (let ch of str) {
      freq[ch.charCodeAt(0) - 97]++;
    }

    // convert frequency array to string key
    const key = freq.join('#');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
};

module.exports = groupAnagrams;