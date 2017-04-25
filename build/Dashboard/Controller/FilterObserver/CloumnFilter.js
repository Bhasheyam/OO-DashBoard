/**
 * 
 */
class ColumnFilter extends FilterObserver{
	
	constructor(Subject)
	{
		
		super(Subject);
	}
	
	update(){
		
		var data=this.subject.getState()
		var arr=data.toArray();
		var key=data.listColumns();
		this.createtable(arr,key);
		
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