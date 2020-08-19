var canvas = document.getElementById("canvas");
document.addEventListener('keydown',changeOffset);
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
var x = radius;
var y = 600;
var carXoffset = 60;
var carYoffset = 0;
var farge;
var value = false;
var enemyY = 100;
var file;
setInterval(draw(),1000);

// Small thing for girlfriend ik SIMP
var synne = prompt('Er du synne?');

if(synne == 'ja') {
    farge = '#FFC0CB';
}else{farge = '#000000'}
//Small thing done


function draw() {
    //Draw function
    ctx.clearRect(0,0,10000,10000);
    enemyCar();
    drawLine();
    playerCar();
    window.requestAnimationFrame(draw);
    
}

function drawLine() {
    //Draws lines and rects in middle and changes positioning to look like moving
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
    //draws the player car based of position from the changeOffset function and color based on small thing from girlfriend
    ctx.beginPath();
    ctx.rect(x+carXoffset,y+carYoffset,100,200);
    ctx.fillStyle = farge;
    ctx.fill();
}

function enemyCar(){
    ifEnemySpawned();
    console.log(file);
    var lanes = [-140,+60];
    var enemyX = radius + lanes[file];
    ctx.beginPath();
    ctx.rect(enemyX,enemyY,100,200);
    ctx.fill();
    ifEnemyBottom(enemyY);
}

function changeOffset(e){
    //Changes positioning of car
    //console.log(e.code);
    switch(e.code){
        case('ArrowLeft'):
        //if car is at line left
            if(carXoffset>=-195){
                carXoffset -= 7;
                break;
            }else{break;}
        case('ArrowRight'):
        //if car is at line right
            if(carXoffset<=95){
                carXoffset += 7;
                break;
            }else{break;}
        case('ArrowUp'):
        //if car is at the top
            if(carYoffset>=-550){
                carYoffset -= 7;
                break;
            }else{break;}
        case('ArrowDown'):
        //if car is at the bottom
            if(carYoffset<=canvas.height / 2 -400){
                carYoffset+=7;
                break;
            }else{break;}
    }
}

function ifEnemySpawned() {
    if (!value) {
        value = true;
        file = randomFile();
    }
}

function randomFile(){
    return Math.round(Math.random());
}

function ifEnemyBottom(enemyY) {
    value = enemyY < y + carYoffset ? true : false;
}
