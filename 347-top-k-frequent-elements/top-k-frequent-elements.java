class Solution {
    
    public int[] topKFrequent(int[] nums, int k) {
        List<Integer>[] bucket = new List[nums.length + 1];
        Map<Integer, Integer> Fmap = new HashMap<>();

        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++){
            if(!Fmap.containsKey(nums[i])){
                Fmap.put(nums[i], 1);
            } else{
                Fmap.put(nums[i], Fmap.get(nums[i]) + 1 );
            }
        }

        for (int key : Fmap.keySet()) {
		    int frequency = Fmap.get(key);
		    if (bucket[frequency] == null) {
		 	    bucket[frequency] = new ArrayList<>();
		    }
		bucket[frequency].add(key);
	    }

        List<Integer> list = new ArrayList<>();

        for (int i = bucket.length - 1; i >= 0 && list.size() < k; i--){
            if (bucket[i] != null) {
			list.addAll(bucket[i]);
		    }
        }

        int[] result = new int[list.size()];        
        for(int i = 0; i < list.size() ; i++){
            result[i] =list.get(i);            
        }        

        return result;
    }
}