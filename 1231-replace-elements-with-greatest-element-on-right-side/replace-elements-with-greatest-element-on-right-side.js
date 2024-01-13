/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let initialMax = -1;

    for(let i = arr.length - 1; i >= 0 ; i--){
        
        let newMax = Math.max(initialMax, arr[i])

        arr[i] = initialMax;

        initialMax = newMax;
        
    }

    return arr
};