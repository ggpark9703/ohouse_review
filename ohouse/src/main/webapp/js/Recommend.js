
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

var context4 = document.getElementById('totalChart').getContext('2d');
var chart4 = getChart_main(context4);
$(document).ready(function(){
 getApi('매트리스');
 getBestItem('매트리스');
 $('#cardtop').src='<%=request.getContextPath()%>/img/recommend_img/DK053 3인용 풀커버 패브릭 소파 5colors.png';
});



function getApi(category){
		$('h5').remove('.review-count');
		$('h5').remove('.product_price2');
		$('#text-animation').text('#'+category);
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
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"추천"/"가격")')},
		success: function(response){
			refreshAnimation();
			var arr = new Array();
			var o_arr = new Array();
            var valueArr = new Array();
			var parse0 = JSON.parse(response);
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			for (idx in Json){
				o_arr[idx] = Json[idx]['label']
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
			var product_ratings = 'product_ratings';
			var product_price = 'product_price1';
			var priceTitle = document.getElementById("titlePrice");
			var img_id = document.getElementById("product_img");
			getTitle(priceTitle,valueArr,arr,img_id,product_ratings,product_price);
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
			
			chart1.data.datasets[0].dummy = ['(keyword::/"추천"/"가격")',category,new_O_Arr];
			chart1.data.labels = newArr;
			chart1.data.datasets[0].data = newValue; 
			chart1.update();
					}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"추천"/"내구성")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			var arr = new Array();
			var o_arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				o_arr[idx] = Json[idx]['label'];
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
			var product_ratings = 'product_ratings2';
			var product_price = 'product_price2';
			var titleDurablity = document.getElementById("titleDurablity");
			var img_id = document.getElementById("durablity_img");
			getTitle(titleDurablity,valueArr,arr,img_id,product_ratings,product_price);
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
			
			chart2.data.datasets[0].dummy = ['(keyword::/"추천"/"내구성")',category,new_O_Arr];
			chart2.data.labels = newArr;
			chart2.data.datasets[0].data = newValue; 
			chart2.update();			
			
		}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"추천"/"디자인")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			var arr = new Array();
			var o_arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				o_arr[idx] = Json[idx]['label'];
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}
			var design_ratings = 'product_ratings3';
			var product_price = 'product_price3';
			var titleDesign = document.getElementById("titleDesign");
			var img_id = document.getElementById("design_img");
			getTitle(titleDesign,valueArr,arr,img_id,design_ratings,product_price);
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
			
			chart3.data.datasets[0].dummy = ['(keyword::/"추천"/"디자인")',category,new_O_Arr];
			chart3.data.labels = newArr;
			chart3.data.datasets[0].data = newValue; 

			chart3.update();

		}
	})
}

