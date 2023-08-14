/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const n = s1.length;
    const freq = new Array(26).fill(0);
    const m = s2.length;
    
    for (let i = 0; i < n; i++) {
        freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    const freq2 = new Array(26).fill(0);
    
    for (let i = 0; i < m; i++) {
        freq2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        
        if (i >= n) {
            freq2[s2.charCodeAt(i - n) - 'a'.charCodeAt(0)]--;
        }
        
        if (arraysAreEqual(freq, freq2)) {
            return true;
        }
    }


    return false;
};

    function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}