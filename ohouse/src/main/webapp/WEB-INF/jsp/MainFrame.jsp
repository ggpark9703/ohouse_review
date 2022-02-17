<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
        content="width=device-width,user-scalable=no,initial-scale=1.0,
        maximum-scale=1.0,minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  <script src="http://d3js.org/d3.v3.min.js"></script>
  <script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>
  <title>Custom Bootstrap 4 card</title>
<link href="<%=request.getContextPath()%>/css/styles.css" rel="stylesheet" type="text/css"/>
<title>Insert title here</title>

</head>
<body>
        <nav class="navbar navbar-light bg-dark fixed-top">
            <ul class="menu1">
                <li onclick="ajaxTest('/Main')">메인화면</li>
                <li onclick="ajaxTest('/recommend')">오늘의 추천</li>
                <li onclick="ajaxTest('/keyword')">오늘의 분석</li>
            </ul>
        </nav>
  <div id="Context" class="view_frame">
    test
  </div>

<script type="text/javascript">
$(document).ready(function(){
	 ajaxTest('/Main');
	});
function ajaxTest(url_page){
    $.ajax({
      type : "GET",
      url : url_page,
      dataType : "text",
      error : function() {
        alert('통신실패!!');
      },
      success : function(data) {
        $('#Context').html(data);
      }

    });
  }
</script>


</body>
</html>