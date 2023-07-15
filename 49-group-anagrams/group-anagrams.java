class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        HashMap<String ,List<String>> result= new HashMap<String ,List<String>>();

        for (int i = 0; i< strs.length; i++){

            char[] charArray = strs[i].toCharArray();
            Arrays.sort(charArray);
            String sortedString = new String(charArray);

            if(!result.containsKey(sortedString)){
                result.put(sortedString, new ArrayList<String>());
            }
            result.get(sortedString).add(strs[i]);
        }

        return new ArrayList<>(result.values());
    }
}