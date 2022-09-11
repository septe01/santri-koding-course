// Rest Parameter digunakan jika kita ingin membuat sebuah function yang memiliki jumlah parameter yang tak terbatas. Rest Parameter ditandai dengan ... di dalam parameter

function sum(...rest) {
  let sum = 0;
  for (let number of rest) {
    if (typeof number !== "string") {
      sum += number;
    }
  }
  return sum;
}

let x = sum(4, 9, 16, 25, "septe", 29, 100, 66, 77, "test");
console.log(x); // <-- output "326"

// Rest Parameter juga bisa digabung dengan parameter lainnya, dengan catatan harus ditaruh dipaling belakang di dalam parameter. Contohnya seperti berikut ini :
function sum(initVal, ...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return initVal + sum;
}

let y = sum(10, 5); // <-- output "15"
console.log(y);
