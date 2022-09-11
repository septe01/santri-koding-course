// Jika sebelumnya sudah pernah belajar JavaScript, maka kita tahu bahwa di dalam JavaScript untuk membuat sebuah variable kita bisa menggunakan keyword var. Tapi di dalam ES6 kita mendapatkan keyword baru untuk membuat sebuah variable. Yaitu const dan let

// Keyword const
//define variable
// const name = "Fika Ridaul Maulayya";

//try to change -> mengakibat kan error Assignment to constant variable
// name = 'SantriKoding';

// Keyword var
// Sedangkan var menganut sistem functional scope, yang artinya variable yang didefinisikan dapat diakses dari dalam maupun luar block scope (kecuali diluar function)
var name = "Fika Ridaul Maulayya";

if (true) {
  var name = "Ahmad";
  console.log(name); //<-- output "Ahmad"
}

console.log(name); // <-

// beda nya dengan let
var name = "Fika Ridaul Maulayya";

if (true) {
  let name = "Ahmad";
  console.log(name); //<-- output "Ahmad"
}

console.log(name); // <-- output "Fika Ridaul Maulayya"
