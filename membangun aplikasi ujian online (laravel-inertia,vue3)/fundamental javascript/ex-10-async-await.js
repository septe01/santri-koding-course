// TODO: Async Await adalah fitur baru yang hadir sejak dirilisnya ES2017. Fitur ini digunakan untuk menangani proses promise dengan lebih singkat dan efisien.

// Async atau Asynchronus Function merupakan sebuah fungsi yang bekerja secara asynchronus (melelui event loop), yang menghasilkan sebuah promise sebagai return value-nya, dimana kode yang ditulis seperti kode yang bersifat synchronus (standart).

// Sebuah Async Function dapat memiliki keyword await di dalamnya, yang digunakan untuk memberhentikan eksekusi sementara sambil menunggu promise-nya selesai atau resolve.

// Contohnya seperti berikut ini :
//define a promise with 10 seconds
const taskPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Selesai"), 10000);
  });
};

//define function "task" with async
const task = async () => {
  const done = await taskPromise();
  console.log(done);
};

//print
console.log("Mulai");
task();
console.log("Akhir");
