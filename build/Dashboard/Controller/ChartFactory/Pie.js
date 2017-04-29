
class Pie extends ChartMaster{
	constructor(ctx)
	{
		super(ctx);
	
	}
	chart(data,Labels)
	{
		
	 var myChart = new Chart(this.ctx, {
		    type: 'pie',
		    data: {
		        labels: Labels,
		        datasets:data
		    },
		    options: {
		        responsive: false
		    }
		});

}
}