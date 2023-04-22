class Solution {
    public int titleToNumber(String columnTitle) {
        
        int lengthOfString = columnTitle.length();
        int res = 0;
        int num = 0;

        for(int i = lengthOfString; i > 0; i--){
            res += (int)Math.pow(26,i - 1) * (columnTitle.charAt(num)-64);
            num++;
        }

        return res;
    }
}