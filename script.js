const squaresClass = document.querySelectorAll('.cell');
const winner = document.querySelector('.wins');
const resetBtn = document.querySelector('#resetGame');
const board = document.querySelector('.board');

///////////////// Function to color the squares ///////////////////////////////
let playerTurn = true;

const everyBoardMove = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const whoWon = () => {
  if (
    (board[0] === board[1] && board[0] === board[2]) ||
    (board[3] === board[4] && board[3] === board[5]) ||
    (board[6] === board[7] && board[6] === board[8]) ||
    (board[0] === board[3] && board[0] === board[6]) ||
    (board[1] === board[4] && board[1] === board[7]) ||
    (board[2] === board[5] && board[2] === board[8]) ||
    (board[0] === board[4] && board[0] === board[8]) ||
    (board[2] === board[4] && board[2] === board[6])
  ) {
    winner.innerText = 'Player 1 wins!';
  } else {
    winner.innertext = 'Player 2 wins!';
  }
};

const stopClick = e => {
  if (playerTurn) {
    e.target.style.backgroundColor = 'red';
    winner.innerHTML = 'Player 1 turn';

    // On each click this will target each id of the square and turn it true or false
  } else {
    e.target.style.backgroundColor = 'blue';
    winner.innerHTML = 'Player 2 turn';
  }
  everyBoardMove[e.target.id] = playerTurn;

  whoWon();
  playerTurn = !playerTurn;
  e.target.removeEventListener('click', stopClick);
};

squaresClass.forEach(element => {
  element.addEventListener('click', stopClick);
});

/////////////////// Reset Button /////////////////////

resetBtn.addEventListener('click', () => {
  // Loop over each square again.

  squaresClass.forEach(element => {
    element.style.backgroundColor = 'white';
    element.addEventListener('click', stopClick);
    winner.innerText = '';
  });
  playerTurn = true;
});
