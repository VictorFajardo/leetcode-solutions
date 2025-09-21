// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let profit = 0;
//     let min = Infinity;

//     for (let price of prices) {
//         if (price < min) min = price;
//         else profit = Math.max(profit, price - min);
//     }

//     return profit;
// };

// Kadane's algorithm
var maxProfit = function (prices) {
  let currDiff = 0;
  let maxDiff = 0;

  for (let i = 1; i < prices.length; i++) {
    currDiff = Math.max(0, currDiff + prices[i] - prices[i - 1]);
    maxDiff = Math.max(maxDiff, currDiff);
  }

  return maxDiff;
};
