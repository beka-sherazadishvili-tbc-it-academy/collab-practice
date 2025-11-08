const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const playerScore1 = document.querySelector('#score--0');
const playerScore2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');

let currentUser = false;

const userScores = [
    {
        playerId: 0,
        score: 0
    },
    {
        playerId: 1,
        score: 0
    }
]

function startNewGame() {
    userScores[0].score = 0;
    userScores[1].score = 0;
    playerScore2.textContent = `${userScores[0].score}`;
    playerScore1.textContent = `${userScores[1].score}`;
    currentScore2.textContent = '0';
    currentScore1.textContent = '0';

    currentUser = false;

    if(firstPlayer.classList.contains('player--active')) {return;}

    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
}