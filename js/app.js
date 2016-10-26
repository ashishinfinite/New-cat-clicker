var model=function(){
 
 this.currentCat=ko.observable(new Cat());
 
this.incrementCounter=function(){

	 this.currentCat().clickCount(this.currentCat().clickCount()+1);
	 if (this.currentCat().clickCount()>5){
	 	this.currentCat().status("Now became infant");
	 }

	  if (this.currentCat().clickCount()>10){
	 	this.currentCat().status("Now became Child");
	 }

	  if (this.currentCat().clickCount()>15){
	 	this.currentCat().status("Now became Adult");
	 }
	 
    
}
   
}

var Cat=function(){

	this.name=ko.observable("pussy_cat");
	this.imgsrc=ko.observable("img/a.jpg");
	this.clickCount=ko.observable(0);
	this.status=ko.observable("newly_borned");
	this.names=ko.observableArray([{values:"ashish"},
            {values:"ddd"}]);
}






ko.applyBindings(new model());