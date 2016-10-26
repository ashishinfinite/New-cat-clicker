var model=function(){
 
 this.currentCat=ko.observable(new Cat({
name:"pussy_cat",
imgsrc:"img/a.jpg",
status:"newly_borned",
names:[{values:"ashish"},{values:"ddd"}]


 }));



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
   
}

var Cat=function(data){

	this.name=ko.observable(data.name);
	this.imgsrc=ko.observable(data.imgsrc);
	this.clickCount=ko.observable(0);
	this.status=ko.observable(data.status);
	this.names=ko.observableArray(data.names);
}
// this.name=ko.observable("pussy_cat");
// 	this.imgsrc=ko.observable("img/a.jpg");
// 	this.clickCount=ko.observable(0);
// 	this.status=ko.observable("newly_borned");
// 	this.names=ko.observableArray([{values:"ashish"},
//             {values:"ddd"}]);







ko.applyBindings(new model());