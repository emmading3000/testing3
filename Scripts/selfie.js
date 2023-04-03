function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0, 0, 0);
}

function draw() {
    noStroke();
    //shirt
    fill("#5B9CE5");
    rect(windowWidth/2-350, windowHeight*0.85+100, 700, windowHeight*0.15-100);
    rect(windowWidth/2-250, windowHeight*0.85, 500, windowHeight*0.15);

    ellipse(windowWidth/2-250, windowHeight*0.85+100, 200, 200);
    ellipse(windowWidth/2+250, windowHeight*0.85+100, 200, 200);

    //neck
    fill ("#E1C283");
    rect(windowWidth/2-50, windowHeight/2 + 100, 100, 600);

    //hair
    fill ("#784B15");
    ellipse(windowWidth/2, windowHeight/3 + 100, 600, 800);
    rect(windowWidth/2-300, windowHeight/3-250 + 350, 600, 300);

    //face
    fill ("#E1C283");
    ellipse(windowWidth/2, windowHeight/2, 500, 800);

    //shirt bottom
    fill("#5B9CE5");
    rect(windowWidth/2-100, windowHeight*0.9, 200, windowHeight*0.1);

    //eyes
    fill (225);
    ellipse(windowWidth/2-100, windowHeight/2, 50, 50);
    ellipse(windowWidth/2+100, windowHeight/2, 50, 50);
    stroke(5);
    fill("#D2892D");
    ellipse(windowWidth/2-100, windowHeight/2, 25, 25);
    ellipse(windowWidth/2+100, windowHeight/2, 25, 25);
    noStroke();

    fill("#E1C283");
    ellipse(windowWidth/2+100, windowHeight/2+10, 50, 40);

    //mouth
    fill("#B35931");
    triangle(windowWidth/2-50, 940, windowWidth/2-10, 920, windowWidth/2, 940);
    triangle(windowWidth/2+50, 940, windowWidth/2+10, 920, windowWidth/2, 940);
    triangle(windowWidth/2-50, 940, windowWidth/2-15, 960, windowWidth/2, 940);
    triangle(windowWidth/2+50, 940, windowWidth/2+15, 960, windowWidth/2, 940);
    ellipse(windowWidth/2, 950, 50, 30);
}