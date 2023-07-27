/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let replaced = s.replace(/[^a-z0-9]/gi, '');
    replaced = replaced.replaceAll(' ', '').toLowerCase();
    

    let startLeft = 0;
    let startRight = replaced.length - 1;

     while (startLeft < startRight) {
        
        if(replaced.charAt(startLeft) === replaced.charAt(startRight)){
            startLeft++;
            startRight--;
        } else {
            return false;
        }
     }

     return true;

};