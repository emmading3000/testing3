let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape
// let xpos2, ypos2;

let xspeed = 9.8; // Speed of the shape
let yspeed = 9.2; // Speed of the shape

let xdirection = Math.random(10); // Left or Right
let ydirection = Math.random(10); // Top to Bottom

function setup() {
    createCanvas(windowWidth, windowHeight-85);

    const realNames = ["red", "green", "yellow", "blue", "purple", "black", "pink", "orange"];
    const realNames2 = ["Red", "Green", "Yellow", "Blue", "Purple", "Black", "Pink", "Orange"];
    console.log(realNames);
    console.log(realNames2);

//original prompt
    let userColor = prompt("What is your favorite color?");

    console.log(userColor);
    if (userColor == realNames[0] || userColor == realNames2[0]) {
        background("#e01919");
    }
    if (userColor == realNames[1] || userColor == realNames2[1]) {
        background("#33cc33");
    }
    if (userColor == realNames[2] || userColor == realNames2[2]) {
        background("#faf320");
    }
    if (userColor == realNames[3] || userColor == realNames2[3]) {
        background("#2039fa");
    }
    if (userColor == realNames[4] || userColor == realNames2[4]) {
        background("#aa20fa");
    }
    if (userColor == realNames[5] || userColor == realNames2[5]) {
        background("#000000");
    }
    if (userColor == realNames[6] || userColor == realNames2[6]) {
        background("#e935f0");
    }
    if (userColor == realNames[7] || userColor == realNames2[7]) {
        background("#ff7e1c");
    }



    noStroke();
    frameRate(60);
    ellipseMode(RADIUS);
    // Set the starting position of the shape
    xpos = width / 2;
    ypos = height / 2;
    
    let chosenBackground = (background);

    let randomR = random(1, 255);
    let randomG = random(1, 255);
    let randomB = random(1, 255);

}

function draw(){
    let spaceCounter = 0;

    let randomR = random(1, 255);
    let randomG = random(1, 255);
    let randomB = random(1, 255);

    while (keyCode == 32 && spaceCounter == 0) {
        spaceCounter = 1;
        console.log(spaceCounter);
        keyCode == 0;
    }

    document.addEventListener('keyup', function () {
        console.log("spacebar released");
        background(randomR, randomB, randomG);
    });


    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;
    
    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
    }

    fill (0, 0, 0, 20);
    stroke(20);
    stroke(0, 0, 0);
    rect (0, 0, windowWidth, windowHeight);

    noStroke();
    fill (244, 218, 213, 20);

    // Draw the shape
    ellipse(xpos, ypos, rad, rad);
}