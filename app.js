


var activePlayer, roudscore, score, gamePlaying, lastScore;

init();

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // get random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // dislay to the DOM
        var dom = document.querySelector('.dice');
        dom.style.display = 'block';
        dom.src = 'dice-' + dice + '.png';
        lastScore = dice;
        // add to round score if not 1
    if (dice !== 1) {
        // add to roundscore
        roundscore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscore;
    } else {
        // next player
        nextPlayer(); 
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
        // add current score to global score
    if(gamePlaying) {
        scores[activePlayer] += roundscore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // next player
        var winningScore;
        var input = document.querySelector('.final-score').value;
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
        // check if the player won the game
    if( scores[activePlayer] >= winningScore) {
        gamePlaying = false;
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundscore;
        // clear roundscore
    roundscore = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    activePlayer = 0;
    roundscore = 0;
    scores = [0,0];
    gamePlaying = true;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2'
}
