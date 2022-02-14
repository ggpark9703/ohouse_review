<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <!-- Spinner -->
  <link rel="stylesheet" href="<%=request.getContextPath()%>/css/kastyles.css" />
</head>

<!--Spinner-->
<div id="overlay" class="hide">
  <div class="cv-spinner">
    <span class="spinner"></span>
  </div>
</div>

<!--WordCloud-->
<div class="row">
  <div class="col-12">
    <div class="collapse show" id="collapseExample">
      <div class="card">
        <div id="wordcloud"></div>
      </div>
    </div>
  </div>
</div>

<script src="http://d3js.org/d3.v4.min.js"></script>
<script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>

<script>
var TARGET_ELEMENT_ID = '#wordcloud';

// Word Cloud를 만들어서 id에 할당
function draw_wc(data){
  var countMax = d3.max(data, function(d){ return d.weight} );
  var sizeScale = d3.scaleLinear().domain([0, countMax]).range([10, 100])
  var words = data.map(function(d) {
    return {
    text: d.label,
    size: sizeScale(d.weight)
    };
  });
  d3.layout.cloud().size([800, 300])
    .words(words)
    .rotate(function() { return (~~(Math.random() * 6) - 3) * 30; })
    .font("Impact")
    .fontSize(function(d) { return d.weight; })
    .on("end", draw) //draw 함수 실행
    .start();


  // wordcloud 그리기 실행
  function draw(words) {
    d3.select(TARGET_ELEMENT_ID)
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
}

// 키워드 파싱 데이터 받아오는 부분
var data_list = [{"label": "좋다","weight": 3126}, {"label": "튼튼하다","weight": 2060}, {"label": "조립","weight": 1550}, {"label": "좋다","weight": 3126}, {"label": "옷","weight": 1498},{"label": "잘","weight": 1221}, {"label": "쉽다", "weight": 1182}];
  /* {% for td in wordcloud_list %}
  {
    "label": "{{td.label}}",
    "weight": {{td.weight}},
  },
{% endfor %}
]*/
var words = draw_wc(data_list)
</script>

</html>