function getTitle(query,valueArr,arr,img_id,product_ratings,product_price){
	 const maxValue = Math.max.apply(Math,valueArr)
		for (idx in valueArr){
			if(valueArr[idx] == maxValue){
				getProduct_Info(arr[idx].trim(),product_ratings,product_price)
				var product_name=(arr[idx].trim()+".png")
				if(product_name == "BRUG 스탠드행거 KS1002/LDR.png"){
					product_name = 'BRUG 스탠드행거 KS1002LDR.png';
				}
				$(query).text(arr[idx])
				$(img_id).attr("src","../img/recommend_img/"+product_name);
			}
		}
}
function getTitle_Main(query,valueArr,arr){
	 const maxValue = Math.max.apply(Math,valueArr)
		for (idx in valueArr){
			if(valueArr[idx] == maxValue){
				$(query).text(arr[idx])
				getProduct_Info_Main(arr[idx].trim())
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
                            borderWidth: 0,//경계선 굵기,
                            borderRadius: 5,
                            lineWidth:0,
                            pointHoverRadius: 5,
                            hoverBackgroundColor: [
                                //색상
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192,1)',
                                'rgba(153, 102, 255, 1)'
                            ]
                        }
                    ]
                },
                options: {
					
					onClick: function(evt, element) {
					        if(element.length > 0) {
							    $('h5').remove('.product_price3');
					            var chart_idx = element[0].index;
					           	var design_ratings = 'product_ratings4';
								var product_price = 'product_info_M';
								var product_name_m = myBarChart.data.labels[chart_idx].trim();
					            var product_name = myBarChart.data.datasets[0].dummy[2][chart_idx];
					            var product_category = myBarChart.data.datasets[0].dummy[1];
					            var product_keyword = myBarChart.data.datasets[0].dummy[0];
	
					    		$(document).ready(function(){
									$('#sampleModal').modal();
									$('#product-name').text(product_name);
									getProduct_Info_review(product_name_m,design_ratings,product_price)
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
					scales: {
					            y: {
					                ticks: {
					                    // Include a dollar sign in the ticks
					                    callback: function(value, index, ticks) {
										  var y_label  =  this.getLabelForValue(value)
										      if(index==0){
											  y_label = y_label
										      }
										  
					                      return y_label;
					                    },
										crossAlign: "far",
											
										font:{
											size:14,
											family:'KyoboHandwriting2020A'
										}
										
					                },
					                grid: {
							        	display: false
							     	 }	
					            },
					            x:{
									grid: {
										        	display: false
										     	 }	
						
									}
					        },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
							
							}
                        },
                        
				      tooltip: {
				        
				        callbacks:{
						title : () => null
						}
				      },                                             
                   	},
                   	indexAxis: 'y',
                   	          	
                }
                
            });
      
      return myBarChart;
}
function getChart_main(context){
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
                            borderWidth: 0,//경계선 굵기,
                            borderRadius: 5,
                            lineWidth:0,
                            pointHoverRadius: 5,
                            hoverBackgroundColor: [
                                //색상
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192,1)',
                                'rgba(153, 102, 255, 1)'
                            ]
                        }
                    ]
                },
                options: {
				
					onClick: function(evt, element) {
					        if(element.length > 0) {
							    $('h5').remove('.product_price3');
					            var chart_idx = element[0].index;
					           	var design_ratings = 'product_ratings4';
								var product_price = 'product_info_M';
								var product_name_m = myBarChart.data.labels[chart_idx].trim();
					            var product_name = myBarChart.data.datasets[0].dummy[2][chart_idx];
					            var product_category = myBarChart.data.datasets[0].dummy[1];
					            var product_keyword = myBarChart.data.datasets[0].dummy[0];
					           
					    		$(document).ready(function(){
									$('#sampleModal').modal();
									$('#product-name').text(product_name);
									getProduct_Info_review(product_name_m,design_ratings,product_price)
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
					scales: {
					            y: {
					                ticks: {
					                    // Include a dollar sign in the ticks
					                    callback: function(value, index, ticks) {
										  var y_label  =  this.getLabelForValue(value)
										      if(index==0){
											  y_label = y_label
										      }
										  
					                      return y_label;
					                    },
										crossAlign: "far",
											
										font:{
											size:20,
											family:'KyoboHandwriting2020A'
										}
										
					                },
					                grid: {
							        	display: false
							     	 }	
					            },
					            x:{
									grid: {
										        	display: false
										     	 }	
						
									}
					        },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
							
							}
                        },
                        
				      tooltip: {
				        
				        callbacks:{
						title : () => null
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
	getBestItem('매트리스')
	element2.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.remove('active');
	element.classList.add('active');
});
$("#sofa").click(function(){
	getApi('소파')
	getBestItem('소파')
	element.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.remove('active');
	element2.classList.add('active');
});
$("#hangger").click(function(){
	getApi('행거')
	getBestItem('행거')
	element2.classList.remove('active');
	element.classList.remove('active');
	element4.classList.remove('active');
	element3.classList.add('active');
});
$("#table").click(function(){
	getApi('식탁')
	getBestItem('식탁')
	element.classList.remove('active');
	element2.classList.remove('active');
	element3.classList.remove('active');
	element4.classList.add('active');
});
$('#sampleModal').on('shown.bs.modal', function () {
    $('#review_data').animate({ scrollTop: 0 }, 'fast');
});

function getProduct_Info(product_name,product_ratings,product_price){
		$.ajax({

				type: "GET",
				url: "/products",
				data: {product_name:product_name},
				success: function(response){
					
					var stars='<h5 class="review-count">'+response['product_star']+'<h5>';
					var price = '<h5 class="product_price2">'+'가격: '+response['product_price']+'<h5>';
					price += '<h5 class="product_price2">'+'색상: '+response['product_color']+'<h5>';
					price += '<h5 class="product_price2">'+'주 소재: '+response['product_material']+'<h5>';
					$('#'+product_ratings).append(stars);
					$('#'+product_price).append(price);
				}
			})
}
function getProduct_Info_review(product_name,product_ratings,product_price){
		$.ajax({

				type: "GET",
				url: "/products",
				data: {product_name:product_name},
				success: function(response){
					

					var price ='<h5 class="product_price3">'+'별점: '+response['product_star']+'점<h5>'; 
					price += '<h5 class="product_price3">'+'가격: '+response['product_price']+'<h5>';
					price += '<h5 class="product_price3">'+'색상: '+response['product_color']+'<h5>';
					price += '<h5 class="product_price3">'+'주 소재: '+response['product_material']+'<h5>';

					$('#'+product_price).append(price);
				}
			})
}
function getProduct_Info_Main(product_name){
	 		$.ajax({

				type: "GET",
				url: "/products",
				data: {product_name:product_name},
				success: function(response){
					
					$('#rating_price').text("별점: "+response['product_star']+"점");
					$('#price').text("가격: "+response['product_price']+"원");
					$('#colors').text("색상: "+response['product_color']);
					$('#material').text("주요 소재:"+response['product_material']);
					$('#main_img').attr("src",response['product_image']);

				}
			})
}

function changeForm()
{
	if($("#div1").css("display") == "none"){
		$("#div1").show();
		$("#div2").hide();
		getBestItem('매트리스')
		
	}else
	{
		$("#div1").hide();
		$("#div2").show();
	}
	
}

function getBestItem(category){
		$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(category),filter:encodeURIComponent('(keyword::/"추천"/"가격" OR keyword::/"추천"/"디자인" OR keyword::/"추천"/"내구성")')},
		success: function(response){
		
			var parse0 = JSON.parse(response);
		
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
	
			var arr = new Array();
			var o_arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				o_arr[idx] = Json[idx]['label'];
				arr[idx] = Json[idx]['label'].replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
				valueArr[idx] = Json[idx]['es_property'][0]['value']
			}

			var titleMain = document.getElementById("all_recommend");
			getTitle_Main(titleMain,valueArr,arr);
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
			chart4.data.datasets[0].dummy = ['(keyword::/"추천"/"가격" OR keyword::/"추천"/"디자인" OR keyword::/"추천"/"내구성")',category,new_O_Arr];
			chart4.data.labels = newArr;
			chart4.data.datasets[0].data = newValue; 
			chart4.update();
			
		}
	})
}

function goPage(getCategory){

	var productInfo = document.getElementById(getCategory).innerHTML.replace(/\([^)]*\)/,"").replace(/\d{0,4}(colors|GG132C)$/,"").replace(/\[(.*?)\]/,"");
	$.ajax({

				type: "GET",
				url: "/products",
				data: {product_name:productInfo.trim()},
				success: function(response){
					
				
					location.href = response['product_link']

				}
			})
}