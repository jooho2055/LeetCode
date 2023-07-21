class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i = 0;i< board.length;i++){
            Set<Character> set = new HashSet<>();
            for(int j = 0;j<board[0].length;j++){               
                if(board[i][j] == '.'){
                    continue;
                }
                if(set.contains(board[i][j])){
                    return false;
                }
                set.add(board[i][j]);
            }
        }
        for(int j = 0;j< board[0].length;j++){
            Set<Character> set = new HashSet<>();
            for(int i = 0;i< board.length;i++){                 
                if(board[i][j] =='.'){
                    continue;
                }
                if(set.contains(board[i][j])){
                    return false;
                }
                set.add(board[i][j]);
            }
        }

        for(int i = 0;i < 9;i ++){
            Set<Character> set = new HashSet<>();
            for(int j = 0;j<9;j++){
                int m = i/3*3 + j/3;
                int n = i%3*3 + j%3;
                if(board[m][n] == '.') {
                    continue;
                }
                if(set.contains(board[m][n])) {
                    return false;
                }
                set.add(board[m][n]);
            }
        }

        return true;
    }
}