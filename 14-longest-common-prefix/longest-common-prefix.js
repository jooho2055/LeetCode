/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let max = 0;

    for(let i = 0; i < strs.length; i++){
        if(strs[i].length === 0){
            return ""
        }
        if(strs[i].length > max){
            max = strs[i].length;
        }
    }


    let result = "";
    let i = 0;

    while(i < max){
        let char = strs[0].charAt(i);

        for(let j = 1; j < strs.length; j++){
            if(strs[j].charAt(i) === char){
                continue;
            } else{
                return result
            }
        }

        result = result + strs[0].charAt(i);
        i++
    }

    return result;
};