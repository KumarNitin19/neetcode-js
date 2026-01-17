/**
 * 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Problem:
 * There are n piles of bananas, where piles[i] represents
 * the number of bananas in the ith pile.
 *
 * Koko can eat k bananas per hour. Each hour, she chooses one pile
 * and eats up to k bananas from it.
 *
 * Return the minimum integer k such that Koko can eat all bananas
 * within h hours.
 */

/**
 * ------------------------------------
 * Optimal Solution (Binary Search)
 * ------------------------------------
 * Time Complexity: O(n log maxPile)
 * Space Complexity: O(1)
 */

var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let hours = 0;

        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};
