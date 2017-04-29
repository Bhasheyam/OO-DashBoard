/**
 * 
 */
class Sqloptions extends FilterObserver {
	constructor(Subject)
	{
		super(Subject);
		
	}
	update()
	{
		var data=this.subject.getState();
		var selected=data.listColumns();
		this.optioncolumns(selected);
		
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