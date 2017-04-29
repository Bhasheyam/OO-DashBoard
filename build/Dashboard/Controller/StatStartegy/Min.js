/**
 * 
 */
class Min extends Startegy{
	constructor(){
		super();
		
	}
	execute1(data, columns){
		var result="<tr><td>Min</td>";
		columns.forEach(function(col){
			var ans=data.stat.min(col);
			result +="<td>"+ans+"</td>"
		})
		result +="</tr>";
		return result;
	}
}