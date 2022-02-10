
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
 $('#cardtop').src='<%=request.getContextPath()%>/img/recommend_img/DK053 3인용 풀커버 패브릭 소파 5colors.png';
});


function getApi(category){
		$('#text-animation').text('#'+category);
		console.log(chart1.data)
		var wrapper = document.getElementsByClassName("text-animation")[0];
		wrapper.style.opacity="1";
		wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");
		var spans = wrapper.getElementsByTagName("span");
		
		for(var i=0;i<spans.length;i++){
		  spans[i].style.animationDelay = i*80+"ms";
}  		
		$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"가격-긍정"/"가격")')},
		success: function(response){
			refreshAnimation();
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
			var img_id = document.getElementById("product_img");
			getTitle(priceTitle,valueArr,arr,img_id);
			arrayOfObj = arr.map(function(d,i){
			  return{
			    label:d,
			    new_lable:o_arr[i],
			    data: valueArr[i]||0
			  };
			});
			
			sortedArrayOfObj = arrayOfObj.sort(function(a,b){
			  return b.data-a.data;
			});
			
			newArr = [];
			newValue = [];
			new_O_Arr = [];
			sortedArrayOfObj.forEach(function(d){
			  newArr.push(d.label);
			  newValue.push(d.data);
			  new_O_Arr.push(d.new_lable);
			});
			
			chart1.data.datasets[0].dummy = ['(keyword::/"가격-긍정"/"가격")',category,new_O_Arr];
			chart1.data.labels = newArr;
			chart1.data.datasets[0].data = newValue; 
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
			var img_id = document.getElementById("durablity_img");
			getTitle(titleDurablity,valueArr,arr,img_id);
						arrayOfObj = arr.map(function(d,i){
			  return{
			    label:d,
			    new_lable:o_arr[i],
			    data: valueArr[i]||0
			  };
			});
			
			sortedArrayOfObj = arrayOfObj.sort(function(a,b){
			  return b.data-a.data;
			});
			
			newArr = [];
			newValue = [];
			new_O_Arr = [];
			sortedArrayOfObj.forEach(function(d){
			  newArr.push(d.label);
			  newValue.push(d.data);
			  new_O_Arr.push(d.new_lable);
			});
			
			chart2.data.datasets[0].dummy = ['(keyword::/"내구성-추천"/"내구성")',category,new_O_Arr];
			chart2.data.labels = newArr;
			chart2.data.datasets[0].data = newValue; 
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
			var img_id = document.getElementById("design_img");
			getTitle(titleDesign,valueArr,arr,img_id);
	        			arrayOfObj = arr.map(function(d,i){
			  return{
			    label:d,
			    new_lable:o_arr[i],
			    data: valueArr[i]||0
			  };
			});
			
			sortedArrayOfObj = arrayOfObj.sort(function(a,b){
			  return b.data-a.data;
			});
			
			newArr = [];
			newValue = [];
			new_O_Arr = [];
			sortedArrayOfObj.forEach(function(d){
			  newArr.push(d.label);
			  newValue.push(d.data);
			  new_O_Arr.push(d.new_lable);
			});
			
			chart3.data.datasets[0].dummy = ['(keyword::/"디자인-추천"/"디자인")',category,new_O_Arr];
			chart3.data.labels = newArr;
			chart3.data.datasets[0].data = newValue; 
			chart3.update();
		}
	})
}
function getTitle(query,valueArr,arr,img_id){
	 const maxValue = Math.max.apply(Math,valueArr)
		for (idx in valueArr){
			if(valueArr[idx] == maxValue){
				
				var product_name=(arr[idx].trim()+".png")
				console.log(product_name);
				$(query).text(arr[idx])
				$(img_id).attr("src","../img/recommend_img/"+product_name);
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
                        	dummy: '',
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
                            borderWidth: 1,//경계선 굵기,
                            borderRadius: 5
                        }
                    ]
                },
                options: {

					
					scales: {
				      y: {
            ticks: {
                fontSize: 40
            }
				      }
				    },
					onClick: function(evt, element) {
					        if(element.length > 0) {
					            var chart_idx = element[0].index;
					           
					            var product_name = myBarChart.data.datasets[0].dummy[2][chart_idx];
					            var product_category = myBarChart.data.datasets[0].dummy[1];
					            var product_keyword = myBarChart.data.datasets[0].dummy[0];
					            
					    		$(document).ready(function(){
									$('#sampleModal').modal();
									$('#product-name').text(product_name);
									$.ajax({
											type: "GET",
											url: "/reviews",
											data: {product_category:encodeURIComponent(product_category),product_keyword:encodeURIComponent(product_keyword),
													product_name:encodeURIComponent(product_name)},
											success: function(response){
												$('#review_data').empty();
												var parse0 = JSON.parse(response);
												var Json = parse0['es_apiResponse']['es_result'];
												var review_data = "";
													for (idx in Json){
														
														var user_name = Json[idx]['es_title'];
														console.log(user_name);
														var summury = Json[idx]['es_summary'];
														review_data += '<div class="card2 p-3 mt-2"><div class="d-flex justify-content-between align-items-center"><div class="user d-flex flex-row align-items-center">';
														review_data += '<span><small class="font-weight-bold text-primary">'+user_name+'</small> <small class="font-weight-bold">💬 '+summury+'</small></span> </div>'
														review_data += '</div></div>'
													}
							
											    $('#review_data').append(review_data);
											    
											}
										})
								});	
					        }},
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
							
							}
                        },
                        
				      tooltip: {
				        
				        callbacks:{
						
						}
				      },                                             
                   	},
                   	indexAxis: 'y',
                   	          	
                }
                
            });
      return myBarChart;
}
function refreshAnimation(){
		$('#action_price_img').removeClass('slideUp');
        $('#action_price_img').addClass('slideUp').html($('#action_price_img').html());	
		$('#action_durablity_img').removeClass('slideUp');
        $('#action_durablity_img').addClass('slideUp').html($('#action_durablity_img').html());
        $('#action_design_img').removeClass('slideUp');
        $('#action_design_img').addClass('slideUp').html($('#action_design_img').html());
        $('#action_price').removeClass('slideUp');
        $('#action_price').addClass('slideUp').html($('#action_price').html());	
		$('#action_durablity').removeClass('slideUp');
        $('#action_durablity').addClass('slideUp').html($('#action_durablity').html());
        $('#action_design').removeClass('slideUp');
        $('#action_design').addClass('slideUp').html($('#action_design').html());	
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
