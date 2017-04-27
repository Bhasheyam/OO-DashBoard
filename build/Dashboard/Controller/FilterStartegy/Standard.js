/**
 * 
 */
class Standard extends Startegy{
	constructor(){
		super();
		
	}
	execute1(data, columns){
		var result="<tr><td>Standard Deviation</td>";
		columns.forEach(function(col){
			var ans=data.stat.sd(col);
			result +="<td>"+ans+"</td>"
		})
		result +="</tr>";
		return result;
	}
}