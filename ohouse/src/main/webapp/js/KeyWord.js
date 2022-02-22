//첫 화면
$(document).ready(function(){
getApi("Q4 유로탑 롤팩 매트리스 2size");
});


// API data 파싱
function getApi(product){
		
		$.ajax({
		type: "GET",
		url: "/wpi",
		data: {product:encodeURIComponent(product)},
		success: function(response){
			var arr = new Array();
			var par = JSON.parse(response);
			console.log(par);
			var Json = par['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			console.log(Json);
			for (idx in Json){
				if(Json[idx]['es_property'][0]['value']<0.95)
				{
					idx = idx + 1;
				}else if(Json[idx]['label']=="소파"||Json[idx]['label']=="쇼파"||Json[idx]['label']=="매트리스"
						||Json[idx]['label']=="테이블"||Json[idx]['label']=="식탁"||Json[idx]['label']=="행거"
						||Json[idx]['label']=="옷걸이"||Json[idx]['label']=="좋다"||Json[idx]['label']=="너무"
						||Json[idx]['label']=="같다"||Json[idx]['label']=="정말"||Json[idx]['label']=="너무너무"
						||Json[idx]['label']=="ᅲᅲ"||Json[idx]['label']=="ᅲ"||Json[idx]['label']=="ᄒᄒ"
						||Json[idx]['label']=="ᄒ"||Json[idx]['label']=="좀"||Json[idx]['label']=="하다"
						||Json[idx]['label']=="있다"||Json[idx]['label']=="배송"||Json[idx]['label']=="잘"
						||Json[idx]['label']=="넘"||Json[idx]['label']=="더"||Json[idx]['label']=="때"
						||Json[idx]['label']=="다"||Json[idx]['label']=="편"||Json[idx]['label']=="맘"
						||Json[idx]['label']=="기사"||Json[idx]['label']=="근데"||Json[idx]['label']=="친절하다"
						||Json[idx]['label']=="늦다"||Json[idx]['label']=="배"||Json[idx]['label']=="송"
						||Json[idx]['label']=="짱"||Json[idx]['label']=="2"||Json[idx]['label']=="딱"
						||Json[idx]['label']=="후"||Json[idx]['label']=="3"||Json[idx]['label']=="1"
						||Json[idx]['label']=="오다"||Json[idx]['label']=="안"||Json[idx]['label']=="오늘"
						||Json[idx]['label']=="포장"||Json[idx]['label']=="진짜"||Json[idx]['label']=="빨리"
						||Json[idx]['label']=="분"||Json[idx]['label']=="그리고"||Json[idx]['label']=="조금"
						||Json[idx]['label']=="최고"||Json[idx]['label']=="들다"||Json[idx]['label']=="아주"
						||Json[idx]['label']=="박스"||Json[idx]['label']=="비닐"||Json[idx]['label']=="엄청"
						||Json[idx]['label']=="침대"||Json[idx]['label']=="없이"||Json[idx]['label']=="후기"
						||Json[idx]['label']=="800"||Json[idx]['label']=="600"||Json[idx]['label']=="이"){
					idx = idx +1;
				}//가독성을 위해 분리
				else if(Json[idx]['label']=="성비"){
				arr.push({
						label : "가성비",
						value : Math.floor(Json[idx]['es_property'][0]['value']*100)/100
					});
					}
				else{
				arr.push({
						label : Json[idx]['label'],
						value : Math.floor(Json[idx]['es_property'][0]['value']*100)/100
					});
					}
				}
				console.log(arr);
				draw(arr);
				//워드클라우드 구현
				function draw(words){
				
					var fill = d3.scale.category20();
					var width = 500;
					var height = 500;
	
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
				          
				          function handleMouseOver() {
				          d3.select(this)
				            .classed("word-hovered", true)
				              .attr("font-weight", "bold");
				        }
				        
				        function handleMouseOut() {
				          d3.select(this)
				            .classed("word-hovered", false)
				            .attr("font-weight", "normal");
				        }
				        
				        function handleClick() {
				       		var e = d3.select(this).text();
				       		console.log(e);
				       		var k = getReview(product, e);
				       		console.log(k);
							
								}	
      						  }
 							}

						}
							})
			
	}
function getReview(product, thisword) {
	$.ajax({
		type: "GET",
		url: "/rpi",
		data: {product:encodeURIComponent(product),thisword:encodeURIComponent(thisword)},
		success: function(response){
		var par = JSON.parse(response);
		var Json = par['es_apiResponse']['es_result'];
		for (idx in Json){																						
		var summury = Json[idx]['es_summary'];}
		}});
		return summury;
}	

