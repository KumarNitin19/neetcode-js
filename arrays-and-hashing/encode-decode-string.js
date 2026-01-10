/**
 * LeetCode #271 - Encode and Decode Strings
 * Difficulty: Medium
 *
 * Problem Link:
 * https://leetcode.com/problems/encode-and-decode-strings/
 *
 * NeetCode Roadmap: Arrays & Hashing
 */

/**
 * Approach: Length Encoding
 *
 * - Encode each string as: <length>#<string>
 * - `#` is used as a delimiter
 * - Length helps us safely decode even if string contains `#`
 *
 * Example:
 * ["neet", "code"] → "4#neet4#code"
 *
 * Time Complexity:
 *   Encode: O(n)
 *   Decode: O(n)
 *
 * Space Complexity: O(n)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let res = "";

  for (let str of strs) {
    res += str.length + "#" + str;
  }

  return res;
};

/**
 * @param {string} str
 * @return {string[]}
 */
var decode = function (str) {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    // Find the delimiter '#'
    while (str[j] !== "#") j++;

    const length = Number(str.slice(i, j));
    res.push(str.slice(j + 1, j + 1 + length));

    i = j + 1 + length;
  }

  return res;
};

module.exports = {
  encode,
  decode,
};
