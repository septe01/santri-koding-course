// emplate String atau Template Literal adalah cara atau teknik yang digunakan untuk memanggil sebuah variable di dalam string. Dan kita harus menggunakan backtick (``).

// cara lama
const firstName = "septe";
const umur = 24;
console.log("nama depan saya adalah " + firstName + " dan umur saya: " + umur);

// cara modern
const lastName = "habudin";
console.log(
  `nama belakang saya adalah ${lastName} dan umur saya adalah ${umur}`
);
