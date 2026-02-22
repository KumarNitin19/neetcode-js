/**
 * 131. Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning/
 *
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = [];
    const part = [];

    function dfs(i) {
        if (i === s.length) {
            res.push([...part]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPali(s, i, j)) {
                part.push(s.slice(i, j + 1));
                dfs(j + 1);
                part.pop();
            }
        }
    }

    dfs(0);
    return res;
};

function isPali(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}