console.log("=====================");
console.log("WELCOME TO MY SHOP !!");
console.log("=====================");


var faker = require('faker');

for (var i = 0; i < 10; i++) {
   var adj = faker.commerce.productAdjective();
   var matr = faker.commerce.productMaterial();
   var prod = faker.commerce.product();
   var prc = faker.commerce.price();

   console.log(adj + " " + matr + " " + prod + " - $" + prc);
}


// console.log("=====================");
// console.log("=====================");

// for (var i = 0; i < 10; i++) {
//    console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}} - ${{commerce.price}}"));
// }
