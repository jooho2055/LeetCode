/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        
        const k = target - nums[i];

        if(map.has(k)){
            return [i, map.get(k)]
        }else{
            map.set(nums[i], i)
        }
    }
};