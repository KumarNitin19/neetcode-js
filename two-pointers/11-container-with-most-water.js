/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Problem:
 * Given an array height where height[i] represents a vertical line,
 * find two lines that together with the x-axis form a container
 * that holds the maximum amount of water.
 */

/**
 * -------------------------------
 * Optimal Solution (Two Pointers)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let res = 0;

    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return res;
};
