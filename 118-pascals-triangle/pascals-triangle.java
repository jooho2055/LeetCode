class Solution {
    public List<List<Integer>> generate(int numRows) {
       List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < numRows; i++) {
            List<Integer> innerList = new ArrayList<>();
            int current = 1;

            for(int j = 0; j < i + 1; j ++){
                if((j == 0) || (j == i)){
                    current = 1;
                    innerList.add(current);
                } else {
                    current  = (result.get(i-1).get(j-1)) + (result.get(i-1).get(j));
                    innerList.add(current);
                }
            }
            result.add(innerList);
        }
        return result;
    }
}