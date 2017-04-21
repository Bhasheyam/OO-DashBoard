/**
 * 
 */
let instance=null;
let datasetm=null;
let column=null;
class SingletonData
{
	
	constructor(dataset,column)
	{
		if(SingletonData.instance==null)
			{
			SingletonData.instance=this;
			}
		
		 return SingletonData.instance;
	}
	setcolumn(column){
		console.log(column);
		SingletonData.column=column;
	}
	setDataset(dataset){
		console.log(dataset);
		SingletonData.datasetm=dataset;	
	}
getCloumn()
	{
		return SingletonData.column;
		
	}
	getDataset()
{
		
return SingletonData.datasetm;
}
	
}

