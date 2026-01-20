/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Problem:
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */

/**
 * ------------------------------------
 * Optimal Solution (Two Pointers)
 * ------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;

    while (sell < prices.length) {
        if (prices[sell] < prices[buy]) {
            buy = sell;
        } else {
            maxProfit = Math.max(
                maxProfit,
                prices[sell] - prices[buy]
            );
        }
        sell++;
    }

    return maxProfit;
};
