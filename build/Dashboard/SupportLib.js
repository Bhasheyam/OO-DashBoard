/**
 * 
 */
function createtable(myArray,key) {
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
	    return result;
	}
	
	function loadcolumn(key)
	{
		var cloumnfind=document.getElementById("column");
		
			 for(var j=0; j<key.length; j++){
			    var checkb=document.createElement('input');
			    checkb.type="checkbox";
			    checkb.value=key[j];
			    checkb.id=key[j];
			    
			    var textlable=document.createElement("label");
			    textlable.id="key[j]";
			    textlable.htmlFor = "checks";
			    textlable.appendChild(document.createTextNode(key[j]));
			    cloumnfind.appendChild(checkb);
			    cloumnfind.appendChild(textlable);
			 }
			 
	}

	function notify(datae)
	{
		var a=new try1();
		a.notify(datae)
	}	
	