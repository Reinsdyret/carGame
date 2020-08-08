
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(1000, draw());


function draw() {
    //enemyCar();
    drawLine(ctx,radius);
    playerCar(ctx, radius);
    
}

function drawLine(ctx,radius) {
    for(var i=-1000; i <= 1200; i += 40) {
        ctx.beginPath();
        ctx.rect(radius,i,10,20);
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(radius-200,-1000);
    ctx.lineTo(radius-200,1000);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(radius+200,-1000);
    ctx.lineTo(radius+200,1000);
    ctx.stroke();
    
}

function playerCar(ctx, radius) {
    ctx.beginPath();
    ctx.rect(radius+60,200,100,200);
    ctx.stroke();
}