<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>

       <style>
         body {
         font-family:"Lucida Grande","Droid Sans",Arial,Helvetica,sans-serif;
         }
        .legend {
             border: 1px solid #555555;
              border-radius: 5px 5px 5px 5px;
              font-size: 0.8em;
              margin: 10px;
               padding: 10px;
         }
        .bld {
              font-weight: bold;
         }
        </style>

</head>
<body>
     <div id="wordcloud" align="center" ></div>
<script>
	//임시데이터
	var test = [{"label":"품질","value":40},{"label":"가성비","value":15},{"label":"조립","value":10},{"label":"코트","value":35},{"label":"부피","value":30},{"label":"튼튼","value":20}];


<!--	Json 파싱 부분

		var x =
		$.ajax({
		type: "GET",
	    url: "wordcloud.do",
	    dataType: "json",
	    contentType: "application/json; charset:UTF-8",
	    success: function(response){
			refreshAnimation();
			var arr = new Array();
			var parse = JSON.parse(response);
			console.log(parse)
			for (idx in Json){
					arr[idx] = {"label":Json[idx]['label'], "value":Json[idx]['es_property'][0]['value']};
			}
	    }
		}).responseText;
-->        
    var color = d3.scale.linear() //선형적인 스케일로 표준화를 시킨다.
            .domain([0,1,2,3,4,5,6,10,15,20,100])//데이터의 범위, 입력 크기
            .range([0.50]);//표시할 범위, 출력 크기
            //ex)"#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"
  
    d3.layout.cloud().size([800, 300]) //[width,height]
            .words(test)
            .rotate(0)
            .fontSize(function(d) { return d.value; })
            .on("end", draw)
            .start();
    
    function draw(words) {
        d3.select("#wordcloud").append("svg")//wordcloud 테이블에 svg를 붙이고
                .attr("width", 850)
                .attr("height", 350)
                .attr("class", "wordcloud")
                .append("g")
                .attr("transform", "translate(320,200)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.value + "px"; })
                .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.label; });
    }
    
</script>       
</body>
