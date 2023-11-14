const cards = document.querySelectorAll('.memory-card');
const nextLevel = document.getElementById('next-level');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let n=0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.country === secondCard.dataset.country;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  n=n+1;
  showandhide(n);

  resetBoard();
}
function showandhide(n){
  if (n==15) {nextLevel.classList.remove('hide')}
 
}
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  
}
// IIFE (Immediately Invoked Function Expression)
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    n=0;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));