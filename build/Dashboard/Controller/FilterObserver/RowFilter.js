
class RowFilter extends FilterObserver {
	constructor(Subject)
	{
		super(Subject);
		
	}
	
	update(){
		
			var data=this.subject.getState();
			var selected=data.listColumns();
				var rowu=data.unique(selected[0]);
				var arr=rowu.toArray();
			this.loadcolumn(arr);
		}
        
		
	
	loadcolumn(key)
	{
		document.getElementById("Rowbutton").style.display="block";
		document.getElementById("stats").style.display="block";
		var cloumnfind=document.getElementById("row");

          while(cloumnfind.firstChild) 
          {
	         cloumnfind.removeChild(cloumnfind.firstChild);
          }
		
			 for(var j=0; j<key.length; j++)
			 {
			    var checkb=document.createElement('input');
			    checkb.type="checkbox";
			    checkb.value=key[j];
			    checkb.name="Row"
			    checkb.id="RowData";
			   
			    
			    var textlable=document.createElement("label");
			    textlable.id="key[j]";
			    textlable.htmlFor = "checks";
			    textlable.appendChild(document.createTextNode(key[j]));
			    cloumnfind.appendChild(checkb);
			    cloumnfind.appendChild(textlable);
			 }
			 
			 
	}
}