/**
 * 
 */
class Radar
{
	constructor()
	{
		
	}

	chart(data,Labels)
	{
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: Labels,
		        datasets: [{
		            label: "Bar Chart",
		            data: data,
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