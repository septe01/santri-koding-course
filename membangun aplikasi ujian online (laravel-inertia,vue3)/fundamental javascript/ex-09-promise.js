// TODO: Promise adalah object yang mempresentasikan sebuah keberhasilan / kegagalan dari sebuah event yang bersifat asynchronus dan terjadi di masa yang akan datang. Dan karena dinamakan promise atau kalau diterjemahkan adalah janji, maka pasti ada kondisi yaitu terpenuhi dan tidak terpenuhi dari jani tersebut.

// Dan di dalam promise ada 3 buah state yang harus kita tahu, yaitu

// fullfilled - keadaan yang terpenuhi.
// rejected - keadaan yang tidak terpenuhi.
// pending - yaitu waktu tunggu dari kedua keadaan di atas.
// Dan untuk menjalankan keadaan di atas, maka ada sebuah callback yang bisa kita gunakan, yaitu resolve yang berarti janji telah terpenuhi. Dan reject ketika ada janji tidak terpenuhi. Kemudian ada finally yaitu ketika waktu tunggu selesai, baik keadaan tersebut terpenuhi atau tidak.

// Dan di dalam promise ada sebuah aksi yang bisa kita jalankan ketika kondisi tersebut terpenuhi (resolve) yaitu menggunakan then. Dan jika tidak terpenuhi (reject) yaitu menggunakan catch.

// Contohnya sederhanya seperti berikut ini :
//define variable
let done = true;

//define a promise
const task = new Promise((resolve, reject) => {
  if (done) {
    resolve("Task berhasil diselesaikan");
  } else {
    reject("Task belum diselesaikan");
  }
});

// run promise
console.log(task); // <-- ouput "Task berhasil diselesaikan"

// Di atas kita masih mendapatkan nilai dalam bentuk promsie, bagaimana jika kita ingin mengambil nilai resolve dan reject-nya secara langsung ? Yups, kita bisa menggunakan then dan catch. Kurang lebih seperti berikut ini :
// run promise with action
task
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
