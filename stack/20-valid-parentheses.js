/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Problem:
 * Given a string s containing just the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 */

/**
 * -------------------------------
 * Optimal Solution (Stack)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isValid = function (s) {
    const stk = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const c of s) {
        if (bracketMap[c]) {
            if (stk.length && stk[stk.length - 1] === bracketMap[c]) {
                stk.pop();
            } else {
                return false;
            }
        } else {
            stk.push(c);
        }
    }

    return stk.length === 0;
};
