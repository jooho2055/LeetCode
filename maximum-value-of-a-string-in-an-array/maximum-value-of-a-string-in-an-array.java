class Solution {
    public int maximumValue(String[] strs) {
        
        int result = 0;
        for(int i = 0; i < strs.length; i++){
            try{
                result = Math.max(result, Integer.parseInt(strs[i]));
            }catch(Exception e){
                result = Math.max(result, strs[i].length());
            }
        }
        return result;
       
    }
}