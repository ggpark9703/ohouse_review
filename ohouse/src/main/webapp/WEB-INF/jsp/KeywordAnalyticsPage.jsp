<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>

<style>        
   .bld {
     font-weight: bold;
         }
   .click-only-text {
     cursor: pointer;
     -webkit-user-select: none;
     -moz-user-select: none;
   	 -ms-user-select: none;
      user-select: none;
    	}
  .click-only-text::selection {
      background: none;
    }

  .word-default {
      fill: cadetblue;
      font-weight: normal;
    }
  .word-hovered {
      fill: teal;
      font-weight: bold;
    }
  .word-selected {
      fill: darkslategrey;
      font-weight: bold;
    }
</style>
</head>
<body>

<div id="wordcloud" align="center"></div>

<script>
	$.ajax({
		type: "GET",
	    url: "wordcloud.do",
	    dataType: "json",
	    data: {product:encodeURIComponent('"[5%쿠폰]BRUG 스탠드행거 KS1002/LDR"')},
	    success: function(response){
	    	
	    	console.log(response)
			var arrW = new Array();
	    	var arrL = new Array();
			var parse = JSON.parse(response);	
			var parse_J = parse['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			console.log(parse_J)
			for (idx in parse_J){
/* 				arr[idx] = {"label":parse_J[idx]['label'], "value":parse_J[idx]['weight']}; */
				arrW = parse_J[idx]['weight'];//빈도
				arrL = parse_J[idx]['label'];//라벨
			}
			console.log(arrW);
			console.log(arrW);
			}
		}).responseText;
     
    var color = d3.scale.category20(); //d3 기본제공 컬러파레트
  
    d3.layout.cloud().size([800, 300]) //[width,height]
            .words(testx)
            .rotate(0)
            .fontSize(function(d) { return d.weight; })
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
                .style("font-size", function(d) { return d.weight + "px"; })
                .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.label; })
                .classed("click-only-text", true)
        		.classed("word-default", true)
       			.on("mouseover", handleMouseOver)
       			.on("mouseout", handleMouseOut)
        		.on("click", function(evt, element) {
			        if(element.length > 0) {
			            var product_name = myBarChart.data.datasets[0].dummy[2][chart_idx];
			            var product_category = myBarChart.data.datasets[0].dummy[1];
			            var product_keyword = myBarChart.data.datasets[0].dummy[0];
			            
			    		$(document).ready(function(){
							$('#sampleModal').modal();
							$('#product-name').text(product_name);
							$.ajax({
									type: "GET",
									url: "/getreview.do",
									data: {product_category:encodeURIComponent(product_category),product_keyword:encodeURIComponent(product_keyword),
											product_name:encodeURIComponent(product_name)},
									success: function(response){
										$('#reviewdata').empty();
										var parse0 = JSON.parse(response);
										var Json = parse0['es_apiResponse']['es_result'];
										var reviewdata = "";
											for (idx in Json){
												
												var user_name = Json[idx]['es_title'];
												console.log(user_name);
												var summury = Json[idx]['es_summary'];
												reviewdata += '<div class="card2 p-3 mt-2"><div class="d-flex justify-content-between align-items-center"><div class="user d-flex flex-row align-items-center">';
												reviewdata += '<span><small class="font-weight-bold text-primary">'+user_name+'</small> <small class="font-weight-bold">💬 '+summury+'</small></span> </div>'
												reviewdata += '</div></div>'
											}
					
									    $('#reviewdata').append(reviewdata);}
								});

			        })
			        }})
        		  function handleMouseOver(d, i) {
                  d3.select(this)
                      .classed("word-hovered", true)
                      .attr("font-weight", "bold");
                  }
                  
                  function handleMouseOut(d, i) {
                    d3.select(this)
                      .classed("word-hovered", false)
                  }
		}
    
    
</script>
<!--Bootstrap Modal-->
   <div class="modal fade" id="sampleModal">
      <div class="modal-dialog">
       <div class="modal-content">
         <!--Modal Header-->   
           <div class="modal-header">
           <h5 class="modal-title" id="product-name">Modal Title</h5>
           </div>
         <!--Modal Body -->
          <div class="modal-body" id="reviewdata">
          </div>
         <!--Modal Footer-->
           <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
   </div>
  </div>
</div>
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script>--> 
</body>
</html>