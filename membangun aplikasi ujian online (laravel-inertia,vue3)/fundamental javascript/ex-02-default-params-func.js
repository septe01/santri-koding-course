// Kita bisa membuat sebuah function yang memiliki parameter yang bersifat opsional. Dimana jika tidak ditentukan nilainya, maka kita akan berikan nilai secara default.

var septe = "septe";
function hello(msg = "selamat malam tuan") {
  return msg;
}

console.log(hello());

console.log(hello(`selamat pagi ${septe}`));
