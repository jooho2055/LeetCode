/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    
    for(let i = 0; i < 9; i++){

        const setRow = new Set();
        const setColumn = new Set();
        const setBox = new Set();

        for(let j = 0; j < 9; j++){

            let row = board[i][j];
            let column = board[j][i];
            let box = board[3 * (i % 3) + (j % 3)][3 * Math.floor(i / 3) + Math.floor(j / 3)];

            if(setRow.has(row) || setColumn.has(column) || setBox.has(box)){
                return false;
            }

            if(row !== "."){
                setRow.add(row)
            }

            if(column !== "."){
                setColumn.add(column)
            }

            if(box !== "."){
                setBox.add(box)
            }
        }   
    }

    return true;
};