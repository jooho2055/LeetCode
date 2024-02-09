/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let result = 0;
    let left = 0;

    const mySet = new Set ();

    for(let right = 0; right < s.length; right++){

        while(mySet.has(s[right])){
            mySet.delete(s[left]);
            left++;
        }

        mySet.add(s[right]);
        result = Math.max(result, mySet.size);
    
    }
    
    return result
};