/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    let count = 0;
    let sign = 0;
    while (count < nums.length){
        
        if(nums[count] === 0){
            return 0;
        } else if(nums[count] < 0){
            sign++;
        } 
        count++;
    }

    if(sign % 2 === 0){
        return 1;
    } else {
        return -1;
    }
};