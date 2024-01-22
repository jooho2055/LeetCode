/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let min = strs[0].length;

    for(let i = 0; i < strs.length; i++){
        if(strs[i].length === 0){
            return ""
        }
        if(strs[i].length < min){
            min = strs[i].length;
        }
    }


    let result = "";
    let i = 0;

    while(i < min){
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