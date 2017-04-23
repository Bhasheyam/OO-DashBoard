/**
 * 
 */
class ChartFactory{
	
	create(ctx,value){
		if(value=="pie"){
			
			return new Pie();
		}
		else if(value=="bar"){
			return new Bar();
		}
		else if(value=="Stacked"){
			return new Stacked();
}
		else if(value=="Doughnut"){
			return new Doughnut();
}
		else if(value=="Bubble"){
			return new Bubble();
}
		else if(value=="Line"){
			return new Line();
}
		else if(value=="Radar"){
			return new Radar();
}
	}
}