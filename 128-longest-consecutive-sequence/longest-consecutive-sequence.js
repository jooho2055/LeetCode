/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i]-1)){
            let length = 0;
        
            while(set.has(length + nums[i])){
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    
    return longest;

};