/**
 * 
 */
class FilterObserver{
	constructor(Subject){
		this.subject=Subject;
		this.subject.CreateObservers(this);
	}
	
	update()
	{
		
	}
	
	
}