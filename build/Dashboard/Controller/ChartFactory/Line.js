/**
 * 
 */
class Line extends ChartMaster{
	constructor(ctx)
	{
		super(ctx);
		
	}
	chart(data,Labels)
	{
		
	 var myChart = new Chart(this.ctx, {
		    type: 'line',
		    data: {
		        labels: Labels,
		        datasets:data
		    },
		    options: {
		        scales: {
		        	xAxes: [{
		                stacked: true
		            }],
		            yAxes: [{stacked: true,
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

}
	
	
}