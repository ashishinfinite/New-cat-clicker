var model=function(){
    this.name=ko.observable("pussy_cat");
    this.imgsrc=ko.observable("img/a.jpg");
    this.clickCount=ko.observable(0);
    // this.st=ko.observableArray(["borned","infant"])
    this.status=ko.observable("newly_borned");

   
   // this.names=ko.observable(["img/a.jpg","img/b.jpg","img/c.jpg","img/d.jpg","img/e.jpg"]);
}
this.names=ko.observableArray([{values:"ashish"},
            {values:"ddd"}]);




this.change_status=function(){
   this.status=ko.observable("bas");

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