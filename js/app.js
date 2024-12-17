/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*---------------------------- Variables (state) ----------------------------*/
let turn;
let board;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#reset");
/*-------------------------------- Functions --------------------------------*/
function placePiece(index) {
  board[index] = turn;
  console.log(board);
}

function checkForTie() {
  if (winner === true) {
    return;
  }
  if (!board.includes("")) {
    tie = true;
    console.log(tie, "<- tie check");
  }
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    if (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = true;
    }
  });
  console.log(winner, "<- winner check");
}

function switchPlayerTurn() {
  if (winner === true) {
    return;
  } else if (turn === "X") {
    turn = "O";
  } else if (turn === "O") {
    turn = "X";
  }
  console.log(turn); // this part works
}

function updateBoard() {
  board.forEach((tik, idx) => {
    if (tik === "X") {
      squareEls[idx].textContent = "X";
    } else if (tik === "O") {
      squareEls[idx].textContent = "O";
    } else {
      squareEls[idx].textContent = "";
    }
  });
  console.log(board);
}

function updatedMessage() {
  if (winner === false && tie === false) {
    if (turn === "X") {
      messageEl.innerText = "Turn: Player X";
    } else if (turn === "O") {
      messageEl.innerText = "Turn: Player O";
    }
  } else if (winner === false && tie === true) {
    messageEl.innerText = "Game Tie!";
  } else if (winner === true) {
    messageEl.innerText = "Congratulations Winner!";
  }
}

function render() {
  updateBoard();
  updatedMessage();
}

function handleClick(e) {
  const squareIndex = e.target.id;
  console.log(squareIndex);
  if (board[squareIndex] !== "") {
    return;
  }
  if (winner === true) {
    return;
  }
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function init() {
  // how do i initilize the game when the app loads?
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}
init();

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((squareEl) => {
  squareEl.addEventListener("click", handleClick);
  console.log("a square has been clicked");
});

resetBtnEl.addEventListener("click", init);
