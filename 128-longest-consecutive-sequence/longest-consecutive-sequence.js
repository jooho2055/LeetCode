/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    const set = new Set(nums);
    let longest = 0;

    for (const value of set.values()){
        if(!set.has(value - 1)){
            let length = 0;

            while(set.has(length + value)){
                length++;
            }
            longest = Math.max(longest, length); 
        }
    }
    return longest;

};