// Define xPos and yPos
// let xPos, yPos;
//runs at the start of program once
let xPos, yPos;

function setup(){
createCanvas(windowWidth, windowHeight);
frameRate(60);
background ('#79EED3');

xPos = 0;
yPos = 0;
}

function draw(){

//ellipse(frameCount * 2, height / 2, 100, 100);  

// INCREMENT X POSITION BY 5 EVERY DRAW LOOP
// ellipse(xPos, 100, 100, 100);
// xPos += 5;

// Decrement Y Position by 5 Every draw loop
// ellipse (100, yPos, 100, 100);
// yPos -= 5;

// ellipse (100, yPos, 100, 100);
// yPos += 5;

// generate random values
    // random() returns a random decimal between 0 and 1 
    // when used in an argument, the random() function returns a decimal value between 0 and the value of the given argument
    // when two numeric values are given as arugments, the random() function returns a radom decimal between first and second values in the argument

    let randomP = random(0, windowWidth);
    let randomO = (randomP-10, randomP+10);
    let randomX = random(20, 50);
    let randomSize = random(15, 100);
    let randomEllipsex = random (15, 100);
    let randomEllipsey = random (15, 100);
    let strokeStrength = random (1, 5);

    randomBig = random(120, 255);
    randomLittle = random(0, 80);
    randomLittle2 = random(0, 80);

    // noFill();
    // strokeWeight(strokeStrength);
    // stroke('blue');

    strokeWeight(5);
    strokeStrength = random(1, 10);
    strokeWeight(5);
    stroke(0, 0, 0);
    console.log(strokeWeight);
    fill (randomBig, randomLittle, randomLittle2);
    //wider rects
    rect(windowWidth/4, windowHeight/2, windowWidth/2, windowHeight/(frameCount/2));
    //border rects
    fill (randomLittle2, randomBig, randomLittle);
    rect((windowWidth/4)-40, windowHeight/2, 20, windowHeight/(frameCount/2));
    rect(3*(windowWidth/4) + 20, windowHeight/2, 20, windowHeight/(frameCount/2));

    if (frameCount > 120) {
        frameCount = 0;
    }

    // rect (0, (windowHeight))


}