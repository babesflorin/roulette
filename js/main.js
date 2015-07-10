/**
 * Created by florinbabes on 05.07.2015.
 */
var canvas = document.getElementById('roulette');
var context = canvas.getContext('2d');

var center = canvas.width / 2;

var circleR = 200;
indice = 0;
time = 40;
rotateAngle = 0.02;
ballAngle = 0;
indiceRotateBall = 0.05;
stopTo = 0;
stopped = true;
var triangleBaseAngle = (2 * Math.PI) / 37;
function rotate() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (rotateAngle > 0.02) {
        rotateAngle -= 0.0001;
    }
    indice += rotateAngle;
    if (indiceRotateBall > 0.05) {
        indiceRotateBall -= 0.001;
    }

    i = 0;
    $angles = [];
    for (i = 0; i < 37; i++) {

        context.beginPath();
        var startAngle = ((i * triangleBaseAngle) + indice) - triangleBaseAngle / 2;
        var endAngle = (((i + 1) * triangleBaseAngle) + indice) - triangleBaseAngle / 2;
        $angles.push({start: startAngle, end: endAngle});
        context.arc(center, center, circleR, startAngle, endAngle);
        context.lineTo(center, center);
        context.translate(0, 0);
        context.closePath();

        if (i == 0) {
            context.fillStyle = 'green';
        } else if (i % 2 == 0) {
            context.fillStyle = 'black';
        } else {
            context.fillStyle = 'red';
        }
        context.fill();
    }
    
    context.beginPath();
    context.arc(center, center, 160, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
    drawBall();
    requestAnimationFrame(rotate);
}
requestAnimationFrame(rotate)

function drawBall() {
    if ((indiceRotateBall <= 0.05 && ((indiceRotateBall % (Math.PI * 2)) >= ($angles[stopTo].start % (Math.PI * 2)) && (indiceRotateBall % (Math.PI * 2)) <= ($angles[stopTo].end % (Math.PI * 2))) ) || stopped) {
        ballAngle = - ($angles[stopTo].start + triangleBaseAngle / 3);
        stopped = true;
    } else {
        ballAngle += indiceRotateBall;
    }
    x = center + Math.cos(-ballAngle) * 149;
    y = center + Math.sin(-ballAngle) * 149;
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
}

