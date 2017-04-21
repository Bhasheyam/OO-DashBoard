




function load(value)
{	

var  l=new LoadDataSet("./Dataset/set1.csv");
}
function columnload(){
	var selected=[];
var a=document.getElementsByName("column");

a.forEach(function(column){
	if(column.checked)
		{
		selected.push(column.value);
		}
});

}
function loadRow()
{
	var selected=[];
	var a=document.getElementsByName("row");

	a.forEach(function(column){
		if(column.checked)
			{
			selected.push(column.value);
			}
	});
	}
