/**
 * 
 */
class RowReduction extends RowManager{
	constructor(){
		super();
	}
	perform(data,options){
		
	
		var temp1=null;
		var temp=data;
		var columns=data.listColumns();
		columns.forEach(function(col){
			options.forEach(function(opt){
				
				if(opt!==" "){
				temp1=temp.filter(row => row.get(col) !== opt);
				temp=temp1;
				}
			});
		});	
		var reduced=temp.filter(row=>row.get(columns[0]) != "");
		return reduced;
	}
}