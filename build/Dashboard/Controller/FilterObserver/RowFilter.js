/**
 * 
 */
let rowselected=[];
class RowFilter extends FilterObserver {
	constructor(Subject)
	{
		super(Subject);
		
	}
	
	update(){
		var selected=this.subject.getState();
			var data=this.subject.getDataset();
			var notthere=-1;
		RowFilter.rowselected=[];
			selected.forEach(function(dataselected){
				var rowu=data.unique(dataselected);
				var arr=rowu.toArray();
				arr.forEach(function(row){
					row.forEach(function(data){
						var check=RowFilter.rowselected.indexOf(data);
						if(check ==notthere);
						RowFilter.rowselected.push(data);
					});	
			});
			});
			this.loadcolumn(RowFilter.rowselected);
		}
        
		
	
	loadcolumn(key)
	{
		document.getElementById("Rowbutton").style.display="block";
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