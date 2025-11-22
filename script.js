const choices = document.querySelectorAll('.choice');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const roundEl = document.getElementById('round');
const userChoiceEl = document.getElementById('user-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const roundResultEl = document.getElementById('round-result');
const finalResultEl = document.getElementById('final-result');

let userScore = 0;
let computerScore = 0;
let round = 1;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    if (round > 5) return;

    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();

    userChoiceEl.textContent = `User: ${userChoice}`;
    computerChoiceEl.textContent = `Computer: ${computerChoice}`;

    const winner = getWinner(userChoice, computerChoice);

    if (winner === 'user') {
      userScore += 5;
      roundResultEl.textContent = "User scores 5 points!";
    } else if (winner === 'computer') {
      computerScore += 5;
      roundResultEl.textContent = "Computer scores 5 points!";
    } else {
      roundResultEl.textContent = "It's a tie!";
    }

    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;

    if (round === 5) {
      declareWinner();
    } else {
      round++;
      roundEl.textContent = round;
    }
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(user, computer) {
  if (user === computer) return 'tie';

  if (computer === 'paper' && user === 'scissors') return 'user';
  if (computer === 'scissors' && user === 'paper') return 'computer';
  if (computer === 'rock' && user === 'paper') return 'user';
  if (user === 'rock' && computer === 'paper') return 'computer';
  if (computer === 'scissors' && user === 'rock') return 'user';
  if (computer === 'rock' && user === 'scissors') return 'computer';

  return 'tie';
}

function declareWinner() {
  if (userScore > computerScore) {
    finalResultEl.textContent = "🎉 Congratulations User! 🎉";
  } else if (computerScore > userScore) {
    finalResultEl.textContent = "🤖 Congratulations Computer! 🤖";
  } else {
    finalResultEl.textContent = "It's a draw!";
  }
}