/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * Problem:
 * Given two strings s and t, return the minimum window substring of s
 * such that every character in t (including duplicates) is included
 * in the window.
 * If there is no such substring, return an empty string "".
 */

/**
 * ------------------------------------
 * Optimal Solution (Sliding Window)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1) // At most 52 chars (A–Z, a–z)
 */

var minWindow = function (s, t) {
    if (t.length === 0) return "";

    const countT = {};
    const window = {};

    for (const c of t) {
        countT[c] = (countT[c] || 0) + 1;
    }

    let have = 0;
    const need = Object.keys(countT).length;

    let res = [-1, -1];
    let resLen = Infinity;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        window[c] = (window[c] || 0) + 1;

        if (countT[c] && window[c] === countT[c]) {
            have++;
        }

        while (have === need) {
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            window[s[left]]--;
            if (countT[s[left]] && window[s[left]] < countT[s[left]]) {
                have--;
            }
            left++;
        }
    }

    const [l, r] = res;
    return resLen === Infinity ? "" : s.slice(l, r + 1);
};
