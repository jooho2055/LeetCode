class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0; 

        if  (s.length() > t.length()) {
            return false;
        }
        if(s.length() == 0){
            return true;
        }

        for (int j = 0; j < t.length(); j++) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
                if (i == s.length()) {
                    return true;
                }
            }
        }
        return false;
    
    }
}