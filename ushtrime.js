let katrori = {
    emri:"katrori",
    gjatesiaebrinjes:4,
    // perimetri: () => {
    //     console.log(`perimetri i katrorit eshte ${4 * katrori.gjatesiaebrinjes} cm`);  //nuk munehs me perdor this ne arrays
    //  },
    perimetri: function () {
        console.log(`perimetri i katrorit eshte ${4 * this.gjatesiaebrinjes} cm`); 
     },
    syprina: function() {
        console.log(`syprina e katrorit eshte ${this.gjatesiaebrinjes * this.gjatesiaebrinjes}cm `);
    },
};

katrori.perimetri();
katrori.syprina();







// console.log("un e kam emrin "+ katrori.emri + " dhe brinjet e miajane te gjata " + katrori.gjatesiaebrinjes); // munesh neven te+ me bo , funksionon

// console.log("un e kam emrin ", katrori.emri ," dhe brinjet e miajane te gjata " , katrori.gjatesiaebrinjes);   \n jane si new line i gjet krejt ni rresht te ri

console.log(`un e kam emrin ${katrori.emri} dhe brinjet e mia jane ${katrori.gjatesiaebrinjes}`);// menyre tjetr ma e lehte mi shkrujt ne concsole