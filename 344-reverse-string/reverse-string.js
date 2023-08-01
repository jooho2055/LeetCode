/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let pointerOne = 0;
    let pointerTwo = s.length - 1;

    while(pointerOne < pointerTwo){
        let temp = "";

        temp = s[pointerOne];
        s[pointerOne] = s[pointerTwo];
        s[pointerTwo] = temp;

        pointerOne++;
        pointerTwo--;
    }
};