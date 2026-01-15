/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Problem:
 * Given an array of daily temperatures, return an array such that
 * for each day you know how many days you would have to wait
 * until a warmer temperature. If none, return 0.
 */

/**
 * -------------------------------
 * Optimal Solution (Monotonic Stack)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var dailyTemperatures = function (temperatures) {
    const ans = Array(temperatures.length).fill(0);
    const stk = []; 

    for (const [i, temp] of temperatures.entries()) {
        while (stk.length && stk[stk.length - 1][1] < temp) {
            const [idx] = stk.pop();
            ans[idx] = i - idx;
        }
        stk.push([i, temp]);
    }

    return ans;
};
