const choices = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: '✊',
  paper: '📄',
  scissors: '✂️'
};

let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  const resultDiv = document.getElementById('result');

  const outcome = getWinner(userChoice, compChoice);

  if (outcome === 'win') {
    userScore++;
    resultDiv.innerHTML = `✅ You Win! ${emojis[userChoice]} beats ${emojis[compChoice]}`;
  } else if (outcome === 'lose') {
    compScore++;
    resultDiv.innerHTML = `❌ You Lose! ${emojis[compChoice]} beats ${emojis[userChoice]}`;
  } else {
    resultDiv.innerHTML = `⚖️ It's a Draw! You both chose ${emojis[userChoice]}`;
  }

  updateScores();
}

function getWinner(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function updateScores() {
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('compScore').textContent = compScore;
}
