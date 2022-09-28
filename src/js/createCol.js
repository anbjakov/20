function createCol(colSize) {
    const column = document.createElement('div');
    column.classList.add(`col-${colSize}`)
    return column;
}

module.exports = createCol