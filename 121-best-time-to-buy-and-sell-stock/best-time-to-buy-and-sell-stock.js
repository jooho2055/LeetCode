/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;

    let start = 0;
    let end = start + 1;

    while(end <= prices.length -1){

        if(prices[start] < prices[end]){
            profit = Math.max(profit, prices[end] - prices[start]);
            end++;
        } else{
            start = end;
            end = start + 1;
        }
    }

    return profit;
};