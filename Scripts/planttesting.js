let snake = [];
let segmentSize = 80;
let gameOver = false;
let prevMouseX, prevMouseY;
let addSegment = false;
let maxSegments = 100;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight*2);
  noStroke();
  snake.push(createVector(0, 0));
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function draw() {
  gameOver == false;

  background(220);

  //If the mouse is moving, that is stored in the addSegment bool
  if (prevMouseX != mouseX && prevMouseY != mouseY) {
    addSegment == true;
  }
  if (prevMouseX != mouseX || prevMouseY != mouseY) {
    addSegment == true;
  }

  // Add a new segment to the snake's head, based on mouse position
  let head = snake[0].copy();
  head.x = mouseX;
  head.y = mouseY;

  if (mouseX !== prevMouseX || mouseY !== prevMouseY) {
    snake.unshift(head);
  }

  while (snake.length > maxSegments && prevMouseX != mouseX && prevMouseY != mouseX) {
    console.log("mouse is moving");
    snake.pop();
  }

  // Draw each segment of the snake
  for (let i = 0; i < snake.length; i++) {
    let segment = snake[i];
    if (i==0 || i==1 || i==2 || i==3) {
      fill(120);
    }
    else {
      fill(32, 21, 179);
    }
    ellipse(segment.x, segment.y, segmentSize, segmentSize);
    fill(29, 160, 195, 75);
    ellipse(segment.x, segment.y, segmentSize/2, segmentSize/2);
  }


  // Check for collision with the edge of the canvas
      if (head.x < 0 || head.x > width || head.y < 0 || head.y > height) {
        gameOver = true;
      }

  console.log(snake.length);

  prevMouseX = mouseX;
  prevMouseY = mouseY;

  if (gameOver == true) {
    console.log('game over');
  }
} 