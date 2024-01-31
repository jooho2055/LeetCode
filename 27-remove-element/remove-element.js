/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let i = 0;
    let j = nums.length -1 ;

    while(i <= j){
        const temp = nums[i];

        if(nums[i] === val){
            if(nums[j] === val){
                j--;
            }else{
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j--;
            }
        } else{
            i++;
        }
    }

    return i
};