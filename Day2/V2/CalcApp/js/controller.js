window.addEventListener("load",init);
function init(){
//document.getElementById("add").addEventListener("click",doOperation);
	var buttons = document.getElementsByClassName("opr");
	console.log("Buttons ",buttons.length);
	Array.prototype.forEach.call(buttons,function(currentBt){
		currentBt.addEventListener("click",doOperation);
		
});
	
	/*for(var i = 0 ; i<buttons.length;i++){
		buttons[i].addEventListener("click",doOperation);
	}*/
}

function doOperation(event){
	var result = 0;
	//console.log(event.srcElement);
	var firstNo = document.getElementById("firstNo").value;
	var secondNo = document.getElementById("secondNo").value;
	//var opr = event.srcElement.getAttribute("data-operation");
	var opr = event.srcElement.innerHTML ;
	result = compute(firstNo,secondNo,opr);
	//result = calcObject[opr](firstNo,secondNo);
	/*if(opr =="add"){
		result = add(firstNo,secondNo);
	}
	else
	if(opr =="subtract"){
		result = subtract(firstNo,secondNo);
	}
	else
	if(opr =="multiply"){
		result = multiply(firstNo,secondNo);
	}
	else
	if(opr =="divide"){
		result = divide(firstNo,secondNo);
	}*/
	document.getElementById("result").innerHTML = result;
}