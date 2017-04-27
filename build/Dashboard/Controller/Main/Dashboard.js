

var filter;
var chart;
var s;
function basic(){
	filter=new Filter();
	s=new Startegy();
	console.log(12);
	//chart=new 
	
}

function check(){
	filter.Observernotify();
}
function loadRow(value){
	filter.plan(value);
}
function chart(value)
{
	var ctx=document.getElementById("body");
	var data=[5,6,7];
	var newdata=[];
	var data2=[2,4,6];
	newdata.push(data);
	newdata.push(data2);
	var label=["a","b","c"]
	var check=new Radar(ctx,value);
	check.chart(data,data2,label);
	
	
	}
function check1(){
	console.log("working here");
	filter.Rowoptions();
}
function check2(){
 filter.Sqlrow();
}
function callit(){
	filter.stat();
	console.log("called button");
}
function tab()
{
var a=filter.stat();	
console.log(a);
document.getElementById("bod").innerHTML=a;
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