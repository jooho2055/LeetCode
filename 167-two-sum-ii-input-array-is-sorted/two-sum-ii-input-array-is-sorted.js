/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let pointerOne = 0;
    let pointerTwo = numbers.length - 1;

    
    while(pointerOne < pointerTwo){
        if((numbers[pointerOne] + numbers[pointerTwo]) === target){
            return [pointerOne + 1, pointerTwo + 1];
        } else if(target < (numbers[pointerOne] + numbers[pointerTwo])){
            pointerTwo--;
        } else{
            pointerOne++;
        }
    }
};