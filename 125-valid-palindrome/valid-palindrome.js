/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let text = s.toLowerCase().replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g, "");

    let i = 0;
    let j = text.length - 1;

    while(i <= j){
        if(text[i] === text[j]){
            i++;
            j--;
        } else{
            return false;
        }
    }

    return true;
};