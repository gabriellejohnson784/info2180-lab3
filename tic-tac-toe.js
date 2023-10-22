document.addEventListener('DOMContentLoaded', function () {
    // Get all the square elements on the game board
    const squares = document.querySelectorAll('.square');
  
    // Loop through each square and add the appropriate class
    squares.forEach(square => {
      square.classList.add("tic-tac-toe.css"); // Replace 'your-css-class-name' with the actual class you want to add
    });
  });
  
  