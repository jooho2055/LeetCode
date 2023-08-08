/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let currentPrice = prices[0];

    for(let i = 0; i < prices.length - 1; i++){
        let p = i+1;

        if(prices[i] <= currentPrice){
            currentPrice = prices[i];
        } else{
            continue;
        }

        while(p <prices.length){
            if(prices[p] < prices[i]){
                p++;
            } else{
                if(prices[p]-prices[i] > maxProfit){
                    maxProfit = prices[p] - prices[i];
                }
                p++;
            }
        }

    }

    return maxProfit;
};