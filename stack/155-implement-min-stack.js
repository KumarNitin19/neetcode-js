/**
 * 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 *
 * Problem:
 * Design a stack that supports push, pop, top,
 * and retrieving the minimum element in constant time.
 */

/**
 * -------------------------------
 * Optimal Solution (Auxiliary Stack)
 * -------------------------------
 * Time Complexity:
 *  - push: O(1)
 *  - pop: O(1)
 *  - top: O(1)
 *  - getMin: O(1)
 *
 * Space Complexity: O(n)
 */

var MinStack = function () {
    this.stk = [];
    this.minStk = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stk.push(val);
    if (this.minStk.length === 0 || val <= this.getMin()) {
        this.minStk.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const poppedValue = this.stk.pop();
    if (poppedValue === this.getMin()) {
        this.minStk.pop();
    }
    return poppedValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stk[this.stk.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStk[this.minStk.length - 1];
};

/**
 * Usage:
 * var obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * obj.top();
 * obj.getMin();
 */
