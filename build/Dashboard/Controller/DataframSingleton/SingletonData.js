/**
 * 
 */
let instance=null;
class SingletonData
{
	
	constructor(dataset,column)
	{
		if(SingletonData.instance==null)
			{
			SingletonData.instance=this;
			}
		this.dataset=dataset;
		this.column=column;
		 return SingletonData.instance;
	}
	
	
	getInstance()
	{
		return new SingletonData(data,cloumn);
	}
getCloumn()
	{
		return this.column;
		
	}
	getDataset()
{
		
return this.dataset;
}
	
}

