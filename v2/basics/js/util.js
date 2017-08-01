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