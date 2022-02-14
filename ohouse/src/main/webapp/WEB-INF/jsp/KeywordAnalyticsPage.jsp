<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/kastyles.css" />
<script src="http://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
</head>
<body>
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
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script>
</body>
</html>