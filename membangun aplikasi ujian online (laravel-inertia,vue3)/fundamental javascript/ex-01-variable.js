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
