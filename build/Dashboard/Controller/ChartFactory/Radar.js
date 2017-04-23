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

	chart(data,Labels)
	{
		var ctx=document.getElementById("body");
		console.log(ctx);
		//background(data);
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: Labels,
		        datasets: [{
		            label: this.name,
		            data: data,
		            backgroundColor: ['blue','blue','green'],
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