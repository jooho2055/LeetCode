/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let mostFreq = 0;
    let result = 0;

    const freqMap = new Map();

    while(right < s.length){
        freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);

        mostFreq = Math.max(...freqMap.values());

        while(right - left + 1 - mostFreq > k){
            freqMap.set(s[left], freqMap.get(s[left]) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};