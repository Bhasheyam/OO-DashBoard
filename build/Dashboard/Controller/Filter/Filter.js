/**
 * 
 */
let columnupdated=null;
let ChartData=null;


class Filter{
	constructor(){
		
		this.observer=new FilterSubject();// Observer Patterns
		new RowFilter(this.observer);// Attaching the Observers.
		new ColumnFilter(this.observer);// Attaching the Observers.
		//this.strategy=new FilterContent();//Startegy
		this.facade=new Query();
	}
    filtervaluepicker(value)
    {
    	var selected=[];
    	var select=document.getElementsByName(value);
    	
    	select.forEach(function(check){
    		if(check.checked)
    		
    			{
    			selected.push(check.value);
    			}
    	});
    	return selected;
    }
    filtervaluepicker1(value)
    {
    	var selected=[];
    	var select=document.getElementsByName(value);
    	
    	select.forEach(function(check){
    		if(check.checked)
    		
    			{
    			//do nothing
    			}
    		else
    			{
    			selected.push(check.value)
    			}
    	});
    	return selected;
    }
   
	Observernotify()
	{
		var a=new SingletonData();
		var dataset=a.getDataset();
		var data=this.filtervaluepicker("column");
		var state=dataset.restructure(data);
		Filter.columnupdated=state;//Maintaining the updated Data for row functions
		Filter.chartData=state;//Reference for ChartData
		this.observer.setState(state);// all observers are notified about the update
		console.log("working");
	}
	
	Rowoptions(){
		var options=this.filtervaluepicker1("Row");
		
		var new1=this.facade.rowoptions(Filter.columnupdated,options);
		Filter.chartData=new1;//Reference for ChartData
		this.observer.setState(new1);// all observers are notified about the update
	}
	Sqlrow(){
		
		var new1=this.facade.sqlQuery(Filter.columnupdated,options);
	}
}