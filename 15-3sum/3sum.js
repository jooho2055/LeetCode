/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b)=>(a-b))
    let sum = 0;
    let target = 0;

    if(nums.length < 3){
        return [];
    } 

    for(let i = 0; i < nums.length -2; i++){
    
        if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}

        let pointerOne = i + 1;
        let pointerTwo = nums.length - 1;

        while(pointerOne < pointerTwo){

            sum = nums[i] + nums[pointerOne] + nums[pointerTwo];

            if(target === sum){
                
                result.push([nums[i],nums[pointerOne],nums[pointerTwo]]);
                pointerOne++;
                pointerTwo--;

                while (nums[pointerOne] === nums[pointerOne - 1] && 
                pointerOne < pointerTwo){
                     pointerOne++;
                }
				while (nums[pointerTwo] === nums[pointerTwo + 1] &&
                pointerOne < pointerTwo) {
                    pointerTwo--;
                }
            
            } else if(sum > target){
                pointerTwo--;
            } else {
                pointerOne++;
            }
        }   
    }

    return result;

};