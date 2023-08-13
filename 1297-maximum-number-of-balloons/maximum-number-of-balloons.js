/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if(text.length < 7){
        return 0;
    }

    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };
    
    for (const l of text) {
        map[l]++; 
    }
    
    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );

};