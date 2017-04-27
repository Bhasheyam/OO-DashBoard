/**
 * 
 */
class Max extends Startegy{
	constructor(){
		super();
		
	}
	execute1(data, columns){
		var result="<tr><td>Max</td>";
		columns.forEach(function(col){
			var ans=data.stat.max(col);
			result +="<td>"+ans+"</td>"
		})
		result +="</tr>";
		
		return result;
	}
}