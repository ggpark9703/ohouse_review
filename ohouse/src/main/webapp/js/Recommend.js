
/* var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
}); */
var sum = []
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent("책상")},
		success: function(response){
			var jObj = JSON.parse(response);
			var jp_1= jObj.es_apiResponse.ibmsc_facet.ibmsc_facetValue;
			console.log(jp_1)
			for(var i in jp_1){
				console.log(jp_1[i].label)
				console.log(jp_1[i].weight)
				//수정해야할것 카테고리 받아가야함 
				var correlation= parseFloat(jp_1[i].es_property[0].value);
				if (correlation>1.3){
					$(".card-title").text(jp_1[i].label)
					$.ajax({
						type: "GET",
						url: "/reviews",
						data:{
							  keyword:'"'+encodeURIComponent(jp_1[i].label)+'"',
							  category:encodeURIComponent("책상")
							  },
						success: function(data){
							var jObj2 = JSON.parse(data);
							var jp_2 = jObj2.es_apiResponse.es_result
							var review_data = ""
							for(var i in jp_2){
								sum.push(jp_2[i].es_summary);
								var summury = jp_2[i].es_summary.substr(0,17)+"...";
								review_data += "<li onclick='getPaging("+i+")'>"+summury
								review_data += jp_2[i].es_title+"</li>"
							}
							$(".mylist").append(review_data)
						}
					})
				}
			}
			
		}
	})
});
function getPaging(i){
	console.log(sum[i])
}
function categorySort(s){
		$.ajax({
		type: "GET",
		url: "/api",
		data: {category:encodeURIComponent(s)},
		success: function(response){
			var jObj = JSON.parse(response);
			var jp_1= jObj.es_apiResponse.ibmsc_facet.ibmsc_facetValue;
			console.log(jp_1)
			for(var i in jp_1){
				console.log(jp_1[i].label)
				console.log(jp_1[i].weight)
				//수정해야할것 카테고리 받아가야함 
				var correlation= parseFloat(jp_1[i].es_property[0].value);
				if (correlation>1.3){
					$(".card-title").text(jp_1[i].label)
					$.ajax({
						type: "GET",
						url: "/reviews",
						data:{
							  keyword:'"'+encodeURIComponent(jp_1[i].label)+'"',
							  category:encodeURIComponent(s)
							  },
						success: function(data){
							var jObj2 = JSON.parse(data);
							var jp_2 = jObj2.es_apiResponse.es_result
							var review_data = ""
							for(var i in jp_2){
								sum.push(jp_2[i].es_summary);
								var summury = jp_2[i].es_summary.substr(0,17)+"...";
								review_data += "<li onclick='getPaging("+i+")'>"+summury
								review_data += jp_2[i].es_title+"</li>"
							}
							$(".mylist").children().remove();
							$(".mylist").append(review_data)
						}
					})
				}
			}
			
		}
	})
}
