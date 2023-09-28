/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set();
    const resSet = new Set();

    for(const x of nums1){
        set.add(x);
    }

    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            resSet.add(nums2[i]);
        }
    }

    return Array.from(resSet);
};