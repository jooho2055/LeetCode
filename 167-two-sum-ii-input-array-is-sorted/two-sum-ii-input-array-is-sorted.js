/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    const result = Array(2);

    let pointerOne = 0;
    let pointerTwo = numbers.length - 1;

    while(pointerOne < pointerTwo){
        let targetNum = numbers[pointerOne] + numbers[pointerTwo];

        if(targetNum === target){
            result[0] = pointerOne + 1;
            result[1] = pointerTwo + 1;
            break;
        } else if(target < targetNum){
            pointerTwo--;
        } else{
            pointerOne++;
        }
    }

    return result;
};