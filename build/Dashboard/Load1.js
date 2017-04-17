/**
 * 
 */
class Load1{
	
	
	load(){
		var table;
		var mastertable =[];
		var fulltable=[];
		var key;
		var result =[];
		
		d3.csv("set1.csv",function(data){
			for(var i=0;i<data.length;i++)
			{
			
			key=Object.keys(data[i])
		
			 key.forEach(function(key1){
				
			        result.push(data[i][key1]);
			      
			    });
			
			 mastertable.push(result);
			 result=[];
		        
			}
		fulltable.push(key);
		fulltable.push(mastertable);
		table=createtable(mastertable,key);
	  loadcolumn(key);
document.getElementById("data").innerHTML=table;
			
		});
	}
}

