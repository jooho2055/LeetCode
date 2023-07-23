/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let prePostfix = 1;
    
    for (let i=nums.length - 1; i >= 0; i--) {
        output[i] = prePostfix;
        prePostfix *= nums[i];
    }

    prePostfix = 1;
    for (let j=0; j < nums.length; j++) {
        output[j] *= prePostfix;
        prePostfix *= nums[j];
    }
    return output;
};