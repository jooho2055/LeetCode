/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let result = "";
    const dividedString = s.split(" ");

    for(i = 0; i < k; i++){
        result +=  " " + dividedString[i];
    }

    return result.trim();
};