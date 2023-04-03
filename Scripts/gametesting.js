var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let xCor = [];
let yCor = [];

function setup() {
    createCanvas(720, 400);
    noStroke();
    frameRate(60);
    ellipseMode(RADIUS);
    // Set the starting position of the shape
    xpos = width / 2;
    ypos = height / 2;

    for (let i = 0; i < numSegments; i++) {
        xCor.push(xStart + i * diff);
        yCor.push(yStart);
      }
  }

// initialize the mouse's position
document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  });

// initialize the snake's position and size
var snakeX = 500;
var snakeY = 500;
var snakeSize = 30;

// set the speed of the snake
var speed = 10;

// set the initial direction of the snake
var directionX = 0;
var directionY = 0;

// move the snake towards the mouse
function moveSnake() {
	// calculate the distance between the snake and the mouse
	var distanceX = mouseX - snakeX;
	var distanceY = mouseY - snakeY;
	
	// calculate the angle between the snake and the mouse
	var angle = Math.atan2(distanceY, distanceX);
	
	// calculate the new direction of the snake
	directionX = Math.cos(angle);
	directionY = Math.sin(angle);
	
	// move the snake
	snakeX += directionX * speed;
	snakeY += directionY * speed;
}

// function mousePhysics (t, n, r) {
//     "use strict";
//     var e = function() {
//         function t(t, n) {
//             var r = []
//               , e = !0
//               , o = !1
//               , i = void 0;
//             try {
//                 for (var u, a = t[Symbol.iterator](); !(e = (u = a.next()).done) && (r.push(u.value),
//                 !n || r.length !== n); e = !0)
//                     ;
//             } catch (t) {
//                 o = !0,
//                 i = t
//             } finally {
//                 try {
//                     !e && a.return && a.return()
//                 } finally {
//                     if (o)
//                         throw i
//                 }
//             }
//             return r
//         }
//         return function(n, r) {
//             if (Array.isArray(n))
//                 return n;
//             if (Symbol.iterator in Object(n))
//                 return t(n, r);
//             throw new TypeError("Invalid attempt to destructure non-iterable instance")
//         }
//     }()
//       , o = r(12)
//       , i = r(42)
//       , u = r(20)
//       , a = r(21)
//       , c = function(t) {
//         var n = t.el
//           , r = t.movementRange
//           , e = t.orientationRange;
//         this.$el = o(n),
//         this.movementRange = r,
//         this.orientationRange = e,
//         this.initialize()
//     };
//     c.prototype = {
//         transitionToAnimation: !0,
//         isAnimating: !1,
//         getMouseTransform: function(t, n) {
//             var r = e(t, 2)
//               , o = r[0]
//               , u = r[1]
//               , a = o / window.innerWidth
//               , c = u / window.innerHeight
//               , s = (a + c) / 2
//               , f = i(s, 0, 1, 50 - this.movementRange / 2, 50 + this.movementRange / 2);
//             return n % 2 === 0 ? f - 100 : -f
//         },
//         // getGammaTransform: function(t, n) {
//         //     var r = i(t, 0, 360, 50 - this.orientationRange / 2, 50 + this.orientationRange / 2);
//         //     return n % 2 === 0 ? r - 100 : -r
//         // },
//         // setMarqueePositionGamma: function(t) {
//         //     var n = this;
//         //     this.$el.forEach(function(r, e) {
//         //         var o = n.getGammaTransform(t, e);
//         //         r.style.transform = "translateX(" + o + "%)"
//         //     })
//         // },
//         // setMarqueePositionMouse: function(t) {
//         //     var n = this
//         //       , r = e(t, 2)
//         //       , o = r[0]
//         //       , i = r[1];
//         //     this.$el.forEach(function(t, r) {
//         //         var e = n.getMouseTransform([o, i], r);
//         //         t.style.transform = "translateX(" + e + "%)"
//         //     })
//         // },
//         requestUpdate: function(t, n) {
//             var r = this;
//             this.isAnimating || (this.isAnimating = !0,
//             this.transitionToAnimation && this.removeInitialTransition(),
//             a(function() {
//                 t ? r.setMarqueePositionGamma(n.gamma) : r.setMarqueePositionMouse([n.pageX, n.pageY]),
//                 r.isAnimating = !1
//             }))
//         },
//         // addIntialTransition: function() {
//         //     this.$el.forEach(function(t) {
//         //         t.style.transition = "all 100ms ease"
//         //     })
//         // },
//         // removeInitialTransition: function() {
//         //     var t = this;
//         //     setTimeout(function() {
//         //         t.$el.forEach(function(t) {
//         //             t.style.transition = ""
//         //         })
//         //     }, 200),
//         //     this.transitionToAnimation = !1
//         // },
//         initialize: function() {
//             this.addIntialTransition(),
//             u ? window.on("deviceorientation", this.requestUpdate.bind(this, !0)) : window.on("mousemove", this.requestUpdate.bind(this, !1))
//         }
//     },
//     t.exports = c
// }

function checkGameStatus() {
    if (
      xCor[xCor.length - 1] > width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > height ||
      yCor[yCor.length - 1] < 0 ||
      checkSnakeCollision()
    ) {
      noLoop();
      const scoreVal = parseInt(scoreElem.html().substring(8));
      prompt('Game ended! Your score was : ' + scoreVal);
    }
  }

function checkSnakeCollision() {
    const snakeHeadX = xCor[xCor.length - 1];
    const snakeHeadY = yCor[yCor.length - 1];
    for (let i = 0; i < xCor.length - 1; i++) {
        if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
        return true;
        }
    }
}
    

// draw the snake and the mouse
function draw() {
	// draw the snake
	// ctx.fillStyle = "blue";
	// ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
	
    console.log("Mouse position:", mouseX, mouseY);

	// draw the mouse
	ctx.fillStyle = "red";
	ctx.fillRect(mouseX, mouseY, snakeSize, snakeSize);
    ellipse(mouseX, mouseY, snakeSize, snakeSize);
	
	// move the snake
	moveSnake();
	
	// request the next frame
	requestAnimationFrame(draw);

    checkGameStatus();

    // mousePhysics();
}

// start the game
requestAnimationFrame(draw);