/**
 * 
 */
let updateddataset=null;
class Filter{
	constructor(){
		this.observer=new FilterSubject();// Observer Patterns
		
		new RowFilter(this.observer);// Attaching the Observers.
		new ColumnFilter(this.observer);// Attaching the Observers.
		//this.strategy=new FilterContent();//Startegy
	}
    filtercolumn()
    {
    	var selected=[];
    	var select=document.getElementsByName("column");
    	
    	select.forEach(function(check){
    		if(check.checked)
    		
    			{
    			selected.push(check.value);
    			}
    	});
    	
    	return selected;
    }
    filterrow(){
    	var selected;
    	var checked=document.getElementsByName("row");
    	checked.forEach(function(check){
    		if(check.checked)
    			{
    			selected.push(check.value);
    			}
    	});
    	return selected;
    	
    }
	Observernotify()
	{
		var a=new SingletonData();
		var dataset=a.getDataset();
		var state=this.filtercolumn();
		var data=dataset.restructure(state);
		Filter.updateddatset=data;//Maintaining the updated Data for row functions
		this.observer.setState(state, data);// all observers are notified about the update
		console.log("working");
	}
	check()
	{
		console.log("working");
	}
}