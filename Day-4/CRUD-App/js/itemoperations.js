var itemOperations = {
	id:1000,
	itemList:[],
	addNewItem:function(name,descr,price,deldate,  color,url){
		var itemObject = new Item(this.id, name,descr, price, deldate,url,color);
		this.itemList.push(itemObject);
		this.id++;
	},
	getId:function(){
		return this.id;
	},
	getLastAdded:function(){
		return this.itemList[this.itemList.length-1];
	},
	searchById:function(id){
		return this.itemList.filter((itemObject)=>itemObject.id==id)[0];
		//return subArray[0];
	},
	markRecord:function(id){
		var itemObject = this.searchById(id);
		itemObject.isMarked  = !itemObject.isMarked;
	},
	delete:function(){
		return this.itemList = this.itemList.filter(function(itemObject){
			return itemObject.isMarked == false;
		});
	},
	countMark:function(){
		return this.itemList.filter(function(itemObject){
			return itemObject.isMarked;
		}).length;
	},
	sortByPrice:function(){
		return this.itemList.sort((one,two)=>one.price-two.price);
	}
}