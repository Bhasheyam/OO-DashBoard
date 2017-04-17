'use strict' 
class try1{
	constructor(){
	
	}
 
	load()
	{
		d3.csv("set1.csv",function(data1){
			console.log(data1);
			
		});
		this.notify1("hello");	
	}
 notify1(sample){
	 console.log(sample);
 }
}