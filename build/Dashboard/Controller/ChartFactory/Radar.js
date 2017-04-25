/**
 * 
 */
class Radar extends ChartMaster
{
	constructor(ctx,name)
	{
		super(ctx,name);
		this.Background=[];
		this.BorderColor=[];
		
	}

	chart(data,data2,Labels)
	{
		var ctx=document.getElementById("body");
		console.log(ctx);
		//background(data);
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: Labels,
		        	 datasets: [{
		        		 label:"one",
				            data: data,
				            backgroundColor: ['red'],
				            borderWidth: 1
				        },{
				        	label:"two",
				            data: data2,
				            backgroundColor: ['blue'],
				            borderWidth: 1
				        }]
		        
		       
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
		
}
	
	
	
}