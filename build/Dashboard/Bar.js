/**
 * 
 */
class Bar{
	chart(data)
	{
		var margin = {top: 20, right: 20, bottom: 70, left: 40};
		var w = 900;
		var h = 400;
	    var barPadding=1;
		var xw=w/data.length;
		var svg = d3.select("body").append("svg")
		.attr("height","400")
        .attr("width","900");
		svg.selectAll("text")
		   .data(dataset)
		   .enter()
		   .append("text")
		   .text(function(d) {
        return d[0];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
        return i * (w / dataset.length);
   })
   .attr("y", function(d) {
        return  h-d[1];
   });
		svg.selectAll("rect")
		.data(data)
	    .enter().append("rect")
	    .attr("height",function(d){return d[1]*20;})
        .attr("width",(w / data.length) - barPadding)
        .attr("x",function(d, i){return i * (w / dataset.length);})
        .attr("y",function(d){return h-d[1];})
        .attr("fill",function(d){return "rgb(0, "+(d[1] * 10)+", " + (d[1] * 10) + ")";})
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px");
         
		
        

}
}