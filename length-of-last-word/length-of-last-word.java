class Solution {
    public int lengthOfLastWord(String s) {
        String parts[] = s.split(" ");
        int count = parts.length;
        return parts[count-1].length();
    }
}