// console.log("Hello Randy");

// var a=10;
// var b=5;
// console.log(a);
// console.log(a+b);

// function perkalian (a,b){
//     return a * b;
// }

// console.log(perkalian(a,b));


// const superheroes = require('superheroes');

const operator= require("./newModul");
const modulKali = operator.perkalian(10, 5);
const modulTambah = operator.pertambahan(20, 5);
const modulKurang = operator.kurang(100, 1);
const modulBagi = operator.bagi(10, 5);

console.log(modulKali);
console.log(modulTambah);
console.log(modulKurang);
console.log(modulBagi);



// for(let i=0; i<=500; i++){
//     const nameHero=superheroes.random();
//     console.log(nameHero); //mencetak superheroes random
// }

 
// superheroes.all;
// //=> ['3-D Man', 'A-Bomb', …]
 
// superheroes.random();
// //=> 'Spider-Ham'