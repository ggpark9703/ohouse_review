
/* var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
}); */
var context = document.getElementById('priceChart').getContext('2d');
var chart1 = getChart(context);

var context2 = document.getElementById('durablityChart').getContext('2d');
var chart2 = getChart(context2);

var context3 = document.getElementById('designChart').getContext('2d');
var chart3 = getChart(context3);
$(document).ready(function(){
 getApi('매트리스')
});


function getApi(category){
		console.log(chart1.data)
		$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"가격-긍정"/"가격")')},
		success: function(response){
			var arr = new Array();
			var o_arr = new Array();
            var valueArr = new Array();
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			for (idx in Json){
				o_arr[idx] = Json[idx]['label']
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
		
			var priceTitle = document.getElementById("titlePrice");
			getTitle(priceTitle,valueArr,arr);
			chart1.data.datasets[0].data = valueArr;
			chart1.data.labels = arr;
			chart1.data.datasets[0].label = ['(keyword::/"가격-긍정"/"가격")',category,o_arr];
			chart1.update();
			 
		}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"내구성-추천"/"내구성")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			var arr = new Array();
			var o_arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				o_arr[idx] = Json[idx]['label'];
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
			
			var titleDurablity = document.getElementById("titleDurablity");
			getTitle(titleDurablity,valueArr,arr);
			chart2.data.labels = arr;
			chart2.data.datasets[0].data = valueArr;
			chart2.data.datasets[0].label = ['(keyword::/"내구성-추천"/"내구성")',category,o_arr];
			chart2.update();
			
			
		}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"디자인-추천"/"디자인")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			var arr = new Array();
			var o_arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				o_arr[idx] = Json[idx]['label'];
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
			
			var titleDesign = document.getElementById("titleDesign");
			getTitle(titleDesign,valueArr,arr);
			chart3.data.labels = arr;
			chart3.data.datasets[0].data = valueArr;
			chart3.data.datasets[0].label = ['(keyword::/"디자인-추천"/"디자인")',category,o_arr];
	        chart3.update();
		}
	})
}
function getTitle(query,valueArr,arr){
	 const maxValue = Math.max.apply(Math,valueArr)
		for (idx in valueArr){
			if(valueArr[idx] == maxValue){
				console.log(arr[idx]+'성공')
				$(query).text(arr[idx])
			}
		}
}
function getChart(context){
	           var myBarChart = new Chart(context, {
                type: 'bar', // 차트의 형태
                data: { // 차트에 들어갈 데이터
                    labels:[0,1,2,3,4,5],
                    datasets: [
                        { //데이터
                            label: '',
                            fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                            data: [],
                            backgroundColor: [
                                //색상
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)'
                            ],
                            borderColor: [
                                //경계선 색상
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 1 //경계선 굵기
                        }
                    ]
                },
                options: {
	
					onClick: function(evt, element) {
					        if(element.length > 0) {
					            var chart_idx = element[0].index;
					           
					            var product_name = myBarChart.data.datasets[0].label[2][chart_idx];
					            var product_category = myBarChart.data.datasets[0].label[1];
					            var product_keyword = myBarChart.data.datasets[0].label[0];
					            
					    		$(document).ready(function(){
									$('#sampleModal').modal();
									$('#product-name').text(product_name);
									$.ajax({
											type: "GET",
											url: "/reviews",
											data: {product_category:encodeURIComponent(product_category),product_keyword:encodeURIComponent(product_keyword),
													product_name:encodeURIComponent(product_name)},
											success: function(response){

												var parse0 = JSON.parse(response);
												var Json = parse0['es_apiResponse']['es_result'];
												
													for (idx in Json){
														console.log(Json[idx]['es_title']);
														var summury = Json[idx]['es_summary'];
														$('#product-description').append(summury);
													}
												 
											}
										})
								});	
					        }},
                    plugins: {
                        legend: {
                            display: false
                        }
                   	},
                   	indexAxis: 'y',
                   	          	
                }
                
            });
      return myBarChart;
}


//버튼 디자인용 JS
var element = document.getElementById('mattress');
var element2 = document.getElementById('sofa');
var element3 = document.getElementById('hangger');
var element4 = document.getElementById('table');

$("#mattress").click(function(){
	getApi('매트리스')
	element2.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.remove('active');
	element.classList.add('active');
});
$("#sofa").click(function(){
	getApi('소파')
	element.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.remove('active');
	element2.classList.add('active');
});
$("#hangger").click(function(){
	getApi('행거')
	element2.classList.remove('active');
	element.classList.remove('active');
	element4.classList.remove('active');
	element3.classList.add('active');
});
$("#table").click(function(){
	getApi('식탁')
	element.classList.remove('active');
	element2.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.add('active');
});

