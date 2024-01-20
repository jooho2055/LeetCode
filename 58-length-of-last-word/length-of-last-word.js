/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let i = s.length - 1;
    let length = 0;

    while(s.charAt(i) == ' '){
        i -= 1;
    }

    while(i >= 0 && s.charAt(i) !== ' '){
        length += 1;
        i -= 1;
    }
    
    return length
};