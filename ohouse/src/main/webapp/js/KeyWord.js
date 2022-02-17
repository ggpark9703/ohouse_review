//첫 화면
$(document).ready(function(){
draw("미엘레 1단 스탠드 행거 4colors");
});


//워드클라우드 구현
function draw(product){

/*	var words = getApi(product);
	console.log(words);*/
	
var words = [{label: '좋다', value: 1.02}
,{label: '너무', value: 1.09}
,{label:'같다', value: 1.1}
,{label: '가격', value: 1.92}
,{label: '잘', value: 1.05}
,{label: '예쁘다', value: 2.53}
,{label: '이쁘다', value: 2.53}
,{label: '하다', value: 1.01}
,{label: '깔끔하다', value: 2.53}
,{label: '있다', value: 1.02}
,{label: '성비', value: 1.93}
,{label: '디자인', value: 2.14}
,{label: '튼튼하다', value: 1.04}
,{label: '사다', value: 1.06}];
console.log(words);
	
	var fill = d3.scale.category20();
	var width = 1000;
	var height = 1000;
	
	d3.layout.cloud()
	  	.size([width, height])
	 	.words(words)
	 	.padding(0)
	  	.rotate(0)
	  	.font("Impact")
	  	.fontSize(function(d) {return d.value*10;})
	  	.on("end", drawcloud)
	  	.start();
	  	 	
	function drawcloud(words) {
	
		d3.select("#wordcloud").append("svg")
	      .attr("width", width)
	      .attr("height", height)
	      .append("g")
	      .attr("transform", "translate("+ width/2 +","+ height/2 +")")
	      .selectAll("text")
	      .data(words)
	      .enter().append("text")
	      .style("font-size", function(d) { return d.value*10 + "px"; })
   		.style("fill", function(d, i) { return fill(i); })
	      .attr("text-anchor", "middle")
	      .attr("transform", function(d) {
	          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; 
	      })
	      .text(function(d) { return d.label; })
          .on("mouseover", handleMouseOver)
          .on("mouseout", handleMouseOut)
          .on("click", handleClick);
          
          function handleMouseOver(d, i) {
          d3.select(this)
            .classed("word-hovered", true)
              .attr("font-weight", "bold");
        }
        
        function handleMouseOut(d, i) {
          d3.select(this)
            .classed("word-hovered", false)
            .attr("font-weight", "normal");
        }
        
        function handleClick(d, i) {
          var e = d3.select(this);

        }
 
}

}
// API data 파싱
function getApi(product){
		var arr = [];
		$.ajax({
		type: "GET",
		url: "/wpi",
		data: {product:encodeURIComponent(product)},
		success: function(response){
			var par = JSON.parse(response);
			console.log(par);
			var Json = par['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			console.log(Json);
			for (idx in Json){
				if(Json[idx]['es_property'][0]['value']<1.0)
				{
					idx = idx + 1;
				}else{
				arr.push({
						label : Json[idx]['label'],
						value : Math.floor(Json[idx]['es_property'][0]['value']*100)/100
					});
					}
				}
					
				}
			})
			console.log(arr);
			return arr;
			}