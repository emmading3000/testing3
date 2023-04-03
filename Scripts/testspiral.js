var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var gap = 2;
var steps = 60;
var increment = 2 * Math.PI / steps;
var start = null;
function update(timeStamp) {
    if (!start) {
        start = timeStamp;
    }
    var progress = Math.min((timeStamp - start) / 4000, 1);
    var theta = increment;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(centerX,centerY);
    while (theta < progress * 20 * Math.PI) {
        var newX = centerX + theta * Math.cos(theta) * gap;
        var newY = centerY + theta * Math.sin(theta) * gap;
        ctx.lineTo(newX,newY);
        theta = theta + increment;
    }
    ctx.stroke();
    if (progress < 1) {
        requestAnimationFrame(update);
    }
}
requestAnimationFrame(update);