/**
 * 
 */
class RowFilterContext{
	constructor(){
		this.options=new RowReduction();
		this.sql=new SqlReduction();
		
	}
	
	sqlQuery(data,options)
	{
		
		return this.sql.perform(data,options);
	}
	rowoptions(data,options)
	{
		
		return this.options.perform(data,options);
		
	}
}