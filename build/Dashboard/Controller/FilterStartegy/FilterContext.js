/**
 * 
 */
class FilterContext{
	constructor(){
		this.Startegy=null;
	}
	context(Startegy){
		this.Startegy=Startegy;
		
	}
	Calculate(data,columns){
		this.Startegy.execute(data,columns)
	}
}