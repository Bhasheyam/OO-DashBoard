/**
 * 
 */
class FilterSubject{
	
	constructor()
	{
		this.state=null;
		this.observers=[];
		this.dataset=null;
		
	}
	getState(){
		
		return this.state;
		
	}
	getDataset(){
		
		return this.dataset;
	}
	setState(state, dataset)
	{
		this.state=state;
		this.dataset=dataset;
		this.Notify();
		console.log("data called");
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