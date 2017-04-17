/**
 * 
 */
class ChartFactory{
	
	create(value){
		if(value=="pie"){
			
			return new Pie();
			
		}
		else if(value=="bar"){
			console.log("came");
			return new Bar();
		}
		else if(value=="Stacked"){
			return new Stacked();
}
		else if(value=="State"){
			return new State();
}
		else if(value=="Network"){
			return new Network();
}
		else if(value=="Directed"){
			return new Directed();
}
		
	}
}