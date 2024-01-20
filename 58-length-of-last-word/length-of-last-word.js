/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let result = s.trim().split(' ');

    let val = result[result.length - 1];

    return val.length;
};