/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
        const window = new Set();
        let left = 0;
        for (let right = 0; right < nums.length; right++) {

            if (window.size > k) {
                window.delete(nums[left]);
                left++;
            }

            if (window.has(nums[right])) {
                return true;
            }

            window.add(nums[right]);
        }

        return false;
};