/**
 * 
 */

let chartData=null;


class Filter{
	
	
	constructor(){
		
		this.observer=new FilterSubject();// Observer Patterns
		new RowFilter(this.observer);// Attaching the Observers.
		new ColumnFilter(this.observer);// Attaching the Observers.
		new yaxis(this.observer);// Attaching the Observers.
		new xaxis(this.observer);// Attaching the Observers.
		new Sqloptions(this.observer);// Attaching the Observers.

		this.facade=new RowFilterContext();
	}
	
	
	//Observer Main()
	Observernotify()
	{
		var a=new SingletonData();
		var dataset=a.getDataset();
		var data=this.filtervaluepicker("column");
		var state=dataset.restructure(data);
		Filter.chartData=state;//Reference for ChartData
		this.observer.setState(state);// all observers are notified about the update
		
		
	}
	
	
	//Facede  Main() Row elimination
	Rowoptions(){
		var options=this.filtervaluepicker1("Row");
		
		var new1=this.facade.rowoptions(Filter.chartData,options);
		Filter.chartData=new1;//Reference for ChartData
		this.observer.setState(new1);// all observers are notified about the update
		
	}
	
	
	
	//Facade Main() SQL Query
	Sqlrow(){
		var value=[];
		var number=document.getElementById("sqlvalue").value;
		var col=document.getElementById("options");
		console.log(col.selectedIndex);
		var column=col.options[col.selectedIndex].text;
		value.push(column);
		value.push(number);
		var new1=this.facade.sqlQuery(Filter.chartData,value);
		Filter.chartData=new1;//Reference for ChartData
		this.observer.setState(new1);// all observers are notified about the update
		var dropit=new1.listColumns();//used to get cloumns of the updated
		document.getElementById("sqlvalue").value=" ";
	}
	
	
	
	//used to pick values from the column checkboxs.
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
    
  //used to pick values from the Row checkboxs.
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
    
    
    
    finished(){
    	
    	var chart=new ChartCreator(Filter.chartData)
    	return chart;
    }
    	    
    
    
    
}