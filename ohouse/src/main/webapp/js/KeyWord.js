//초기화면
$(document).ready(function(){
 getApi("미엘레 1단 스탠드 행거 4colors");
 d3.layout.cloud().size([800, 300])
					.words(words)
					.rotate(0)
					.font("Impact")
					.fontSize(function(d) { return d.weight; })
					.on("end", draw) //draw 함수 실행
					.start();
});

function draw(words) {
    d3.select("#wordcloud")
      .append("svg")
        .attr("class", "ui fluid image") // style using semantic ui
        .attr("viewBox", "0 0 " + 800 + " " + 300 )  // ViewBox : x, y, width, height
        .attr("width", "100%")    // 표시 사이즈
        .attr("height", "100%")
      .append("g")
        .attr("transform", "translate(320,200)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.weight + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return d3.schemeCategory10[i % 10]; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
      
        // onclick트리거 클릭시 실행될 부분
        .on("click", function (d, i){
        	 //리뷰 파싱 데이터 호출
        	$.ajax({
            url: "{% url 'ra:ajax' %}",
            method: "GET",
            data: {
              text: d.text
            },
            timeout: 10000,
            dataType: "json",
            //리퀘스트 종료시까지 실행
            beforeSend: function(){
              $('#overlay').removeClass('hide');
            }
          })
          .done(function(data_ajax) {
            // 리스트 데이터 보여주기
            console.log("리뷰 상세보기");
          })
   
        });
  }
  

function getApi(product){
		console.log()
		$.ajax({
		type: "GET",
		url: "/wpi",
		data: {product:encodeURIComponent(product),
		success: function(response){
			var arr = [];
			var par = JSON.parse(response);
			console.log(par)
			var Json = par['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			for (idx in Json){
/*				arr[idx] = {"label":Json[idx]['label'], "weight":Json[idx]['weight']}; */
				arr.push({
						label : par[idx]['label'],
						value : par[idx]['weight']
					});
				}
					draw(arr);
				}
			}
			});			
		}