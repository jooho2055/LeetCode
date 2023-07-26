/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    const disappearedMap = new Set();
    const result = [];

    for(let i = 0; i < nums.length; i++){
        disappearedMap.add(nums[i]);
    }

    for(let j = 1; j <= nums.length; j++){
        if(disappearedMap.has(j)){
            continue;        
        } else{
            result.push(j);
        }
    }

    return result;
};