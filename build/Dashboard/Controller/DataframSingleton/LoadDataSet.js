/**
 * 
 */
class LoadDataSet{
	constructor(value){
		this.DataFrame=dfjs.DataFrame;
		this.DataFrame.fromCSV(value).then(df=>{this.loading(df);});
		
	}
	
	
	
	loading(Dataset)
	{
		var column=Dataset.listColumns();

		new SingletonData(Dataset);
	}
}