var navM = document.getElementById('mattress');
var navS = document.getElementById('sofa');
var navH = document.getElementById('hangger');
var navT = document.getElementById('table');


$("#mattress").click(function(){
	d3.select("#wordcloud").select('svg').remove();
	navS.classList.remove('active');
	navH.classList.remove('active');
	navT.classList.remove('active');
	
	navM.classList.add('active');
	
	$("#asset1").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("Q4 유로탑 롤팩 매트리스 2size");
		getApi("Q4 유로탑 롤팩 매트리스 2size");
	});
	$("#asset2").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("몬스터 필로우탑 침대 매트리스 80T (S/SS/Q/K) 2colors");
		getApi("몬스터 필로우탑 침대 매트리스 80T (S/SS/Q/K) 2colors");
	});
	$("#asset3").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("편안한 제주 본넬스프링 침대 매트리스 (싱글/슈퍼싱글/퀸/킹)");
		getApi("편안한 제주 본넬스프링 침대 매트리스 (싱글/슈퍼싱글/퀸/킹)");
	});
	$("#asset4").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("몬스터 필로우탑 침대 매트리스 80T (S/SS/Q/K) 2colors");
		getApi("몬스터 필로우탑 침대 매트리스 50T (S/SS/Q/K) 2colors");
	});
	$("#asset5").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("편안한 제주 필로우탑 본넬스프링 침대 매트리스 (싱글/슈퍼싱글/퀸/킹)");
		getApi("편안한 제주 필로우탑 본넬스프링 침대 매트리스 (싱글/슈퍼싱글/퀸/킹)");
	});
	
});
$("#sofa").click(function(){
	d3.select("#wordcloud").select('svg').remove();
	navM.classList.remove('active');
	navH.classList.remove('active');
	navT.classList.remove('active');
	
	navS.classList.add('active');
	
	$("#asset1").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("루비 2인 소파 패브릭 8colors");
		getApi("루비 2인 소파 패브릭 8colors");
	});
	$("#asset2").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("프라제르 아쿠아텍스 4인용 소파 (스툴증정) 2colors");
		getApi("프라제르 아쿠아텍스 4인용 소파 (스툴증정) 2colors");
	});
	$("#asset3").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("DK053 3인용 풀커버 패브릭 소파 5colors (스툴 기본포함)");
		getApi("DK053 3인용 풀커버 패브릭 소파 5colors (스툴 기본포함)");
	});
	$("#asset4").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[5%쿠폰] POL 아쿠아텍스 3인소파 2colors(스툴무료증정)");
		getApi("[5%쿠폰] POL 아쿠아텍스 3인소파 2colors(스툴무료증정)");
	});
	$("#asset5").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("[10%쿠폰] 타미 1인 패브릭소파 3colors");
	});
});

$("#hangger").click(function(){
	d3.select("#wordcloud").select('svg').remove();
	navS.classList.remove('active');
	navM.classList.remove('active');
	navT.classList.remove('active');
	
	navH.classList.add('active');
	
	$("#asset1").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("미엘레 1단 스탠드 행거 4colors");
	});
	$("#asset2").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("(당일발송) 무볼트 드레스룸 조립식 멀티행거");
	});
	$("#asset3").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("당일출고 순수원목 수납 선반형 1단 A행거");
	});
	$("#asset4").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("왕자 네오스페이스 (베이직2단)");
	});
	$("#asset5").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("[5%쿠폰]BRUG 스탠드행거 KS1002/LDR");
	});
});

$("#table").click(function(){
	d3.select("#wordcloud").select('svg').remove();
	navM.classList.remove('active');
	navS.classList.remove('active');
	navH.classList.remove('active');
	
	navT.classList.add('active');
	
	$("#asset1").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("FW 화이트 원형테이블 700size");
	});
	
	$("#asset2").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("원형 티 카페 테이블 2size");
	});
	
	$("#asset3").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("마일로 원형 테이블 800");
	});
	
	$("#asset4").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("[쿠폰할인] 올리브 1200 렌지대형 아일랜드식탁 GG132C");
	});
	
	$("#asset5").click(function(){
	d3.select("#wordcloud").select('svg').remove();
		$("#productName").text("[10%쿠폰] 타미 1인 패브릭소파 3colors");
		getApi("FW 화이트 원형테이블 800size");
	});
});
