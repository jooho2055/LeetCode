/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    pOne = 0;
    pTwo = nums.length - 1;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            count++;
            continue;
        }
        else{
            nums[pOne] = nums[i];
            pOne++;
        }
    }

    while(count!== 0){
        nums[pTwo] = 0;
        pTwo--;
        count--;
    }
};