/* let matrix = new Array(10).fill(new Array(10));
for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
        matrix[row][column] = Math.floor((Math.random() * 100) + 1);
    }
}
console.log(matrix); */


let arr = [];
arr[0] = [2, 3, 4, 5, 7];
arr[1] = [4, 5, 4, 1, 7];
arr[2] = [2, 1, 6, 2, 7];
arr[3] = [2, 3, 3, 7, 7];
arr[4] = [1, 5, 4, 7, 9];

let str = "";
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        str += arr[i][j];
    }
    str += "\n";
}
console.log(str);

/* // Tính tổng tam giác dưới bên phải
let totalTriangleDown2 = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
        totalTriangleDown2 += arr[i][j];
    }
}
console.log(totalTriangleDown2); */

// Tính tổng tam giác dưới bên trái
let totalTriangleDown = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1 - i; j++) {
        totalTriangleDown += arr[i][j];
    }
}
console.log("totalTriangleDown: " + totalTriangleDown);