/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    const disappearedMap = new Set(nums);
    const result = [];

    for(let j = 1; j <= nums.length; j++){
        if(disappearedMap.has(j)){
            continue;        
        } else{
            result.push(j);
        }
    }

    return result;
};