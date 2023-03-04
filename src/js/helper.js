const gameRulesContainer = document.querySelector('.gameRules');
const displayRulesBtn = document.querySelector('.displayRulesBtn');
const displayCardGame = document.querySelector('.displayCardGame');
const main = document.querySelector('.main');

export const toggleGameBoard = function () {
  displayCardGame.addEventListener('click', () => {
    // checkHidden(main);
    if (
      main.classList.contains('hidden')
        ? (displayCardGame.textContent = 'Close Game')
        : (displayCardGame.textContent = 'Card Game')
    )
      main.classList.toggle('hidden');
  });
};
export const playGameHandler = function (handler) {
  document.querySelector('.playBtn').addEventListener('click', handler);
};

export const toggleRules = function () {
  const markup = `
    <ul class="textRules">
    <p>Rules</p>
    <li><p>Draw the highest card to win</p></li>
    <li><p>Winner</p></li>
    <li><p>The game continues until eaither player manages to take all their 
    opponents cards! Good luck 😅!</p></li>
    </ul>
    `;
  gameRulesContainer.insertAdjacentHTML('beforeend', markup);
  displayRulesBtn.addEventListener('click', () => {
    gameRulesContainer.classList.toggle('hidden');
  });
};
