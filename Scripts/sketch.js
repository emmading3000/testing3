function setup() {
    textSize(18);
}

function draw() {
    //Set BG to White
    background(255);
    //set tracking framerate to 12FPS
    frameRate(12);
    //Label function output
    text("X: " + mouseX, 0, height/4);
    text("Y: " + mouseY, 0, height/2);
}