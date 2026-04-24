/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1803376589/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0]; 
    let max = 0;

    for( let i = 1; i < prices.length; i++) {
    
        if(prices[i] < lowest) {
            lowest = prices[i];
        }
        let profit = prices[i] - lowest;

        if( profit > max) {
            max = profit;
        }
    }
    return max;
};