
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof matrix === 'undefined') return [];
    let result = [];
    let direction = 1;
    for(const row of matrix) {
        result = result.concat(direction === 1 ? row : row.reverse());
        direction *= -1;
    }
    return result;
}
