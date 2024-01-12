/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false;
    }

    const map = new Map();

    for(let i = 0; i < s.length; i++){

        if(!map.has(s.charAt(i))){
            map.set(s.charAt(i), 1);
        } else {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        }
    }

    for(let j = 0; j < t.length; j++){
        if(!map.has(t.charAt(j))){
            return false
        } else {
            map.set(t.charAt(j), map.get(t.charAt(j)) -1 );
        }
    }

    if(Array.from(map.values()).every(value => value === 0)){
        return true;
    } else {
        return false;
    }

};