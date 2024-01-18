/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = new Map();

    for(let i = 0; i < strs.length; i++){

        const count = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++){
            count[strs[i].charCodeAt(j) - 97] += 1
        }

        const key = count.toString(); 

        if(!map.has(key)) {
            map.set(key, [strs[i]]);
        } else {
            map.get(key).push(strs[i]);
        }
    }

    return Array.from(map.values());

};