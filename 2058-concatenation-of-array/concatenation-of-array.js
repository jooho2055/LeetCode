/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    ans = [];

    for(let i = 0; i < nums.length; i++){
        ans[i] = ans[i+nums.length] = nums[i];
    }
    
    return ans
};