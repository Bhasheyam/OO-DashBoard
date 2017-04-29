/**
 * 
 */
class Mean extends Startegy{
	constructor(){
		super();
		
	}
	execute1(data, columns){
		var result="<tr><td>Mean</td>";
		columns.forEach(function(col){
			var ans=data.stat.mean(col);
			result +="<td>"+ans+"</td>"
		})
		result +="</tr>";
		return result;
	}
}