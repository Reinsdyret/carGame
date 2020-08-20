var canvas = document.getElementById("canvas");
document.addEventListener('keydown',changeOffset);
canvas.width = 1000;
canvas.height= 1000;
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
var x = radius;
var carY = 600;
var carX = x + 60;
var value = false;
var enemyX;
var enemyY = 100;
var file = 1;
setInterval(draw(),10);

function draw() {
    //Draw function
    ctx.clearRect(0,0,10000,10000);
    enemyCar();
    drawLine();
    playerCar();
    //checkCollision();
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
    ctx.rect(carX,carY,100,200);
    ctx.fillStyle = '#00FF00';
    ctx.fill();
}

function enemyCar(){
    var lanes = [-160,+60];
    enemyX = radius + lanes[file];
    ctx.beginPath();
    ctx.rect(enemyX,enemyY,100,200);
    ctx.fillStyle = '#000000';
    ctx.fill();
    if(enemyY == 1000){
        enemyY = 0;
        file = randomFile();
    }else{
        enemyY+=2.5;
    }
}

function changeOffset(e){
    //Changes positioning of car
    //console.log(e.code);
    switch(e.code){
        case('ArrowLeft'):
        //if car is at line left
            if(carX>=-121){
                carX = 500 - 160;
                break;
            }else{break;}
        case('ArrowRight'):
        //if car is at line right
            if(carX<=x+60){
                carX = 500 + 60;
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

/*function checkCollision(){
    if(enemyX == carX && enemyY  <= carY + 200 && enemyY+190 >= carY+200 ){
        prompt('u ded');
    }
}*/
