/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right){
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;

        max = Math.max(max, minHeight * width);

        if(height[right] > height[left]){
            left++;
        } else{
            right--;
        }
    }

    return max
};