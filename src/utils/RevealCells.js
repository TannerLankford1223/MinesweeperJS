function revealCells(arr, x, y, emptySpacesLeft) {

    let cellsToReveal = [];
    cellsToReveal.push(arr[x][y]);

    while (cellsToReveal.length !== 0) {
        let cell = cellsToReveal.pop();
        let i = cell.x;
        let j = cell.y;

        if (!cell.fired) {
            emptySpacesLeft--;
            cell.fired = true;
        }
        if (cell.value !== 0) {
            break;
        }
        // Iterate over cells and add to array of cells to reveal
        if (i > 0 && j > 0 && arr[i - 1][j - 1].value === 0 && !arr[i - 1][j - 1].fired) {
            cellsToReveal.push(arr[i - 1][j - 1]);
        }

        if (i < arr.length - 1 && j < arr[0].length - 1 && arr[i + 1][j + 1].value === 0 && !arr[i + 1][j + 1].fired) {
            cellsToReveal.push(arr[i + 1][j + 1]);
        }
        if (i > 0 && j < arr[0].length - 1 && arr[i - 1][j + 1].value === 0 && !arr[i - 1][j + 1].fired) {
            cellsToReveal.push(arr[i - 1][j + 1]);
        }

        if (i < arr.length - 1 && j > 0 && arr[i + 1][j - 1].value === 0 && !arr[i + 1][j - 1].fired) {
            cellsToReveal.push(arr[i + 1][j - 1]);
        }

        if (i > 0 && arr[i - 1][j].value === 0 && !arr[i - 1][j].fired) {
            cellsToReveal.push(arr[i - 1][j]);
        }

        if (j < arr[0].length - 1 && arr[i][j + 1].value === 0 && !arr[i][j + 1].fired) {
            cellsToReveal.push(arr[i][j + 1]);
        }

        if (i < arr.length - 1 && arr[i + 1][j].value === 0 && !arr[i + 1][j].fired) {
            cellsToReveal.push(arr[i + 1][j]);
        }

        if (j > 0 && arr[i][j - 1].value === 0 && !arr[i][j - 1].fired) {
            cellsToReveal.push(arr[i][j - 1]);
        }

        // Iterate over cells and reveal
        if (i > 0 && j > 0 && !arr[i - 1][j - 1].fired) {
            arr[i - 1][j - 1].fired = true;
            emptySpacesLeft--;
        }

        if (j > 0 && !arr[i][j - 1].fired) {
            arr[i][j - 1].fired = true;
            emptySpacesLeft--;
        }

        if (i < arr.length - 1 && j > 0 && !arr[i + 1][j - 1].fired) {
            arr[i + 1][j - 1].fired = true;
            emptySpacesLeft--;
        }

        if (i > 0 && !arr[i - 1][j].fired) {
            arr[i - 1][j].fired = true;
            emptySpacesLeft--;
        }

        if (i < arr.length - 1 && !arr[i + 1][j].fired) {
            arr[i + 1][j].fired = true;
            emptySpacesLeft--;
        }

        if (i > 0 && j < arr[0].length - 1 && !arr[i - 1][j + 1].fired) {
            arr[i - 1][j + 1].fired = true;
            emptySpacesLeft--;
        }

        if (j < arr[0].length - 1 && !arr[i][j + 1].fired) {
            arr[i][j + 1].fired = true;
            emptySpacesLeft--;
        }

        if (i < arr.length - 1 && j < arr[0].length - 1 && !arr[i + 1][j + 1].fired) {
            arr[i + 1][j + 1].fired = true;
            emptySpacesLeft--;

        }
    }

    return { arr, emptySpacesLeft };
}

export default revealCells;