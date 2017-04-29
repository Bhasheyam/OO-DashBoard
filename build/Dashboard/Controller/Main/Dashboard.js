

var filter;//Filter handler 
var chart;//Chart Handler

function Load(){     //on-Load Function
	filter=new Filter();
	
}



function ColumnHandler(){// Cloumn filter
	filter.Observernotify();
}



function RowHandler(){//Row Elimination
	
	filter.Rowoptions();
}



function SqlHandler(){ //Sql Query
 filter.Sqlrow();
}



function chartHandler(value) //chart Generator
{
	var chart=filter.finished();
	chart.create(value);
	
}


