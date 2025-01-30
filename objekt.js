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
// let personi = {
//     emer: "mirjeta",
//     mbiemri: "kastrati",
//     ngjyraEsyvae: "svws",
//     mosha: 23,
//     ngjyraePreferuar: ["e gjelbert","e permbe"],
//     qeni: {
//         emer:"bubi",
//         mosha:joni,
//     },
//    fol: () => {
//     console.log("un po foli");
//    },


// }
// personi.ngjyraePreferuar.push("e vjollce");
// console.log("mua me pelqen"+ personi.ngjyraePreferuar);

// console.log(personi.qeni.emri);
// personi.fol();

// personi.shkolla = "dicka";
// personi.x = "x";
// console.log("profesioni" in personi);
// console.log("emer" in personi);

// delete personi.mbiemri;
// console.log(personi.emri);
// console.log(personi["emer"]);

// personi.emri = "juled";
// console.log(personi.emer);







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






//this
// let emri = "scantech";
// let personi = {
//     emri: "anika",
//     prezantohu: function () {
//         alert ("hello" + this.emri);     // nese skishim pat this na kish dal alerti hello scantech ama masieshte this.emri po thote mrena objektit edhe del hello mirjeta
//     },
//     gjejMoshen: function() {
//         let rezultati = 2025 - this.vitilinDjes ;
//         alert(this.emri+" i ka " + rezultati + " vjet");
//         return rezultati;
       
//     }
// }
// personi.vitilinDjes = prompt("shkruani vitin e lindjes");
// console.log(personi.gjejMoshen());
// personi.emri;
// personi.prezantohu();


let nrnxansat = "mirjeta";
let klasa = { 
    nxenesit: [
        "anika",
        "arb",
        "kron",
        "jon",
        "bardh",
        "lira",
        "jara",
        "juled",
        "olsa",
     ],
    nrnxansat: this.nxenesit.length,
    gjejNxenesitemesit: function() {
        let nxenesiImesit = this.nrnxansat / 2;
        alert("Nxenesit ne mes eshte"+ nxenesiImesit);
    }
}
console.log(klasa.nrnxansat);
console.log(klasa.gjejNxenesitemesit());















