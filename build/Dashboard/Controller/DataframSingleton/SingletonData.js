/**
 * 
 */
let instance=null;
class SingletonData
{
	
	constructor(data,column)
	{
		if(SingletonData.instance==null)
			{
			SingletonData.instance=this;
			}
		this.dataset=dataset;
		this.column=cloumn;
		 return SingletonData.instance;
	}
	
	
	getInstance()
	{
		return new SingletonData();
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

