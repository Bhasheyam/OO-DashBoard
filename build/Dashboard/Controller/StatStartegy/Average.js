/**
 * 
 */

class Average extends Startegy{
	constructor(){
		super();
		
	}
	execute1(data, columns){
		var result="<tr><td>Average</td>";
		columns.forEach(function(col){
			var ans=data.stat.average(col);
			result +="<td>"+ans+"</td>"
		})
		result +="</tr>";
		return result;
	}
}