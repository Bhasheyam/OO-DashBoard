/**
 * 
 */
class ChartFactory{
	
	create(ctx,value){
		if(value=="pie"){
			
			return new Pie(ctx);
		}
		else if(value=="bar"){
			return new Bar(ctx);
		}
		else if(value=="Stacked"){
			return new Stacked(ctx);
}
		else if(value=="Line"){
			return new Line(ctx);
}
		else if(value=="Pivot"){
			return new Pivot(ctx);
}
		
	}
}