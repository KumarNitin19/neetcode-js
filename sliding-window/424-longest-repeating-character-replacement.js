/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 *
 * Problem:
 * You are given a string s and an integer k.
 * You can choose any character of the string and change it to any other
 * uppercase English character at most k times.
 * Return the length of the longest substring containing the same letter
 * you can get after performing the above operations.
 */

/**
 * ------------------------------------
 * Optimal Solution (Sliding Window)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)  // At most 26 characters
 */

var characterReplacement = function (s, k) {
    const count = {};
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[s[right]]);

        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};
