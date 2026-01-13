/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * Problem Link:
 * A phrase is a palindrome if, after converting all uppercase letters
 * into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 */

/**
 * -------------------------------
 * Optimal Solution (Two Pointers)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isAlphaNumeric(ch) {
    const code = ch.charCodeAt(0);
    return (
        (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
        (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) ||
        (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
    );
}

var isPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) l++;
        while (l < r && !isAlphaNumeric(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};

/**
 * ------------------------------------------------
 * Alternative Solution (String Build + Reverse)
 * ------------------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Less optimal due to extra space usage
 */

var isPalindromeAlt = function (s) {
    let str = '';

    for (let i = 0; i < s.length; i++) {
        if (isAlphaNumeric(s[i])) {
            str += s[i].toLowerCase();
        }
    }

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
};
