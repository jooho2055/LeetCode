/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let startLeft = 0;
    let startRight = s.length - 1;

     while (startLeft < startRight) {
        
        if(s.charAt(startLeft) === s.charAt(startRight)){
            startLeft++;
            startRight--;
        } else {
            return false;
        }
     }

     return true;

};