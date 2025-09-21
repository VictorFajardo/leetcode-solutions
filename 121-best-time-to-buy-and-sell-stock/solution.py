# Best Time to Buy and Sell Stock
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_diff = 0
        min_price = prices[0]

        for price in prices:
            if price < min_price:
                min_price = price
            else:
                max_diff = max(max_diff, price - min_price)

        return max_diff

# class Solution:
#     def maxProfit(self, prices: List[int]) -> int:
#         currDiff = 0
#         max_diff = 0

#         for i, num in enumerate(prices):
#             if i > 0:
#                 currDiff = max(0, currDiff + prices[i] - prices[i - 1])
#             max_diff = max(max_diff, currDiff)

#         return max_diff
