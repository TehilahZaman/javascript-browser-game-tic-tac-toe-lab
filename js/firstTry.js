/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let tikIsX = true;
let turn;

let board;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const tSquares = document.querySelectorAll(".sqr");
const displayMessage = document.querySelector("#message");
/*-------------------------------- Functions --------------------------------*/
function init() {
  //rename game status?
  // how do i initilize teh game whe nthe app loads?
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}
init();

function handleReaction(e) {
  if (!e) return;
  // if (e.target.classList.contains('sqr')) { ... ->} is this necessary?
  if (!e.target.innerText) {
    e.target.innerText = tikIsX ? "X" : "O";
    tikIsX = !tikIsX;
  }
  if (tikIsX) {
    console.log("Turn: Player X");
    displayMessage.innerText = "Turn: Player X";
    turn = "X";
  } else {
    console.log("Turn: Player O");
    displayMessage.innerText = "Turn: Player O";
    turn = "O";
  }
  render();
}
function updatedBoard() {
  board.forEach((tik, idx) => {
    //forEach can have 2 parameters: the rep of the array and the idx
    tSquares[idx].textContent = tik;
  });
  console.log(board);
}
/*----------------------------- Event Listeners -----------------------------*/
tSquares.forEach((tSquare) => {
  tSquare.addEventListener("click", handleReaction);
});

/*----------------------------- excercise steps -----------------------------*/

// let board;
//let turn;
// let winner;
// let tie;

// const tSquares = document.querySelectorAll(".sqr");
//const gameStatus = document.querySelector('#message')

// function init() { //rename game status?
//     // how do i initilize teh game whe nthe app loads?
//   board = ['', '', '', '', '', '', '', '', ''];
//     //board = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
//     turn = "X"
//     winner = false
//     tie = false
// render()
// }

function render() {
  updatedBoard();
  handleReaction();
}
