/**
 * 
 */
class FilterSubject{
	
	constructor()
	{
		this.state=null;
		this.observers=[];
		
		
	}
	getState(){
		
		return this.state;
		
	}
	
	setState(state)
	{
		this.state=state;
		this.Notify();
		
	}
	CreateObservers(newObserver){
		this.observers.push(newObserver);
	}
	
	Notify(){
		this.observers.forEach(function(observers){
			observers.update();
		});
		
		
	}
	
	
}