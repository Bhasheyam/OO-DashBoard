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
		var res=this.Startegy.execute1(data,columns);
		return res;
	}
}