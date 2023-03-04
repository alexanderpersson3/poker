import Deck from './views/deckview.js';
import colorView from './views/colorview.js';
import {
  CARD_VALUES_MAP,
  computerCardSlot,
  playerCardSlot,
  computerDeckElm,
  playerDeckElm,
  text,
} from './config.js';
import * as model from './model.js';
import { toggleGameBoard, playGameHandler } from './helper.js';

let playerDeck, computerDeck, round, stop;

function controllGame() {
  if (stop) {
    beginGame();
    return;
  }

  if (round) {
    resetBeforeRound();
  } else {
    flipCards();
  }
}

beginGame();
function beginGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  round = false;
  stop = false;

  resetBeforeRound();
}

function resetBeforeRound() {
  round = false;
  computerCardSlot.innerHTML = '';
  playerCardSlot.innerHTML = '';
  text.innerText = '';

  updateDeckCount();
}

function flipCards() {
  round = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.insertAdjacentHTML('afterbegin', playerCard.getHTML());
  computerCardSlot.insertAdjacentHTML('afterbegin', computerCard.getHTML());

  updateDeckCount();

  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = 'You Won 🏆';
    playerDeck.push(playerCard);
    playerDeck.push(computerCard);
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = 'You lost 😥';
    computerDeck.push(playerCard);
    computerDeck.push(computerCard);
  } else {
    text.innerText = 'Draw 🤝';
    playerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }

  if (isGameOver(playerDeck)) {
    text.innerText = 'You Lose!!';
    stop = true;
  } else if (isGameOver(computerDeck)) {
    text.innerText = 'You Win!!';
    stop = true;
  }
}

function updateDeckCount() {
  computerDeckElm.innerText = computerDeck.numberOfCards;
  playerDeckElm.innerText = playerDeck.numberOfCards;
}

function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUES_MAP[cardOne.value] > CARD_VALUES_MAP[cardTwo.value];
}

function isGameOver(deck) {
  return deck.numberOfCards === 0;
}
const updateLocalStorage = function () {
  model.saveColorLocally();
};
const updateClipboard = function (text) {
  navigator.clipboard.writeText(text);
};
const init = function () {
  colorView.generateColorHandler(updateLocalStorage);
  colorView.copyToClipboardHandler(updateClipboard);
  playGameHandler(controllGame);
  toggleGameBoard();
};
init();
