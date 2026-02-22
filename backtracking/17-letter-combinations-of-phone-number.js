/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Time Complexity: O(4^n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const res = [];
    const digitsToChar = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    function backtrack(i, currStr) {
        if (currStr.length === digits.length) {
            res.push(currStr);
            return;
        }

        const chars = digitsToChar[digits[i]];
        for (const c of chars) {
            backtrack(i + 1, currStr + c);
        }
    }

    if (digits.length > 0) backtrack(0, "");
    return res;
};