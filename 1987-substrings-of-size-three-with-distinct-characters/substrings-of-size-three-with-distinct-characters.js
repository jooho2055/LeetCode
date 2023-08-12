/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {

    if(s.length < 3){
        return 0;
    }

    let result = 0;
    let left = 0;
    let right = 0;
    let length = 3;
    const map = new Map();

    while(left < s.length - 2){

        while(right - left + 1 <= length){
            if(map.has(s[right])){
                map.set(s[right], map.get(s[right]) + 1);
            } else{
                map.set(s[right], 1);
            }

            if(right - left === 2){
                break;
            }
            right++;
        }    

        let maxNum = Math.max(...map.values());
        if(maxNum === 1){
            result++;
        } 

        map.clear();
        left++;
        right = left;
    }

    return result;
};