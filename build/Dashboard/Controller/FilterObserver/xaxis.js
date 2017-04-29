/**
 * 
 */
class xaxis extends FilterObserver {
	constructor(Subject)
	{
		super(Subject);
		
	}
	update()
	{
		var data=this.subject.getState();
		var selected=data.listColumns();
		this.createaxis(selected,"x");
	}
	createaxis(key,val)
	{
		
		var cloumnfind=document.getElementById(val);

          while(cloumnfind.firstChild) 
          {
	         cloumnfind.removeChild(cloumnfind.firstChild);
          }
		
			 for(var j=0; j<key.length; j++)
			 {
			    var checkb=document.createElement('input');
			    checkb.type="checkbox";
			    checkb.value=key[j];
			    checkb.name="x"
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