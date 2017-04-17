/**
 * 
 */
var use;
var chart;
var dataset = [];
var a=[ 20,30,40];
var b=[30,40,50];
dataset.push(a);
dataset.push(b);
function load()
{
use=new FacadeLoad();
chart =new ChartFactory();
}
function load1()
{
	use.load1();
	
	}
function load2()
{
	use.load2();
	
	}
function load3()
{
	use.load3();
	
	}
function load4()
{
	use.load4();
	
	}
function load5()
{
	use.load5();
	
	}
function chart1(value)
{
	console.log("came");
	var createchart=chart.create(value);
	createchart.chart(dataset);
	}


function onload()
{
load();
load1();
var ab=new try1();
ab.load();
console.log(dataset);
console.log("hello");
}
