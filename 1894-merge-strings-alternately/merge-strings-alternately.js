/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let i = 0;
    let j = 0;
    let res = [];

    while(word1.length > i || word2.length > j){
        res.push(word1[i])
        res.push(word2[j])
        i++;
        j++
    }

    return res.join('')

};