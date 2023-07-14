class Solution {
    public String restoreString(String s, int[] indices) {
        
        String res = "";
        

        for(int i = 0; i < indices.length; i++){

            int num =0;
            int j = 0;
            char letter;

            while (j < indices.length) {
  
                if (indices[j] == i) {
                    num = j;
                    break;
                }
                else {
                    j++;
                }
            }

            letter = s.charAt(num);
            res += letter;

        }

        return res;
    }
}