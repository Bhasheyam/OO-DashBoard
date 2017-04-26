/**
 * 
 */
class SqlReduction extends RowManager{
constructor(){
		super();
	}
	perform(data,options){
		var DataFrame = dfjs.DataFrame;
		var table="table"+options[0]+Math.floor(Math.random() * 20);;
		DataFrame.sql.registerTable(data,table);
		console.log(table);
		var query="select * from "+table+" WHERE "+options[0]+options[1];
		console.log(query);
		var sql=DataFrame.sql.request(query);
		console.log(sql);
		return sql;
		
	}
	
	
}