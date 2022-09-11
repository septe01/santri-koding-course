// TODO:  Destructuring digunakan untuk membuat sebuah variable-variable baru dari element yang ada di dalam sebuah array atau object.
//array
// FIXME: Contoh destructuring di dalam array.
const arr = ["Fika", "Ahmad", "Lutfi"];

//destructuring
const [name1, name2, name3] = arr;

//print output
console.log(name1); // <-- "Fika"
console.log(name2); // <-- "Ahmad"
console.log(name3); // <-- "Lutfi"
// Di atas, pertama kita membuat sebuah array dengan nama arr, setelah itu kita destructuring atau extract menjadi sebuah variable-variable baru.

// FIXME:  Contoh destructuring di dalam object.
//object
const obj = {
  name: "Fika Ridaul Maulayya",
  age: 25,
};

//destructuring
const { name, age } = obj;

//print ouput
console.log(name); // <-- "Fika Ridaul Maulayya"
console.log(age); // <-- "25"

// TODO: Restructuring Assigment
// Nah, kalau Restructuring ini kebalikan dari Destructuring, yaitu digunakan untuk membuat sebuah object dari variable.

// Contohnya seperti berikut ini :
//restructuring
const obj2 = { name, age };

//print output
console.log(obj2); // <-- {name: 'Fika Ridaul Maulayya', age: 25}
