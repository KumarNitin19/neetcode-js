/**
 * 981. Time Based Key-Value Store
 * https://leetcode.com/problems/time-based-key-value-store/
 *
 * Problem:
 * Design a time-based key-value data structure that can store
 * multiple values for the same key at different timestamps
 * and retrieve the value at a given timestamp.
 */

/**
 * ------------------------------------
 * Optimal Solution (HashMap + Binary Search)
 * ------------------------------------
 * Time Complexity:
 *  set → O(1)
 *  get → O(log n)
 * Space Complexity: O(n)
 */

var TimeMap = function () {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.timeMap.has(key)) {
        this.timeMap.set(key, []);
    }
    this.timeMap.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.timeMap.has(key)) return '';

    const values = this.timeMap.get(key);
    let left = 0;
    let right = values.length - 1;
    let res = '';

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (values[mid][1] <= timestamp) {
            res = values[mid][0];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};
