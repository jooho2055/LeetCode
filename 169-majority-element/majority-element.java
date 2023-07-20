class Solution {
    public int majorityElement(int[] nums) {
        int majority = 0;
        int count = (nums.length / 2) + 1;

        Map<Integer, Integer> Mmap = new HashMap<>();


        for (int num: nums) {
            Mmap.put(num, Mmap.getOrDefault(num, 0) + 1);

            if(Mmap.get(num) >= count){
                majority = num;
            }
        }

        return majority;
    }
}