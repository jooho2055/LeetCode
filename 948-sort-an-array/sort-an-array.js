/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    if(nums.length <= 1){
        return nums
    }

    let i = 0;
    let mid = Math.floor(nums.length / 2);

    let left = sortArray(nums.slice(i, mid));
    let right = sortArray(nums.slice(mid));

    
    return merge(left, right )
};


 function merge(left, right){

    const result = []; // k pointer
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length){
        if(left[i] >= right[j]){
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
        k++;
    }

    if(i !== left.length){
        while(i < left.length){
            result.push(left[i]);
            i++;
            k++;
        }
    }

    if(j !== right.length){
        while(j < right.length){
            result.push(right[j]);
            j++;
            k++;
        }
    }
     
    return result
}