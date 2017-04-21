/**
 * 
 */
class ColumnFilter extends FilterObserver{
	
	constructor(Subject)
	{
		
		super(Subject);
	}
	
	update(){
		var selected=this.subject.getState();
		var data=this.subject.getDataset()
		var arr=data.toArray();
		this.createtable(arr,selected);
		
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
}