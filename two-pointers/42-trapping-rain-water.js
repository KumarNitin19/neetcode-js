/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Problem:
 * Given n non-negative integers representing an elevation map,
 * compute how much water it can trap after raining.
 */

/**
 * -------------------------------
 * Optimal Solution (Two Pointers)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var trap = function (height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;

    let maxl = height[l];
    let maxr = height[r];

    while (l < r) {
        if (maxl < maxr) {
            l++;
            maxl = Math.max(maxl, height[l]);
            res += maxl - height[l];
        } else {
            r--;
            maxr = Math.max(maxr, height[r]);
            res += maxr - height[r];
        }
    }

    return res;
};
