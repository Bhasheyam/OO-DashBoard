/**
 * 
 */
class ChartCreator{
	constructor(data){
		this.chartdata=data;
		this.startegy=new FilterContext();//Startegy
		this.factory=new ChartFactory();//ChartFacotry
	}
//create chat
	create(value)
	{ 
		if(value=="Line")
			{
			var dataset=this.chartdata;
			var self=this;
			var Labels=[];
			var data=[];
			var id=this.divcreator();
			var ctx=document.getElementById(id);
			ctx.style.height = "400px";
			ctx.style.width = "400px";
			var chartplot=this.factory.create(ctx,value);
			var valuesx=this.filtervaluepicker("x");
			var valuesy=this.filtervaluepicker("y");
			if(valuesx.length>1)
			{
			alert("Two label cannot be used");
			return null;
			}
			valuesx.forEach(function(dataselected){
				var rowu=dataset.unique(dataselected);
				var arr=rowu.toArray();
				arr.forEach(function(row){
					row.forEach(function(data){
					Labels.push(data);
					
					});	
				});
				});
			valuesy.forEach(function(set){
				var tempdata=[];
				var Background=[];
				var Bordercolor=[];
				Labels.forEach(function(label){
					var temp=dataset.filter(row => row.get(valuesx[0]) === label);
					var tempvalue=temp.stat.sum(set);
					tempdata.push(tempvalue);
				});
				Background=self.calculatecolor(Labels);
				var tempset={
						label: 'line',
			            data: tempdata,//Data is passed here
			            fill: false,
			            lineTension: 0.2,
			            backgroundColor: "rgba(75,192,192,0.4)",
			            borderColor: Background[0],
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: Background[0],
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(75,192,192,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            spanGaps: false
				    }
				data.push(tempset);
			})
			
			var statdata=dataset.restructure(valuesy);
				var tab=this.stat(statdata);
				chartplot.chart(data,Labels);
				 document.body.appendChild(tab);
			return null;
			
			}

		else{
		var dataset=this.chartdata;
			var self=this;
			var Labels=[];
			var data=[];
			var id=this.divcreator();
			var ctx=document.getElementById(id);
			ctx.style.height = "400px";
			ctx.style.width = "400px";
			var chartplot=this.factory.create(ctx,value);
			var valuesx=this.filtervaluepicker("x");
			var valuesy=this.filtervaluepicker("y");
			if(valuesx.length>1)
			{
			alert("Two label cannot be used");
			return null;
			}
			valuesx.forEach(function(dataselected){
				var rowu=dataset.unique(dataselected);
				var arr=rowu.toArray();
				arr.forEach(function(row){
					row.forEach(function(data){
					Labels.push(data);
						console.log("came working labels");
					});	
				});
				});
			valuesy.forEach(function(set){
				var tempdata=[];
				var Background=[];
				var Bordercolor=[];
				Labels.forEach(function(label){
					var temp=dataset.filter(row => row.get(valuesx[0]) === label);
					var tempvalue=temp.stat.sum(set);
					tempdata.push(tempvalue);
				});
				Background=self.calculatecolor(Labels);
				Bordercolor=self.calculatecolor(Labels);
				var tempset={
				        label: "Pivot Chart",
				        data: tempdata,
				       backgroundColor:Background,
				        borderColor:Bordercolor,
				        borderWidth: 1
				    }
				data.push(tempset);
			})
			
			var statdata=dataset.restructure(valuesy);
				var tab=this.stat(statdata);
				chartplot.chart(data,Labels);
				 document.body.appendChild(tab);
			return null;
		}
		
	}
	
	
	//Startegy Stats 
		stat(data){
			
			var temp=this.startegy;
			var options=this.filtervaluepicker("stat");
			var columns=data.listColumns();
			var stattable="<table><th>Stats</th>";
			columns.forEach(function(col){
				stattable +="<th>"+col+"</th>";
			})
			
			options.forEach(function(value){
				if(value=="Average"){
					temp.context(new Average());
					stattable +=temp.Calculate(data,columns);
				}
				else if(value=="Max")
					{
					temp.context(new Max());
					stattable +=temp.Calculate(data,columns);
					
					}
				else if(value=="Min")
				{
					temp.context(new Min());
					stattable +=temp.Calculate(data,columns);
				}
				else if(value=="Standard")
				{
					temp.context(new Standard());
					stattable +=temp.Calculate(data,columns);
				}
				else if(value=="Mean")
				{
					temp.context(new Mean());
					stattable +=temp.Calculate(data,columns);
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
				this.clear("stat");
				if(options.length!=0)
				{
				console.log(stattable);
				var tab= document.createElement("P");
				tab.name="tables";
				tab.id="work";
				tab.innerHTML=stattable;
				}
				else
				{
					var tab=document.createElement("P");
					tab.name="tables";
					tab.id="work";
					tab.innerHTML="No Stat checked";
				}
			return tab;
		}
		//clear the checks
		clear(value)
		{
			var selected=[];
	    	var select=document.getElementsByName(value);
	    	
	    	select.forEach(function(check){
	    		if(check.checked)
	    		
	    			{
	    			check.checked=false;
	    			}
	    	});
			
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
	    
	    // create dynamic divs
	    divcreator(){
	    	var btn = document.createElement("CANVAS");
	    	btn.name="chartp";
	    	var id="chart"+this.getRandomIntInclusive();
	    	btn.id=id
	        document.body.appendChild(btn);
	        return id;
	    	
	    } 
	    // Random color Generation
	    calculatecolor(value)
		{
			var arr=[];
			var temp;
			for(var i=0;i<value.length;i++)
				{
			      temp="rgba("+this.getRandomIntInclusive()+this.getRandomIntInclusive()+this.getRandomIntInclusive();
			      temp +="0.7)"
			    	  arr.push(temp);
				}
			return arr;
		}
		getRandomIntInclusive() {
			  var min = Math.ceil(0);
			   var max = Math.floor(255);
			  return Math.floor(Math.random() * (max - min + 1)) + min+",";
			}
}