var septe = "septe";
function hello(msg = "selamat malam tuan") {
  return msg;
}

console.log(hello());

console.log(hello(`selamat pagi ${septe}`));
