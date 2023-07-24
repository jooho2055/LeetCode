/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let result = [];

    for(let i = 0; i < nums1.length; i++){
        let a = nums1[i];
        let b = nums2.indexOf(nums1[i]);

        for(let j = b+1; j <= nums2.length; j++){
            if(j == nums2.length){
                result.push(-1);
            }
            if(nums2[j] > a){
                result.push(nums2[j]);
                break;
            } else{
                continue;
            }
        }
    }

    return result;
};