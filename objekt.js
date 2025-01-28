// let variabla1 = "var 1";
// let vargu = ["a","b","c"];

// function testFucktion() {
//     let variabla2 = "var 2";
//     if(4<2){
//      let variabla3 = "var 3";
//      console.log(variabla1);
//      console.log(variabla2);
//      console.log(variabla3);
//     }
//     console.log(variabla1);
//     console.log(variabla2);
//     console.log(variabla3);
// }
// testFucktion ();

// console.log(variabla1);
// console.log(variabla2);
// console.log(variabla3);

// //scoope lokal   
// //scoope global


// let vargu1 = [1, 2, 4, 5];
// let vargu2 = new Array();

// let obj1 = {};
// let obj2 = new Object();

// //key: value
let personi = {
    emer: "mirjeta",
    mbiemri: "kastrati",
    ngjyraEsyvae: "svws",
    mosha: 23,
    ngjyraePreferuar: ["e gjelbert","e permbe"],
    qeni: {
        emer:"bubi",
        mosha:joni,
    },
   fol: () => {
    console.log("un po foli");
   },


}
personi.ngjyraePreferuar.push("e vjollce");
console.log("mua me pelqen"+ personi.ngjyraePreferuar);

console.log(personi.qeni.emri);
personi.fol();

personi.shkolla = "dicka";
personi.x = "x";
console.log("profesioni" in personi);
console.log("emer" in personi);

delete personi.mbiemri;
console.log(personi.emri);
console.log(personi["emer"]);

personi.emri = "juled";
console.log(personi.emer);







// //Krijo një objekt për një person
// let person = {
//     name: "Alice",
//     age: 25,
//     city: "Tiranë"
//   };
  
//   // Shfaq informacionet e personit
//   console.log("Emri: " + person.name);
//   console.log("Mosha: " + person.age);
//   console.log("Qyteti: " + person.city);

