/**
 * 
 */
class LoadDataSet{
	constructor(value){
		this.DataFrame=dfjs.DataFrame;
		this.DataFrame.fromCSV(value).then(df=>{this.loading(df);});
		
	}	
	
	loading(Dataset)
	{
		var column=Dataset.listColumns();
		var arraydata=Dataset.toArray();
		this.createtable(arraydata,column);
		this.loadcolumn(column);
		var data=new SingletonData();
		data.setDataset(Dataset);
		data.setcolumn(column);
	}
	createtable(myArray,key) {
	    var result="<table><tr>";
	    for(var i=0;i<key.length;i++)
	    	{
	    	result += "<th>"+key[i]+"</th>";
	    	}
	    result +="</tr>"
	    for(var i=0; i<myArray.length; i++) {
	        result += "<tr>";
	        for(var j=0; j<myArray[i].length; j++){
	        	
	        	
	            result += "<td>"+myArray[i][j]+"</td>";
	        }
	        result += "</tr>";
	    }
	    result +="</table>"
	    	document.getElementById("data").innerHTML=result;
	}
	loadcolumn(key)
	{
		document.getElementById("Columnbutton").style.display="block";
		var cloumnfind=document.getElementById("columndata");

          while(cloumnfind.firstChild) 
          {
	         cloumnfind.removeChild(cloumnfind.firstChild);
          }
		
			 for(var j=0; j<key.length; j++)
			 {
			    var checkb=document.createElement('input');
			    checkb.type="checkbox";
			    checkb.value=key[j];
			    checkb.name="column"
			    checkb.id="column";
			   
			    
			    var textlable=document.createElement("label");
			    textlable.id="key[j]";
			    textlable.htmlFor = "checks";
			    textlable.appendChild(document.createTextNode(key[j]));
			    cloumnfind.appendChild(checkb);
			    cloumnfind.appendChild(textlable);
			 }
			 
			 
	}
}