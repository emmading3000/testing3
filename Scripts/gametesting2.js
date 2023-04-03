const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_SIZE = 10;
const SNAKE_SPEED = 3;

let snake = [{x: canvas.width / 2, y: canvas.height / 2}];
let snakeLength = 5;
let snakeDirection = {x: SNAKE_SPEED, y: 0};

function drawSnake() {
  ctx.fillStyle = "green";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, CELL_SIZE, CELL_SIZE);
  }
}

function moveSnake(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let snakeHeadX = snake[0].x + CELL_SIZE / 2;
  let snakeHeadY = snake[0].y + CELL_SIZE / 2;
  let dx = mouseX - snakeHeadX;
  let dy = mouseY - snakeHeadY;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let speedX = dx / distance * SNAKE_SPEED;
  let speedY = dy / distance * SNAKE_SPEED;
  snakeDirection = {x: speedX, y: speedY};
}

function checkCollision() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  if (checkCollision()) {
    snakeDirection.x *= -1;
    snakeDirection.y *= -1;
  }
  if (snake.length >= snakeLength) {
    snake.pop();
  }
  if (snake[0].x < 0 || snake[0].x + CELL_SIZE > canvas.width) {
    snakeDirection.x *= -1;
  }
  if (snake[0].y < 0 || snake[0].y + CELL_SIZE > canvas.height) {
    snakeDirection.y *= -1;
  }
  snake.unshift({x: snake[0].x + snakeDirection.x, y: snake[0].y + snakeDirection.y});
  snakeLength++;
  requestAnimationFrame(update);
}

canvas.addEventListener("mousemove", moveSnake);

update();