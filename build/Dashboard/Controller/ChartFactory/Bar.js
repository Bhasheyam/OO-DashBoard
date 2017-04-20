/**
 * 
 */
class Bar{
	constructor()
	{
		
	}
	chart(data,Labels)
	{
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: Labels,
		        datasets: [{
		            label: "Bar Chart",
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: Background,
		            borderColor: BorderColor,
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