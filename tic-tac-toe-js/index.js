const board = document.getElementById('board');
const status = document.getElementById('status');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function createCell(index) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('data-index', index);
  cell.addEventListener('click', () => cellClick(index));
  board.appendChild(cell);
}

function initializeBoard() {
  board.innerHTML = '';
  gameBoard = Array(9).fill('');
  for (let i = 0; i < 9; i++) {
    createCell(i);
  }
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = 'Player X\'s turn';
  restartButton.style.display = 'none';
}

function cellClick(index) {
  if (!gameActive || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  updateBoard();
  checkWinner();
  switchPlayer();
}

function updateBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
      status.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
      showRestartButton();
      return;
    }
  }

  if (!gameBoard.includes('')) {
    status.textContent = 'It\'s a draw!';
    gameActive = false;
    showRestartButton();
  }
}

function showRestartButton() {
  restartButton.style.display = 'block';
}

function restartGame() {
  initializeBoard();
}

initializeBoard();