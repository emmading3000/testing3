let snake = [];
let segmentSize = 100;
let prevMouseX, prevMouseY;
let addSegment = false;
let maxSegments = 100;
let cursorSpeed;
let direction = 1;
let index = 0;
let zoomLevel = 100;
let test = new Date();
let loading = true;

let textToType1 = "Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Discipulis suis dicens accipite";
let textToType2 = "edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani.";
let textToType3 = "Ceteri vero dicebant sine videamus an veniat Helias liberans eum. Factum est autem in diebus illis exiit edictum ";
let textToType4 = "a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. ";
let textToType5 = "Et videbit omnis caro salutare dei. Genimina viperarum. Adveniat regnum tuum: panem nostrum cotidianum da ";
let textToType6 = "nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus";
let textToType7 = "fuerat. Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod";
let textToType8 = "natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia";
let textToType9 = "deus spiritus est et ex deo natus est. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque";
let textToType10 = "discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Discipulis suis dicens accipite edite ex hoc";
let textToType11 = "omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant";
let textToType12 = "sine videamus an veniat Helias liberans eum. Factum est autem in diebus illis exiit edictum a Caesare Augusto";
let textToType13 = "ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis";
let textToType14 = "caro salutare dei. Genimina viperarum. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie.";
let textToType15 = "Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia deus spiritus est et ex deo natus est.";
let textToType16 = "deus spiritus est et ex deo natus est. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque";
let textToType17 = "natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia";
let textToType18 = "edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani.";

let currentText1 = "";
let currentText2 = "";
let currentText3 = "";
let currentText4 = "";
let currentText5 = "";
let currentText6 = "";
let currentText7 = "";
let currentText8 = "";
let currentText9 = "";
let currentText10 = "";
let currentText11 = "";
let currentText12 = "";
let currentText13 = "";
let currentText14 = "";
let currentText15 = "";
let currentText16 = "";
let currentText17 = "";
let currentText18 = "";
let textIndex1 = 0;
let textIndex2 = 0;
let textIndex3 = 0;
let textIndex4 = 0;
let textIndex5 = 0;
let textIndex6 = 0;
let textIndex7 = 0;
let textIndex8 = 0;
let textIndex9 = 0;
let textIndex10 = 0;
let textIndex11 = 0;
let textIndex12 = 0;
let textIndex13 = 0;
let textIndex14 = 0;
let textIndex15 = 0;
let textIndex16 = 0;
let textIndex17 = 0;
let textIndex18 = 0;
let typingSpeed = 30000;

// let textOpt0 = "Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum. Caenantibus autem eis accepit Iesus panem et benedixit ac fregit deditque discipulis suis et ait Accipite et comedite; hoc est Corpus meum.";
// let textOpt1 = "Discipulis suis dicens accipite edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant sine videamus an veniat Helias liberans eum. Discipulis suis dicens accipite edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant sine videamus an veniat Helias liberans eum. Discipulis suis dicens accipite edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant sine videamus an veniat Helias liberans eum. Discipulis suis dicens accipite edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant sine videamus an veniat Helias liberans eum. Discipulis suis dicens accipite edite ex hoc omnes hoc est enim Corpus meum quod confringitur pro saeculi vita. Heli heli lema sabacthani. Ceteri vero dicebant sine videamus an veniat Helias liberans eum.";
// let textOpt2 = "Factum est autem in diebus illis exiit edictum a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis caro salutare dei. Genimina viperarum. Factum est autem in diebus illis exiit edictum a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis caro salutare dei. Genimina viperarum. Factum est autem in diebus illis exiit edictum a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis caro salutare dei. Genimina viperarum. Factum est autem in diebus illis exiit edictum a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis caro salutare dei. Genimina viperarum. Factum est autem in diebus illis exiit edictum a Caesare Augusto ut describeretur universus orbis. Ut profiteretur cum Maria desponsata sibi uxore praegnante. Et videbit omnis caro salutare dei. Genimina viperarum.";
// let textOpt3 = "Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat. Adveniat regnum tuum: panem nostrum cotidianum da nobis cotidie. Et depositum involvit sindone, et posuit eum in monumento exciso, in quo nondum quisquam positus fuerat.";
// let textOpt4 = "Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia deus spiritus est et ex deo natus est. Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia deus spiritus est et ex deo natus est. Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia deus spiritus est et ex deo natus est. Et cum dixisset, statim discessit al eo lepra, et mundatus est. Grex porcorum magnus pascens. Quod natum est ex carne caro est, et quod natum est ex spiritu spiritus et quod natum est ex spiritu spiritus est quia deus spiritus est et ex deo natus est.";

class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.   
    constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
    }

    // creation of a particle.
    createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
    }

    // setting the particle in motion.
    moveParticle() {
    if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
    particles.forEach(element =>{
        let dis = dist(this.x,this.y,element.x,element.y);
        if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
        }
    });
    }
}
    
// an array to add multiple particles
let particles = [];

function setup() {
    noCursor();
    frameRate(60);
    noStroke();
    snake.push(createVector(0, 0));
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    createCanvas(windowWidth, windowHeight);
    for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
    }
    // typingSpeed = millis(2500);
}

