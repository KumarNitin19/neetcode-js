/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Problem:
 * Given two strings s1 and s2, return true if s2 contains
 * a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations
 * is the substring of s2.
 */

/**
 * ------------------------------------
 * Optimal Solution (Sliding Window + Frequency Count)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1) // Fixed size (26)
 */

var checkInclusion = function (s1, s2) {
    const m = s1.length;
    const n = s2.length;

    if (m > n) return false;

    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < m; i++) {
        s1Count[s1.charCodeAt(i) - base]++;
        s2Count[s2.charCodeAt(i) - base]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) matches++;
    }

    let left = 0;
    for (let right = m; right < n; right++) {
        if (matches === 26) return true;

        let idx = s2.charCodeAt(right) - base;
        s2Count[idx]++;
        if (s2Count[idx] === s1Count[idx]) matches++;
        else if (s2Count[idx] === s1Count[idx] + 1) matches--;

        idx = s2.charCodeAt(left) - base;
        s2Count[idx]--;
        if (s2Count[idx] === s1Count[idx]) matches++;
        else if (s2Count[idx] === s1Count[idx] - 1) matches--;

        left++;
    }

    return matches === 26;
};
