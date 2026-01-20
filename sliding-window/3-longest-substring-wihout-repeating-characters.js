/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Problem:
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 */

/**
 * ------------------------------------
 * Optimal Solution (Sliding Window + Set)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
