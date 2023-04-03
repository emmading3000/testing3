
function setup(){
    //createCanvas(width, height)
        //Default canvas is 100x100 pixels
        //Create a canvas with an 800px width, and 600px height
    createCanvas(800, 300);
    
    // more on color below 
    background(127);

    // Setup() function runs once, contains code that defines initial state of the sketch. Such as: bg color, canvas size, initial values and global variables

    // width and height
    // console.log(width);
    // console.log(height);
}

function draw(){
    // loop infinitely after setup() is run

    // Basic Components of Drawing

        // POINT
        // point(x, y);

        // LINE
        // line(x1, y1, x2, y2);

        // RECTANGLE AND SQUARE
        // rect (x, y, width, height);
        // square(x, y, width);

        // ELLIPSE AND CIRCLE
        // ellipse(x, y, width, height);
        // circle(x, y, width);

        // TRIANGLE / POLYGON
        // triangle(x1, y1, x2, y2, x3, y3);
        // quad(x1, y1, x2, y2, x3, y3, x4, y4);

    // BASIC COLOR
    // JavaScript can run RGB values (0-255), Hex Codes #------, and CSS Color Key
    // Adding color to your code, the color attributes go ABOVE the shape
        // background ();
            // background can be defined in function setup(){} if you're not going to change it
        // fill ();
        // stroke ();


        fill(0, 0, 255);
        circle(100, 100, 25);

        noFill();
        strokeWeight(1);
        square(50, 50, 25);

        strokeWeight(50);
        line(50, 25, 50, 75);

        noStroke();
        fill(0, 0, 255);
        circle(50, 50, 25);

 

    // Like visual hierarchies in other graphic softwares, order matters. In JavaScript, the last code added will appear on top.
    // You need to define different stroke weights, stroke fills, etc for each shape if you want to achieve a varied appearance.

        stroke (255, 0, 0);
        strokeWeight(2);
        fill('blue');
        circle(100, 100, 100);
        // square(50, 50, 100);

    // Draw a 50x50 grid of circles that are 25px apart horizontally and vertically
    // x++ is an increment operator that adds 'one' 
        fill('black');
        for(let posX = 0; posX < 50; posX++) {
            for(let posY = 0; posY < 50; posY++)
            {
            circle(posX * 25, posY * 25, 10);
            }
            }
        }

    // 