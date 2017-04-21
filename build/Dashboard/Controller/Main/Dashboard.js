

var filter;
var chart;

function basic(){
	filter=new Filter();
	//chart=new 
	
}

function check(){
	filter.Observernotify();
}
/*
function check()
{
var f=new Filter();
var f1=f.filtercolumn();
var str =" ";
f1.forEach (function(element)
{

	str +=element;
	
	});
console.log(str)
var a=new SingletonData();
var data=a.getDataset();

var new1=data.select(str);
var column=new1.listColumns();
var arraydata=new1.toArray();
createtable(arraydata,column);
}
function createtable(myArray,key) {
    var result="<table><tr>";
    for(var i=0;i<key.length;i++)
    	{
    	result += "<th>"+key[i]+"</th>";
    	}
    result +="</tr>"
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
        	
        	
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result +="</table>"
    	document.getElementById("data").innerHTML=result;
}*/