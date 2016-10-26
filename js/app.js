var pussy=[
{
clickCount:0,
name:"jetty",
id:0,
imgsrc:"img/a.jpg",
status:"newly_borned",
names:[{values:"jetty"},{values:"shetty"}]

},

{
clickCount:0,
name:"sleppy",
id:1,
imgsrc:"img/b.jpg",
status:"newly_borned",
names:[{values:"sleppy"},{values:"hollow"}]
},

{
clickCount:0,	
name:"rowdy",
id:2,
imgsrc:"img/c.jpg",
status:"newly_borned",
names:[{values:"jonty"},{values:"chonty"}]
}]




var model=function(){
 var self=this;
 var ashish;
 

 this.catsArray=ko.observableArray([]);
 
 pussy.forEach(function(pussies){

 self.catsArray().push(new Cat(pussies));  // here self because 
 //if we use this it will go into pussy context means window 
 //context whwere it is defind

  
 });

//console.log(this);

// this.cnt=ko.observable(1);
//console.log(this);

this.setcat=function(dae){// as written $parent.setcat  means it has
	//to be outside pussy context so this.setcat -->this refers to
	// right now model()


console.log(this);
self.currentCat(self.catsArray()[dae.id]);
//but now as we go inside setcat function as it was called 
//from the with:pussy context right now this will refers to pussy 
//objects so i have to use self because in self the currentcat function
//lies
//console.log(this);  //uncomment to see in which context this refers

// etermely imp note:outside this will refer to original but check inside this

}








this.currentCat=ko.observable(this.catsArray()[0]);






this.incrementCounter=function(){
	
   
// just see in which context in html function inside part is 
//excuting that is the answer
console.log(this);
// so tell me what this can be -->cat or model
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
	this.clickCount=ko.observable(data.clickCount);
	this.status=ko.observable(data.status);
	this.names=ko.observableArray(data.names);
	this.id=ko.observable(data.id);
}








ko.applyBindings(new model());
//ko.applyBindings(pussy);