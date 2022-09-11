// Arrow function merupakan fitur bawaan sejak ES6 rilis, dimana digunakan untuk mempersingkat penulisan sebuah function menjadi =>.

// function biasa
const nama = function name(nama) {
  return `nama anda adalah ${nama}`;
};
console.log(nama("septe"));

// arrow function

const name = (name) => `nama anda adalah ${name}`;

console.log(name("septe"));

//define function
const hello = (name, umur) => `Hello ${name} umur ${umur}`;

//panggil function
console.log(hello("Septehabudin", 25));

const returnObj = (name, umur) => ({
  status: "OK",
  mesaage: `Hello ${name} umur ${umur}`,
});

console.log(returnObj("septe", 32));
