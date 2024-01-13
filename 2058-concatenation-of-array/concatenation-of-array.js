/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    numsLength = nums.length

    for(let i = 0; i < numsLength; i++){
        nums.push(nums[i]);
    }

    return nums
};