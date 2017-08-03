window.addEventListener("load",init);
function init(){
	bindEvents();
	loadId();
	showRecordCount();
}
function bindEvents(){
	document.getElementById("add").addEventListener("click",addNewItem);
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
	printRecord();
	showRecordCount();
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
	var currentRow = event.srcElement.parentNode.parentNode;
	currentRow.classList.toggle('red');
	//alert("Mark For Delete Call");
}

function edit(){
	alert("Edit Call");
}

function printRecord(){
	var cellIndex = 0;
	var tbody = document.getElementById("items");
	var tr = tbody.insertRow();
	var itemObject = itemOperations.getLastAdded();
	//tr.insertCell(0).innerHTML = itemObject.id;
	for(let key in itemObject){
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