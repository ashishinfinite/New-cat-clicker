var model=function(){
 
 this.currentCat=ko.observable(new Cat());
   
}

var Cat=function(){

	this.name=ko.observable("pussy_cat");
	this.imgsrc=ko.observable("img/a.jpg");
	this.clickCount=ko.observable(0);
	this.status=ko.observable("newly_borned");
	this.names=ko.observableArray([{values:"ashish"},
            {values:"ddd"}]);
}





this.incrementCounter=function(){

	 this.clickCount(this.clickCount()+1);
	 if (this.clickCount()>5){
	 	this.status("Now became infant");
	 }

	  if (this.clickCount()>10){
	 	this.status("Now became Child");
	 }

	  if (this.clickCount()>15){
	 	this.status("Now became Adult");
	 }
	 
    
}

ko.applyBindings(new model());