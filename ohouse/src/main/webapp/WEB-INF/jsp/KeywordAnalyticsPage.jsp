<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/kastyles.css" />
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>

</head>
<body>
<!--WordCloud-->

<div class="card">
        <div id="wordcloud" align="center"></div>
      </div>

<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script> 
</body>
</html>