let matrix = new Array(10);
for (let row = 0; row < matrix.length; row++) {
    matrix[row] = Math.floor(Math.random() * 10);
}
console.log(matrix);


// [min, max]
// Math.floor(Math.random()*(max - min + 1) + min)