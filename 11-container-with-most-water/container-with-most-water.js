/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let pOne = 0;
    let pTwo = height.length - 1;
    let result = 0;

    while(pOne < pTwo){

        let temp = (pTwo - pOne) * Math.min(height[pOne], height[pTwo]);

        if(temp > result){
            result = temp;
        }

        if(height[pOne] < height[pTwo]){
            pOne++;
        } else{
            pTwo--;
        }
    }

    return result;
};