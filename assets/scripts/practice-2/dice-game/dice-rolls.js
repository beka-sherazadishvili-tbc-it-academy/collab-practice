rollDice.addEventListener('click', () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector('img').setAttribute('src', `./assets/images/dice-${diceNumber}.png`);

    if(!currentUser) {
        if(diceNumber === 1) {
            currentUser = !currentUser;
            currentScore1.textContent = '0';
            firstPlayer.classList.toggle('player--active');
            secondPlayer.classList.toggle('player--active');
        }else {
            currentScore1.textContent =  Number(currentScore1.textContent) + diceNumber;
        }
    } else {
        if(diceNumber === 1) {
            currentUser = !currentUser;
            currentScore2.textContent = '0';
            firstPlayer.classList.toggle('player--active');
            secondPlayer.classList.toggle('player--active');
        }else {
            currentScore2.textContent =  Number(currentScore2.textContent) + diceNumber;
        }
    }
});

holdBtn.addEventListener('click', () => {
    if(!currentUser) {
        userScores[0].score += Number(currentScore1.textContent);
        playerScore1.textContent = `${userScores[0].score}`;
        currentScore1.textContent = '0';

        if(userScores[0].score >= 100) {
            alert('Winner: User 1');
            startNewGame();
        }

        firstPlayer.classList.toggle('player--active');
        secondPlayer.classList.toggle('player--active');
        currentUser = !currentUser;
    } else {
        userScores[1].score += Number(currentScore2.textContent);
        playerScore2.textContent = `${userScores[1].score}`;
        currentScore2.textContent = '0';

        if(userScores[1].score >= 100) {
            alert('Winner: User 2');
            startNewGame();
        }

        firstPlayer.classList.toggle('player--active');
        secondPlayer.classList.toggle('player--active');
        currentUser = !currentUser;
    }
});

newGame.addEventListener('click', () => {
    startNewGame()
});