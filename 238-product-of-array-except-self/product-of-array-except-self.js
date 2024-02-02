/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let count = 0;
    let total = 1;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            count++;
            continue; 
        }
        total = total * nums[i]; 
    }

    if(count >= 2){
        return new Array(nums.length).fill(0)
    }

    const result = [];
    for(let i = 0; i < nums.length; i++){
        result.push( total / nums[i]);

        if(count === 1 && nums[i] !== 0){
            result[i] = 0;
        } 
        if (nums[i]===0){
            result[i] = total;
        }
    }

    return result
};