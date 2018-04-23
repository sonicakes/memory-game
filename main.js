console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");    
        } else {
            alert("Try again, sorry");
        }
}
function flipCard(cardId){
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if(cardsInPlay.length === 2){
   checkForMatch();
    }
}
flipCard(0);
flipCard(2);
