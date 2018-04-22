console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var cardOne = cards[1];
console.log("user flipped " + cardOne);
cardsInPlay.push(cardOne);
console.log(cardsInPlay);
var cardTwo = cards[2];
console.log("user flipped " + cardTwo);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);
if(cardsInPlay.length === 2){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match");    
} else {
    alert("Try again, sorry");
}
}