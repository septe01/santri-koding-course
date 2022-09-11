// TODO: Spread Operator ditandai dengan ... (titik tiga), dan digunakan untuk beberapa keperluan, yang pertama untuk meng-copy sebuah array dan yang kedua menggabungkan sebuah array.

// Berikut ini contoh Spread Operator untuk meng-Copy array.
//define array 1
const arr1 = [1, 2, 3, 4, 5];

//copy array
const arr2 = [...arr1];

//print output
console.log("array 1", arr1); // <-- [1, 2, 3, 4, 5];
console.log("array 2", arr2); // <-- [1, 2, 3, 4, 5];

// menggabungkan array menggunakan Spread Operator.
//define array 2
const arr3 = [6, 7, 8];

//define array 3
const arr4 = [...arr1, ...arr3];

//print array 3
console.log(arr4);
