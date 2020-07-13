var button = [];
for (var i = 1; i < 10; i++) {
  button[i] = document.getElementById("canvas" + i);
}
var ctx = [];
for (var i = 1; i < 10; i++) {
  ctx[i] = button[i].getContext("2d");
}
var bDisable = [];
for (var i = 1; i < 10; i++) {
  bDisable[i] = false;
}
var isResult = false;
var content = [];
function loop(x) {
  if (!bDisable[x]) {
    bDisable[x] = true;
    button[x].style.opacity = 0.7;
    button[x].style.webkitTransform = "rotateY(180deg)";
    content[x] = "x";
    setTimeout(function () {
      ctx[x].lineWidth = 6;
      ctx[x].beginPath();
      ctx[x].moveTo(10, 10);
      ctx[x].lineTo(90, 90);
      ctx[x].moveTo(90, 10);
      ctx[x].lineTo(10, 90);
      ctx[x].stroke();
      ctx[x].closePath();
      computerTurn();
    }, 500);
    checkWinner();
  }
}
function computerTurn() {
  var r = Math.random() * 2;
  if (r < 0.1 && !bDisable[1]) draw0steps(1);
  else if (r < 0.2 && !bDisable[2]) draw0steps(2);
  else if (r < 0.3 && !bDisable[3]) draw0steps(3);
  else if (r < 0.4 && !bDisable[4]) draw0steps(4);
  else if (r < 0.5 && !bDisable[5]) draw0steps(5);
  else if (r < 0.6 && !bDisable[6]) draw0steps(6);
  else if (r < 0.7 && !bDisable[7]) draw0steps(7);
  else if (r < 0.8 && !bDisable[8]) draw0steps(8);
  else if (r < 0.9 && !bDisable[9]) draw0steps(9);
  else computerTurn();
}
function draw0steps(x) {
  bDisable[x] = true;
  button[x].style.webkitTransform = "rotateY(180deg)";
  button[x].style.opacity = 0.7;
  content[x] = "o";
  setTimeout(function () {
    ctx[x].lineWidth = 6;
    ctx[x].beginPath();
    ctx[x].arc(50, 50, 39, 0, 2 * Math.PI);
    ctx[x].stroke();
  }, 600);

  checkWinner();
}

function checkWinner() {
  if (!isResult) {
    if (content[1] == "x" && content[2] == "x" && content[3] == "x")
      showWinner("You Win!");
    else if (content[1] == "x" && content[4] == "x" && content[7] == "x")
      showWinner("You Win!");
    else if (content[1] == "x" && content[5] == "x" && content[9] == "x")
      showWinner("You Win!");
    else if (content[2] == "x" && content[5] == "x" && content[8] == "x")
      showWinner("You Win!");
    else if (content[3] == "x" && content[5] == "x" && content[7] == "x")
      showWinner("You Win!");
    else if (content[4] == "x" && content[5] == "x" && content[6] == "x")
      showWinner("You Win!");
    else if (content[7] == "x" && content[8] == "x" && content[9] == "x")
      showWinner("You Win!");
    else if (content[3] == "x" && content[6] == "x" && content[9] == "x")
      showWinner("You Win!");

    if (content[1] == "o" && content[2] == "o" && content[3] == "o")
      showWinner("You Lose!");
    else if (content[1] == "o" && content[4] == "o" && content[7] == "o")
      showWinner("You Lose!");
    else if (content[1] == "o" && content[5] == "o" && content[9] == "o")
      showWinner("You Lose!");
    else if (content[2] == "o" && content[5] == "o" && content[8] == "o")
      showWinner("You Lose!");
    else if (content[3] == "o" && content[5] == "o" && content[7] == "o")
      showWinner("You Lose!");
    else if (content[4] == "o" && content[5] == "o" && content[6] == "o")
      showWinner("You Lose!");
    else if (content[7] == "o" && content[8] == "o" && content[9] == "o")
      showWinner("You Lose!");
    else if (content[3] == "o" && content[6] == "o" && content[9] == "o")
      showWinner("You Lose!");
  }
}
function showWinner(x) {
  setTimeout(function () {
    var alertBox = document.getElementById("alertBox");
    var alertContent = document.getElementById("alertContent");
    alertContent.innerHTML = x;
    alertBox.style.display = "block";
    isResult = true;
  }, 700);
  if (!isResult) alert.style.display = "hide";
}
function changeTheme(z) {
  var canvasDiv = document.getElementById("canvasDiv");
  var play = document.getElementById("reloadButton");
  for (i = 1; i < 10; i++) {
    switch (z) {
      case 1:
        button[i].style.backgroundColor = "red";
        document.body.style.backgroundColor = "yellow";
        break;
      case 2:
        button[i].style.backgroundColor = "yellow";
        document.body.style.backgroundColor = "seagreen";
        break;
      case 3:
        button[i].style.backgroundColor = "blue";
        document.body.style.backgroundColor = "pink";
        play.style.color = "green";
        break;
      case 4:
        button[i].style.backgroundColor = "white";
        document.body.style.backgroundColor = "black";
        break;
      case 5:
        button[i].style.backgroundColor = "black";
        document.body.style.backgroundColor = "white";
        play.style.color = "lime";
        ctx[i].strokeStyle = "red";

        break;
      default:
        alert("Invalid theme");
        break;
    }
  }
}
