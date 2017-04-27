/**
 * 
 */

let chartData=null;


class Filter{
	
	
	constructor(){
		
		this.observer=new FilterSubject();// Observer Patterns
		new RowFilter(this.observer);// Attaching the Observers.
		new ColumnFilter(this.observer);// Attaching the Observers.
		this.startegy=new FilterContext();//Startegy
		this.facade=new Query();
	}
	
	
	//Observer Main()
	Observernotify()
	{
		var a=new SingletonData();
		var dataset=a.getDataset();
		var data=this.filtervaluepicker("column");
		var state=dataset.restructure(data);
		Filter.chartData=state;//Reference for ChartData
		var dropit=state.listColumns();
		this.optioncolumns(dropit);
		this.observer.setState(state);// all observers are notified about the update
		console.log("working");
		
	}
	
	
	//Facede  Main() Row elimination
	Rowoptions(){
		var options=this.filtervaluepicker1("Row");
		
		var new1=this.facade.rowoptions(Filter.chartData,options);
		Filter.chartData=new1;//Reference for ChartData
		this.observer.setState(new1);// all observers are notified about the update
		var dropit=new1.listColumns();
		this.optioncolumns(dropit);//used to update the Sql Drop down
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
		this.optioncolumns(dropit);//used to update the Sql Drop down
	}
	
	
	
	//Startegy Stats 
	stat(){
		
		var temp=this.startegy;
		var options=this.filtervaluepicker("stat");
		var columns=Filter.chartData.listColumns();
		var stattable="<table><th>Stats</th>";
		columns.forEach(function(col){
			stattable +="<th>"+col+"</th>";
		})
		
		options.forEach(function(value){
			if(value=="Average"){
				temp.context(new Average());
				stattable +=temp.Calculate(Filter.chartData,columns);
				
				
			}
			else if(value=="Max")
				{
				temp.context(new Max());
				stattable +=temp.Calculate(Filter.chartData,columns);
				
				}
			else if(value=="Min")
			{
				temp.context(new Min());
				stattable +=temp.Calculate(Filter.chartData,columns);
			}
			else if(value=="Standard")
			{
				temp.context(new Standard());
				stattable +=temp.Calculate(Filter.chartData,columns);
			}
			else if(value=="Mean")
			{
				temp.context(new Mean());
				stattable +=temp.Calculate(Filter.chartData,columns);
			}
			else
				{
				stattable= " ";
				}
		})
		stattable +="</table>";
		if(stattable =="</table>")
			{
			stattable= " ";
			}
			
		return stattable;
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
    
    
    
    
  //used to create SQL drop Down
    optioncolumns(data)
    {
 	   var drop=document.getElementById("options")
 	   while(drop.firstChild) 
          {
	         drop.removeChild(drop.firstChild);
          }
 	   data.forEach(function(col){
 		   var z = document.createElement("option");
 		    z.setAttribute("value", col);
 		    var t = document.createTextNode(col);
 		    z.appendChild(t);
 		    drop.appendChild(z);
 	   })
 	   
    }
}