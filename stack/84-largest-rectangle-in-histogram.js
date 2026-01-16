/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 *
 * Problem:
 * Given an array of bar heights in a histogram,
 * find the area of the largest rectangle.
 */

/**
 * -------------------------------
 * Optimal Solution (Monotonic Stack)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stk = []; // stack of [startIndex, height]

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        while (stk.length && stk[stk.length - 1][1] > heights[i]) {
            const [idx, h] = stk.pop();
            maxArea = Math.max(maxArea, h * (i - idx));
            start = idx;
        }

        stk.push([start, heights[i]]);
    }

    // Process remaining bars
    for (const [idx, h] of stk) {
        maxArea = Math.max(maxArea, h * (heights.length - idx));
    }

    return maxArea;
};
