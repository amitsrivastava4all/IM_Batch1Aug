var shape;
function getData(){
 shape= document.getElementById("shape").value;
var noofShapes = document.getElementById("noofshapes").value;
 speed = parseInt(document.getElementById("speed").value);
var w = document.getElementById("w").value;
var h = document.getElementById("h").value;	
console.log("Shape is ",shape);	
createCanvas(w,h);	
gameLoop();	
	//drawing();
}
var x = 10;
var y = 100;
var speed = 5;
function gameLoop(){
	setInterval(drawing,50);
}


function changeDirection(){
if(x>=canvas.width){
	 speed = speed * -1;
}
else
if(x<=0){
	speed = speed * -1;
}	
}

function drawing(){
console.log("Drawing Call ",shape)	;
context.fillStyle='black';
	context.fillRect(0,0,canvas.width,canvas.height);
	
if(shape=='Rect'){
	backGround('red');	
rect();
}
else
if(shape=='Circle'){
	backGround('yellow');
circle();	
}	
move();	
changeDirection();
}

function move(){
	x+=speed;
}

