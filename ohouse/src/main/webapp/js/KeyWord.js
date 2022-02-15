
// 초기화면
$(document).ready(function(){
draw("미엘레 1단 스탠드 행거 4colors");
});


function draw(product){

	var words = getApi(product);
 	var width = 800;
	var height = 800;

	
d3.layout.cloud()
  	.size([width, height])
 	.words(words)
	.padding(5)
  	.rotate(0)
  	.font("Impact")
  	.fontSize(function(d) { return d.weight;})
  	.on("end", this.end)
  	.start();

 
 function drawcloud(words) {
	d3.select("#wordcloud")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate("+ width/2 +","+ height/2 +")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) { return d.weight + "px"; })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; 
      })
      .text(function(d) { return d.label; })
      }
  }


// API data 파싱
function getApi(product){
		var arr = new Array();
		$.ajax({
		type: "GET",
		url: "/wpi",
		data: {product:encodeURIComponent(product)},
		success: function(response){
			var par = JSON.parse(response);
			console.log(par);
			var Json = par['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			console.log(Json);
			for (idx in Json){0
				/*arr[idx] = {"label":Json[idx]['label'], "weight":Json[idx]['weight']}; */
				arr.push({
						label : Json[idx]['label'],
						value : Json[idx]['weight']
					});
				}
					console.log(arr);
					return arr;
				}
			});			
		}