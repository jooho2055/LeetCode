/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let left = 0;
    let right = height.length - 1;

    let result = 0;

    let leftMax = height[left];
    let rightMax = height[right];

    while (left <= right){

        let min = Math.min(leftMax, rightMax);        

        if(leftMax <= rightMax){
            if(min - height[left] < 0){
                result += 0; 
            } else {
                result += (min - height[left]);
            }
            leftMax = Math.max(leftMax, height[left]);
            left++;
        } else{
            if(min - height[right] < 0){
                result += 0;
            } else{
                result += (min - height[right]);
            }
            rightMax = Math.max(rightMax, height[right]);
            right--;
        }
    }

    return result
};