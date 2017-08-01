var shape;
function getData(){
 shape= document.getElementById("shape").value;
var noofShapes = document.getElementById("noofshapes").value;
var speed = document.getElementById("speed").value;
var w = document.getElementById("w").value;
var h = document.getElementById("h").value;	
console.log("Shape is ",shape);	
createCanvas(w,h);	
gameLoop();	
	//drawing();
}
var x = 10;
var y = 100;
const speed = 5;
function gameLoop(){
	setInterval(drawing,50);
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
}

function move(){
	x+=speed;
}

function circle(){
	context.beginPath();
	//context.arc(x,y,radius,degree,,true);
	context.arc(x,y,50,0,Math.PI*2,true); 
	context.fill();
	
}

function backGround(color){
	context.fillStyle=color;
}

function rect(){
	
	context.fillRect(x,y,50,50);
}

var context ;
var canvas ;
function createCanvas(w,h){
	 canvas = document.createElement("canvas");
	canvas.height = h;
	canvas.width = w;
	context = canvas.getContext("2d");
	context.fillStyle='black';
	context.fillRect(0,0,canvas.width,canvas.height);
	document.body.appendChild(canvas);

}