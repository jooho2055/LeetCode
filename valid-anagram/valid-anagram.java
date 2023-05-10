class Solution {
    public boolean isAnagram(String s, String t) {
        
        char[] array1 = s.toCharArray();
        char[] array2 = t.toCharArray();
        Arrays.sort(array1);
        Arrays.sort(array2);
        s = new String(array1);
        t = new String(array2);

        if(s.length() != t.length()){
            return false;
        }

        for(int i = 0; i < s.length(); i++){
            
            if(s.charAt(i) != t.charAt(i)){
                return false;
            }
        }

        return true;
    }
}