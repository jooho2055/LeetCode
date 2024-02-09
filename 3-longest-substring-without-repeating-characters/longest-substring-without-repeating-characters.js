/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let result = 0;
    let left = 0;
    let right = left;

    const mySet = new Set();

    while(left <= s.length - 1){

        if(!mySet.has(s[right])){
            mySet.add(s[right]);
            right++;
            result = Math.max(result, mySet.size);
        } else{
            mySet.clear();
            left++;
            right = left;
        }

        if(right === s.length){
            left++;
            right = left
        }
    }

    return result
};