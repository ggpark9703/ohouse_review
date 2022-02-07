
/* var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
}); */
var sum = []
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent("매트리스"),filter:encodeURIComponent('(keyword::/"가격-긍정"/"가격")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			
			var test = "";
			var arr = new Array();
			var valueArr = new Array();
			for (idx in Json){
				test += "  "+Json[idx]['es_property'][0]['value']
				arr[idx] = Json[idx]['label'].substr(0,16);
				valueArr = Json[idx]['es_property'][0]['value']
			}
			$('#price').text(test)
			            var context = document
                .getElementById('priceChart')
                .getContext('2d');
            var myChart = new Chart(context, {
                type: 'bar', // 차트의 형태
                data: { // 차트에 들어갈 데이터
                    labels: arr,
                    datasets: [
                        { //데이터
                            label: 'test1', //차트 제목
                            fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                            data: valueArr,
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
					
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            });
		}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent("매트리스"),filter:encodeURIComponent('(keyword::/"내구성-추천"/"내구성")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			
			var test = "";
			
			for (idx in Json){
				test += "  "+Json[idx]['es_property'][0]['value']
			}
			
			$('#durability').text(test)
			
		}
	})
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent("매트리스"),filter:encodeURIComponent('(keyword::/"디자인-추천"/"디자인")')},
		success: function(response){
			var parse0 = JSON.parse(response);
			console.log(parse0)
			var Json = parse0['es_apiResponse']['ibmsc_facet']['ibmsc_facetValue'];
			
			var test = "";
			
			for (idx in Json){
				test += "  "+Json[idx]['es_property'][0]['value']
			}
			
			$('#design').text(test)
			
		}
	})
});
function getPaging(i){
	console.log(sum[i])
}
