/**
 * Created by florinbabes on 05.07.2015.
 */
var canvas = document.getElementById('roulette');
var context = canvas.getContext('2d');

var center = canvas.width / 2;

var circleR = 200;
indice = 0;
function rotate(){
    indice+=0.05;
    var triangleBaseAngle = (2 * Math.PI) / 37;
    i = 0;
    for (i = 0; i < 37; i++) {

        context.beginPath();
        context.arc(center, center, circleR, (i * triangleBaseAngle) + indice, ((i + 1) * triangleBaseAngle) + indice);

        context.lineTo(center, center);
        context.closePath();
        context.stroke();
        if (i == 0) {
            context.fillStyle = 'green';
        } else if (i % 2 == 0) {
            context.fillStyle = 'red';
        } else {
            context.fillStyle = 'black';
        }
        context.fill();
    }
}

setInterval(rotate,10);




