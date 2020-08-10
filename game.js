
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
var x = radius;
setInterval(draw(),1000);


function draw() {
    ctx.clearRect(0,0,10000,10000);
    //enemyCar();
    drawLine(ctx,radius);
    playerCar(ctx, x);
    window.requestAnimationFrame(draw);
    
}

function drawLine(ctx,radius) {
    var time = new Date();
    for(var i=-1000+time.getMilliseconds(); i <= 2000; i += 200) {
        ctx.beginPath();
        ctx.rect(radius,i,12,50);
        ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(radius-200,-1000);
    ctx.lineTo(radius-200,2000);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(radius+200,-1000);
    ctx.lineTo(radius+200,2000);
    ctx.stroke();
    
}

function playerCar(ctx, x) {
    ctx.beginPath();
    ctx.rect(x+60,600,100,200);
    ctx.stroke();
}