function draw () {
    scale(zoomLevel/100);

    cursorSpeed = int(dist(mouseX, mouseY, prevMouseX, prevMouseY));

    background('#0f0f0f');

    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }

    font()

    if (1 == 1) {
        let textX1 = 30;
        let textY1 = 30;
        let textY2 = 130;
        let textY3 = 230;
        let textY4 = 330;
        let textY5 = 430;
        let textY6 = 530;
        let textY7 = 630;
        let textY8 = 730;
        let textY9 = 830;
        let textY10 = 930;
        let textY11 = 1030;
        let textY12 = 1130;
        let textY13 = 1230;
        let textY14 = 1330;
        let textY15 = 1430;
        let textY16 = 1530;
        let textY17 = 1630;
        let textY18 = 1730;

        textAlign(LEFT, TOP);
        textSize(60);

        //Line 1 Text Output
        if (currentText1 !== textToType1) {
            setTimeout(function() {}, typingSpeed);
            currentText1 += textToType1.charAt(textIndex1);
            textIndex1++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText1, textX1, textY1);
        
        if (currentText2 !== textToType2) {
            setTimeout(function() {}, typingSpeed);
            currentText2 += textToType2.charAt(textIndex2);
            textIndex2++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText2, textX1, textY2);
        if (currentText3 !== textToType3) {
            setTimeout(function() {}, typingSpeed);
            currentText3 += textToType3.charAt(textIndex3);
            textIndex3++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText3, textX1, textY3);

        if (currentText4 !== textToType4) {
            setTimeout(function() {}, typingSpeed);
            currentText4 += textToType4.charAt(textIndex4);
            textIndex4++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText4, textX1, textY4);

        if (currentText5 !== textToType5) {
            setTimeout(function() {}, typingSpeed);
            currentText5 += textToType5.charAt(textIndex5);
            textIndex5++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText5, textX1, textY5);

        if (currentText6 !== textToType6) {
            setTimeout(function() {}, typingSpeed);
            currentText6 += textToType6.charAt(textIndex6);
            textIndex6++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText6, textX1, textY6);

        if (currentText7 !== textToType7) {
            setTimeout(function() {}, typingSpeed);
            currentText7 += textToType7.charAt(textIndex7);
            textIndex7++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText7, textX1, textY7);

        if (currentText8 !== textToType8) {
            setTimeout(function() {}, typingSpeed);
            currentText8 += textToType8.charAt(textIndex8);
            textIndex8++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText8, textX1, textY8);

        if (currentText9 !== textToType9) {
            setTimeout(function() {}, typingSpeed);
            currentText9 += textToType9.charAt(textIndex9);
            textIndex9++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText9, textX1, textY9);

        if (currentText10 !== textToType10) {
            setTimeout(function() {}, typingSpeed);
            currentText10 += textToType10.charAt(textIndex10);
            textIndex10++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText10, textX1, textY10);

        if (currentText11 !== textToType11) {
            setTimeout(function() {}, typingSpeed);
            currentText11 += textToType11.charAt(textIndex11);
            textIndex11++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText11, textX1, textY11);

        if (currentText12 !== textToType12) {
            setTimeout(function() {}, typingSpeed);
            currentText12 += textToType12.charAt(textIndex12);
            textIndex12++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText12, textX1, textY12);

        if (currentText13 !== textToType13) {
            setTimeout(function() {}, typingSpeed);
            currentText13 += textToType13.charAt(textIndex13);
            textIndex13++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText13, textX1, textY13);

        if (currentText14 !== textToType14) {
            setTimeout(function() {}, typingSpeed);
            currentText14 += textToType14.charAt(textIndex14);
            textIndex14++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText14, textX1, textY14);

        if (currentText15 !== textToType15) {
            setTimeout(function() {}, typingSpeed);
            currentText15 += textToType15.charAt(textIndex15);
            textIndex15++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText15, textX1, textY15);

        if (currentText16 !== textToType16) {
            setTimeout(function() {}, typingSpeed);
            currentText16 += textToType16.charAt(textIndex16);
            textIndex16++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText16, textX1, textY16);

        if (currentText17 !== textToType17) {
            setTimeout(function() {}, typingSpeed);
            currentText17 += textToType17.charAt(textIndex17);
            textIndex17++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText17, textX1, textY17);

        if (currentText18 !== textToType18) {
            setTimeout(function() {}, typingSpeed);
            currentText18 += textToType18.charAt(textIndex18);
            textIndex18++;
            // wait for typingSpeed milliseconds before typing the next character
        }
        text(currentText18, textX1, textY18);
    }

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
        snake.pop();
    }

    beginShape();
    // Draw each segment of the snake
    for (let i = 0; i < snake.length; i++) {
        let segment = snake[i];
        if (i==0 || i==1 || i==2 || i==3) {
            fill(120);
        }
        if (i==snake.length-10 || i==snake.length-9 || i==snake.length-8 || i==snake.length-7 || i==snake.length-6) {
            fill(30, 21, 200, 85);
        }
        if (i==snake.length-5) {
            fill(25, 19, 205, 80);
        }
        if (i==snake.length-4) {
            fill(20, 17, 210, 70);
        }
        if (i==snake.length-3) {
            fill(15, 17, 215, 60);
        }
        if (i==snake.length-2) {
            fill(15, 17, 220, 50);
        }
        if (i==snake.length-1) {
            fill(15, 17, 220, 40);
        }
        else {
            fill(32, 21, 179);
    }
    ellipse(segment.x, segment.y, segmentSize, segmentSize);
    fill(29, 160, 195, 75);
    ellipse(segment.x, segment.y, segmentSize/2, segmentSize/2);
    }
    endShape();

    // Check for collision with the edge of the canvas
    if (head.x < 0 || head.x > width || head.y < 0 || head.y > height) {
        console.log("edge collision");
    }

    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function mouseWheel(event) {
    // adjust the zoom level based on the mouse wheel delta
    // adjust the zoom level based on the mouse wheel delta
    zoomLevel += event.delta * 0.05;

    // constrain the zoom level between 100% and 125%
    zoomLevel = constrain(zoomLevel, 100, 125);

    // prevent the default browser behavior of scrolling the page
    return false;
}