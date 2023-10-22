document.addEventListener('DOMContentLoaded', function () {
    const Square = document.querySelectorAll('.square');
    Square.forEach(square => {
      square.classList.add("tic-tac-toe.css"); 
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const Squares = document.querySelectorAll('.square');
    const state = new Array(9).fill(''); // Initialize an empty array to track the game state
    const status = document.getElementById('status'); // Display status message
    let playerX = true; // Player X
    let playerO = false; // Player O
    let gameStatus = false; // To track the game's state
    const Button = document.querySelector('.btn'); 
  
    function checkWin(state) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (state[a] && state[a] === state[b] && state[a] === state[c]) {
          status.textContent = `Congratulations! ${state[a]} is the Winner!`;
          status.classList.add('you-won');
          gameStatus = true;
          return;
        }
      }
  
      // Check for a draw
      if (state.every(square => square !== '')) {
        status.textContent = 'It\'s a Draw!';
        gameStatus = true;
      }
    }
  
    Squares.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (!gameStatus && !square.textContent && state[index] === '') {
          if (playerX) {
            square.textContent = 'X';
            square.classList.add('X');
            state[index] = 'X';
            playerX = false;
            playerO = true;
          } else {
            square.textContent = 'O';
            square.classList.add('O');
            state[index] = 'O';
            playerX = true;
            playerO = false;
          }
  
          // Check for win/draw
          checkWin(state);
        }
      });
  
      square.addEventListener('mouseover', () => {
        if (!square.textContent) {
          square.classList.add('hover');
        }
      });
  
      square.addEventListener('mouseout', () => {
        if (!square.textContent) {
          square.classList.add('hover.O');
        }
      });
    });
    Button.addEventListener('click', () => {
        state.fill('');
        Squares.forEach(square => {
          square.textContent = '';
          square.classList.remove('X', 'O');
        });;
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');
        gameStatus=false;

    });

});
  

  
  

  
  
  