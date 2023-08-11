/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let winStart = 0;
    let winEnd = 0;
    let maxWinSize = 0;
    let maxValueInMap = 1;          
    const map = new Map();

    while(winEnd < s.length){

        let currentWinSize = winEnd - winStart + 1;

        if(currentWinSize < maxWinSize){
            winEnd++;
            continue;
        }

        if(map.has(s[winEnd])){
            map.set(s[winEnd], map.get(s[winEnd]) + 1);
        } else{
            map.set(s[winEnd], 1)
        }

        maxValueInMap = Math.max(...map.values());


        if(currentWinSize - maxValueInMap > k){
           map.set(s[winStart], map.get(s[winStart]) - 1)
            winStart++;
        }

        currentWinSize = winEnd - winStart + 1;
        maxWinSize = Math.max(currentWinSize, maxWinSize);
        winEnd++;
    }

    return maxWinSize;
};