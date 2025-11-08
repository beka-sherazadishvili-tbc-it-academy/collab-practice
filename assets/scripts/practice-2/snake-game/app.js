const mainBody = document.querySelector(".snake__main");

const rows = 40;
const columns = 40;
const bodyArray = [];
const bodyElementArray = [];
let lastKeyPressed = "ArrowRight";
let appleEaten = false;
const snakeBody = [];
let appleCoordinates = [];
let increased = false;

for (let i = 0; i < rows; i++) {
  bodyArray[i] = [];
  bodyElementArray[i] = [];
  for (let j = 0; j < columns; j++) {
    bodyArray[i][j] = "O";
    bodyElementArray[i][j] = "";
  }
}

function initializeBody() {
  mainBody.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const bodyDiv = document.createElement("div");
      // bodyDiv.innerText = "O";
      if (i === 19 && (j === 19 || j === 20 || j === 21)) {
        bodyDiv.classList.add("active");
        bodyArray[i][j] = "X";
        snakeBody.push([i, j]);
      } else {
        bodyDiv.classList.add("inactive");
        bodyArray[i][j] = "O";
      }
      bodyElementArray[i][j] = bodyDiv;
      mainBody.appendChild(bodyDiv);
    }
  }
}

document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      lastKeyPressed = "ArrowRight";
      break;
    case "ArrowLeft":
      lastKeyPressed = "ArrowLeft";
      break;
    case "ArrowUp":
      lastKeyPressed = "ArrowUp";
      break;
    case "ArrowDown":
      lastKeyPressed = "ArrowDown";
      break;
  }
});

function snakeMove() {
  let head = snakeBody[snakeBody.length - 1];
  let moveHead;

  if (lastKeyPressed === "ArrowRight") {
    if (head[1] === columns) {
      head[1] = 0;
      moveHead = [head[0], head[1] + 1];
    } else {
      moveHead = [head[0], head[1] + 1];
    }
  } else if (lastKeyPressed === "ArrowLeft") {
    if (head[1] === 0) {
      head[1] = 39;
      moveHead = [head[0], head[1] - 1];
    } else {
      moveHead = [head[0], head[1] - 1];
    }
  } else if (lastKeyPressed === "ArrowUp") {
    if (head[0] === 0) {
      head[0] = 39;
      moveHead = [head[0] - 1, head[1]];
    } else {
      moveHead = [head[0] - 1, head[1]];
    }
  } else if (lastKeyPressed === "ArrowDown") {
    if (head[0] === rows - 1) {
      head[0] = 0;
      moveHead = [head[0] + 1, head[1]];
    } else {
      moveHead = [head[0] + 1, head[1]];
    }
  }

  snakeBody.push(moveHead);

  snakeBody.shift();

  updateDisplay();
  setTimeout(snakeMove, 200);
}

function updateDisplay() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      bodyElementArray[i][j].classList.remove("active");
      bodyElementArray[i][j].classList.add("inactive");
      bodyArray[i][j] = "O";
      // bodyElementArray[i][j].innerText = "O";
    }
  }

  if (!appleEaten) {
    appleCoordinates = spawnApple();
    bodyArray[appleCoordinates[0]][appleCoordinates[1]] = "A";
    if (
      bodyElementArray[appleCoordinates[0]][
        appleCoordinates[1]
      ].classList.contains("inactive")
    ) {
      bodyElementArray[appleCoordinates[0]][
        appleCoordinates[1]
      ].classList.remove("inactive");
      bodyElementArray[appleCoordinates[0]][appleCoordinates[1]].classList.add(
        "red"
      );
    }

    appleEaten = !appleEaten;
  }

  snakeBody.forEach((segment) => {
    let snakeRow = segment[0];
    let snakeCol = segment[1];
    eatApple(
      appleCoordinates[0],
      appleCoordinates[1],
      snakeBody[snakeBody.length - 1][0],
      snakeBody[snakeBody.length - 1][1]
    );

    // console.log(`${snakeRow},${snakeCol}`);
    if (snakeCol <= 39 && lastKeyPressed === "ArrowRight") {
      bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
      bodyElementArray[snakeRow][snakeCol].classList.add("active");
      bodyArray[snakeRow][snakeCol] = "X";
      // bodyElementArray[snakeRow][snakeCol].innerText = "X";
      snakeCol = 0;
    } else if (lastKeyPressed === "ArrowLeft") {
      if (snakeCol === 5) {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
        snakeCol = 39;
      } else {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
      }
    } else if (lastKeyPressed === "ArrowUp") {
      if (snakeRow === 0) {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
        snakeRow = 39;
      } else {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
      }
    } else if (lastKeyPressed === "ArrowDown") {
      if (snakeRow === 39) {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
        snakeRow = 0;
      } else {
        bodyElementArray[snakeRow][snakeCol].classList.remove("inactive");
        bodyElementArray[snakeRow][snakeCol].classList.add("active");
        bodyArray[snakeRow][snakeCol] = "X";
        // bodyElementArray[snakeRow][snakeCol].innerText = "X";
      }
    }

    if (snakeBody.indexOf(segment) !== snakeBody.length - 1) {
      if (
        segment[0] === snakeBody[snakeBody.length - 1][0] &&
        segment[1] === snakeBody[snakeBody.length - 1][1]
      ) {
        endGame();
      }
    }
  });
}

function spawnApple() {
  let appleX = Math.floor(Math.random() * rows);
  let appleY = Math.floor(Math.random() * columns);
  while (bodyArray[appleX][appleY] === "O") {
    appleX = Math.floor(Math.random() * rows);
    appleY = Math.floor(Math.random() * columns);
    break;
  }

  increased = false;
  return [appleX, appleY];
}

function eatApple(appleX, appleY, headX, headY) {
  if (appleX === headX && appleY === headY && !increased) {
    appleEaten = !appleEaten;
    const tail = snakeBody[0];
    snakeBody.unshift([tail[0] - 1, tail[1]]);
    bodyArray[appleX][appleY] = "X";
    bodyElementArray[appleX][appleY].classList.remove("red");
    bodyElementArray[appleX][appleY].classList.add("active");
    increased = true;
  }
}

function endGame() {
  window.location.reload();
}

initializeBody();
snakeMove();
