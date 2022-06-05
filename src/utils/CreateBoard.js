function CreateBoard() {
    let board = [];
    let mines = [];
    let numMines = 10;
    let rows = 8;
    let cols = 9;
    let emptySpaces = (rows * cols) - numMines;

    for (let x = 0; x < rows; x++) {
        let subColumn = [];
        for (let y = 0; y < cols; y++) {
            subColumn.push({
                value: 0,
                fired: false,
                x: x,
                y: y,
                flagged: false,
                bomb: false
            });
        }
        board.push(subColumn);
    }

    // Randomly assign bombs to the board
    let mineCount = 0;
    while (mineCount < numMines) {
        let x = randomNum(rows);
        let y = randomNum(cols);

        if (!board[x][y].bomb) {
            board[x][y].bomb = true;
            mines.push([x, y]);
            mineCount++;
        }
    }

    // Iterate through cells and count the number of adjacent bombs, incrementing the value of the cell
    // if any are found
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j].bomb) {
                continue;
            }

            if (i > 0 && board[i - 1][j].bomb) {
                board[i][j].value++;
            }

            if (i > 0 && j < cols - 1 && board[i - 1][j + 1].bomb) {
                board[i][j].value++;
            }

            if (j < cols - 1 && board[i][j + 1].bomb) {
                board[i][j].value++;
            }

            if (i < rows - 1 && j < cols - 1 && board[i + 1][j + 1].bomb) {
                board[i][j].value++;
            }

            if (i < rows - 1 && board[i + 1][j].bomb) {
                board[i][j].value++;
            }

            if (i < rows - 1 && j > 0 && board[i + 1][j - 1].bomb) {
                board[i][j].value++;
            }

            if (j > 0 && board[i][j - 1].bomb) {
                board[i][j].value++;
            }

            if (i > 0 && j > 0 && board[i - 1][j - 1].bomb) {
                board[i][j].value++;
            }
        }
    }
    return { board, mines, emptySpaces };
};

function randomNum(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}

export default CreateBoard