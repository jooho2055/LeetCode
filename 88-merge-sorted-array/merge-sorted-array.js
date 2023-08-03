/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let c = m - 1; 
    let pointerOne = m + n - 1; 
    let pointerTwo = n - 1;
    
    while (c >= 0 && pointerTwo >= 0) {
        if (nums1[c] > nums2[pointerTwo]) {
            nums1[pointerOne] = nums1[c];
            c--;
        } else {
            nums1[pointerOne] = nums2[pointerTwo];
            pointerTwo--;
        }
        pointerOne--;
    }

  
    while (pointerTwo >= 0) {
        nums1[pointerOne] = nums2[pointerTwo];
        pointerTwo--;
        pointerOne--;
    }
};