/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    if(arr.length === 1){
        return [-1]
    }

    for(let i = 0; i < arr.length; i++){
        let max = arr[i + 1];
        let j = i + 2;

        while( j < arr.length){
            if(max < arr[j]){
                max = arr[j];
            }
            j++;
        }

        arr[i] = max;
    }

    arr[arr.length - 1] = -1;

    return arr
};