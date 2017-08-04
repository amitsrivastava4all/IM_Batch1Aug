window.addEventListener("load",init);
function init(){
	bindEvents();
	loadId();
	showRecordCount();
	setFocus();
}

var setFocus = ()=>document.getElementById("name").focus();

function clearFields(){
	var fields = document.getElementsByClassName("clearfield");
	Array.prototype.forEach.call(fields,(field)=>field.value='');
	setFocus();
}

function bindEvents(){
	document.getElementById("add").addEventListener("click",addNewItem);
	document.getElementById("delete").addEventListener("click",deleteItems);
	document.getElementById("sort").addEventListener("click",sortByPrice);
	document.getElementById("save").addEventListener("click",saveRecords);
	document.getElementById("load").addEventListener("click",loadRecords);
}

function loadRecords(){
	if(localStorage){
		if(localStorage.items){
			itemOperations.itemList = JSON.parse(localStorage.items);
			printTable(itemOperations.itemList);
		}
		else{
			alert("No Data Found...");
		}
	}
	else{
		alert("Ur browser Not Support Local Storage ...");
	}
}

function saveRecords(){
	if(localStorage){
		var json = JSON.stringify(itemOperations.itemList);
		localStorage.items = json;
		alert("Data Store in Local Storage...");
	}
	else{
		alert("Ur browser Not Support Local Storage ...");
	}
}



const sortByPrice=()=>printTable(itemOperations.sortByPrice());

function deleteItems(){
	var itemList = itemOperations.delete();
	printTable(itemList);
	showRecordCount();
}

function printTable(itemList){
	document.getElementById("items").innerHTML="";
	itemList.forEach((itemObject)=>printRecord(itemObject));
}

function loadId(){
	document.getElementById("itemid").innerHTML = itemOperations.getId();
}

function showRecordCount(){
	document.getElementById("total").innerHTML= itemOperations.itemList.length;
}

function addNewItem(){
	var itemName = document.getElementById("name").value;
	var itemDesc = document.getElementById("descr").value;
	var itemPrice = document.getElementById("price").value;
	var itemColor = document.getElementById("color").value;
	var itemDelDate = document.getElementById("deldate").value;
	var url  = document.getElementById("url").value;
	itemOperations.addNewItem(itemName,itemDesc,itemPrice,itemDelDate,itemColor,url);
	var itemObject = itemOperations.getLastAdded();
	printRecord(itemObject);
	showRecordCount();
	clearFields();
	loadId();
}

function createIcon(imageUrl,fn,id){
	var imgIcon = document.createElement("img");
	imgIcon.src = imageUrl;
	imgIcon.addEventListener("click",fn);
	imgIcon.classList.add("icon");
	imgIcon.setAttribute("data-itemno",id);
	return imgIcon;
}

function markForDelete(event){
	var id = event.srcElement.getAttribute("data-itemno");
	var currentRow = event.srcElement.parentNode.parentNode;
	currentRow.classList.toggle('red');
	itemOperations.markRecord(id);
	document.getElementById("marktotal").innerHTML = itemOperations.countMark();
	//alert("Mark For Delete Call");
}

function edit(){
	alert("Edit Call");
}

function printRecord(itemObject){
	var cellIndex = 0;
	var tbody = document.getElementById("items");
	var tr = tbody.insertRow();
	
	//tr.insertCell(0).innerHTML = itemObject.id;
	for(let key in itemObject){
		if(key=='isMarked'){
			continue;
		}
		if(key==URL){
			//tr.insertCell(cellIndex).innerHTML = "<img src='"+itemObject[key]+"'>";
			tr.insertCell(cellIndex).innerHTML = `<img src='${itemObject[key]}'>`;
		}
		else
		if(key==COLOR){
			//tr.insertCell(cellIndex).innerHTML ="<div class='shape' style='background-color:"+itemObject[key]+"'></div>";
			tr.insertCell(cellIndex).innerHTML =`<div class='shape' style='background-color:${itemObject[key]}'></div>`;
		}
		else{
		tr.insertCell(cellIndex).innerHTML = itemObject[key];	
		}
		cellIndex++;
	}
	var td = tr.insertCell(cellIndex);
	td.appendChild(createIcon(DELETE_ICON,markForDelete,itemObject.id));
	td.appendChild(createIcon(EDIT_ICON,edit,itemObject.id));
	
}