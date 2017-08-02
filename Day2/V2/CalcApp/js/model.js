/*function add(x,y){
	return parseInt(x) + parseInt(y);
}
function subtract(x,y){
	return x- y;
}
function multiply(x,y){
	return x*y;
}
function divide(x,y){
	return x/y;
}*/

/*var calcObject = {
 add:function(x,y){
	return parseInt(x) + parseInt(y);
},
subtract:function (x,y){
	return x- y;
},
multiply:function (x,y){
	return x*y;
},
divide:function (x,y){
	return x/y;
}
}*/
function compute(firstNo, secondNo,opr){
var expression = firstNo + opr + secondNo;
	return eval(expression);
}