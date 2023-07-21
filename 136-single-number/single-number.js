/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const Tmap = new Map();

    for(let i = 0; i < nums.length; i++){
    
        if(Tmap.has(nums[i])){
            Tmap.set(nums[i], Tmap.get(nums[i]) + 1);
        } else{
            Tmap.set(nums[i], 1);
        }
    }

    let result = 0;

    for (const [key, value] of Tmap) {
        if(value == 1){
            result = key;
            break;
        }
    }

    return result;
};