const diceImg = document.getElementById('diceImg');
const rollBtn = document.getElementById('rollBtn');

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function setDiceImage(num) {
  diceImg.src = `images/dice${num}.png`;
}

function rollDice() {
  diceImg.classList.add('rolling');
  let rollCount = 0;
  const animationInterval = setInterval(() => {
    const tempNum = getRandomDice();
    setDiceImage(tempNum);
    rollCount++;
    if (rollCount > 9) {
      clearInterval(animationInterval);
      const finalNum = getRandomDice();
      setDiceImage(finalNum);
      diceImg.classList.remove('rolling');
    }
  }, 60);
}

rollBtn.addEventListener('click', rollDice);
