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
	}
}