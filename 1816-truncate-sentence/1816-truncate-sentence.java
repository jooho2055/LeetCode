class Solution {
    public String truncateSentence(String s, int k) {
        
        String result = "";
        String[] divideString = s.split(" ");

        for(int i = 0; i < k; i++){
            result = result + " " + divideString[i];
        }

        
        return result.trim();
    }
}