const dice = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  dice.classList.add('rolling');
  let rollCount = 0;
  const animationInterval = setInterval(() => {
    dice.textContent = getRandomDice();
    rollCount++;
    if (rollCount > 9) {
      clearInterval(animationInterval);
      dice.textContent = getRandomDice();
      dice.classList.remove('rolling');
    }
  }, 60);
}

rollBtn.addEventListener('click', rollDice);
