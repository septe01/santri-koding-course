// TODO: Array.map digunakan untuk mmbuat perulangan dari sebuah array dengan mengembalikan array baru tanpa memodifikasi array sumbernya. Array.map akan sering kita gunakan nantinya di dalam project React.js untuk melakukan perulangan data.

// Berikut ini contoh menggunakan Array.map.
//define array
const arr = [1, 2, 3, 4, 5, 6, 7];

//looping
const number = arr.map((value) => {
  console.log(value);
  return value;
});

//print output
console.log(number); // [1, 2, 3, 4, 5, 6, 7]
