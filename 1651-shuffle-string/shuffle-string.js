/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let array = new Array(s.length).fill('a');

    for(let i = 0; i < s.length; i++){
        array[indices[i]] = s[i];
    }
    
    return array.join('');
};