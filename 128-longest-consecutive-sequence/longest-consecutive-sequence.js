/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    
    const set = new Set([...nums]);
    let result = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i] + 1)){
            continue;
        } 
        
        let num = nums[i];
        while( set.has(num) ){
            count++;
            num--;
        }

        result = Math.max(count, result);
        count = 0;
    }
    
    return result;
};