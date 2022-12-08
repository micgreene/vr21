'use strict';
let cardsFaceUp = 0;
let card1;
let card2;
const cards = document.querySelectorAll('.flip-card-inner');

[...cards].forEach((card)=>{
  card.addEventListener( "click", () => {
    if(!card.classList.contains("is-flipped")) {
        cardsFaceUp++;
        if(cardsFaceUp === 1) {
            card1 = card;
            card.classList.toggle('is-flipped');
        }
        else if(cardsFaceUp === 2) {
            card2 = card;
            card.classList.toggle('is-flipped');
            checkMatch(card1, card2);            
        }                
    }
  });
});

function checkMatch(card1, card2) {
    if(card1.lastElementChild.innerText === card2.lastElementChild.innerText) {
        cardsFaceUp = 0;
    } else {
        setTimeout(() => {
            cardsFaceUp = 0;
            card1.classList.toggle('is-flipped');
            card2.classList.toggle('is-flipped');
        }, 1500);
    }
}