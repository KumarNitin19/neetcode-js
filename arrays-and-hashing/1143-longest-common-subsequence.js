/**
 * LeetCode #1143 - Longest Common Subsequence
 * Difficulty: Medium
 *
 * Problem:
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * NeetCode Roadmap: Dynamic Programming
 */

/**
 * Approach 1: Top-Down Dynamic Programming (Memoization)
 *
 * - Use recursion with memo table
 * - If characters match → 1 + LCS of remaining strings
 * - Else → max of skipping one character from either string
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function lcs(text1, text2, m, n, t) { 
    if (m == 0 || n == 0) return 0; 

    if (t[m][n] !== -1) return t[m][n]; 

    if (text1[m - 1] === text2[n - 1]) t[m][n] = 1 + lcs(text1, text2, m - 1, n - 1, t);
    else t[m][n] = Math.max(lcs(text1, text2, m - 1, n, t), lcs(text1, text2, m, n - 1, t));  
    
    return t[m][n];
} 
var longestCommonSubsequence = function (text1, text2) { 
    const m = text1.length;
    const n = text2.length;

    const t = Array.from({length: m+1}, () => Array(n+1).fill(-1));

    return lcs(text1, text2, m, n, t); 
};

module.exports = longestCommonSubsequence;
