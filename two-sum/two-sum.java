class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] solutions = new int[2];

        for(int i = 0; i < nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                if((nums[i] + nums[j]) == target){
                    solutions[0] = i;
                    solutions[1] = j;
                    break;
                }
            }
            if((solutions[0] + solutions[1]) == target){
                break;
            }
        }

        return solutions;
    }
}