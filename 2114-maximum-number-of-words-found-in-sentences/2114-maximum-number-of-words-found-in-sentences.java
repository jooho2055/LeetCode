class Solution {
    public int mostWordsFound(String[] sentences) {
        int numOfWord = 0;
        int highNum = 0;

        for(int i = 0; i < sentences.length; i++){
            String[] testArray = sentences[i].split(" ");

            numOfWord = testArray.length;

            if(numOfWord >= highNum){
                highNum = numOfWord;
            }
        }

        return highNum;
    }
}