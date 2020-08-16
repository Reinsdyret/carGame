var canvas = document.getElementById("canvas");
document.addEventListener('keydown',changeOffset);
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
var x = radius;
var carXoffset = 60;
var carYoffset = 0;
var farge;
setInterval(draw(),1000);

var synne = prompt('Er du synne?');

if(synne == 'ja') {
    farge = '#FFC0CB';
}else{farge = '#000000'}


function draw() {
    ctx.clearRect(0,0,10000,10000);
    //enemyCar();
    drawLine();
    playerCar();
    window.requestAnimationFrame(draw);
    console.log(carYoffset);
    
}

function drawLine() {
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

function playerCar() {
    ctx.beginPath();
    ctx.rect(x+carXoffset,600+carYoffset,100,200);
    ctx.fillStyle = farge;
    ctx.fill();
}

function changeOffset(e){
    console.log(e.code);
    switch(e.code){
        case('ArrowLeft'):
            if(carXoffset>=-195){
                carXoffset -= 7;
                break;
            }else{break;}
        case('ArrowRight'):
            if(carXoffset<=95){
                carXoffset += 7;
                break;
            }else{break;}
        case('ArrowUp'):
            if(carYoffset>=-550){
                carYoffset -= 7;
                break;
            }else{break;}
        case('ArrowDown'):
            if(carYoffset<=550){
                carYoffset+=7;
                break;
            }else{break;}
    }
}