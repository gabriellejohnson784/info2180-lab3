document.addEventListener('DOMContentLoaded', function () {
    const Square = document.querySelectorAll('.square');
    Square.forEach(square => {
      square.classList.add("tic-tac-toe.css"); 
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const Square = document.querySelectorAll('.square');
    const state = new Array(9).fill(''); // Initialize an empty array to track the game state
    let playerX = true; //  player X 
    let playerY = false; //player y
  
    Square.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (!square.textContent && state[index] === '') {
          if (playerX) {
            square.textContent = 'X'; 
            square.classList.add('X');
            state[index] = 'X';
            playerX = false;
            playerY = true;
          } 
          else {
            square.textContent = 'O';
            square.classList.add('O');
            state[index] = 'O';
            playerX = true;
            playerY = false;
          }
          square.addEventListener('mouseover', () => {
            if (!square.textContent) {
              square.classList.add('hover');
            }
          });
          square.addEventListener('mouseout', () => {
            square.classList.add('hover.O');
          });
  
          // Check for win/draw
          checkWin(state);
        }
      });
    });
  });

  
  

  
  
  