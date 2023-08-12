/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {

	let result = 0;

	for (let index = 0; index < s.length - 2; index++) {
		const subStr = [s[index], s[index + 1], s[index + 2]];
		const set = new Set(subStr);

        if(set.size === 3){
            result += 1;
        }
		
	}
	
    return result;
};