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
<div class="card-wrapper">
      <div class="card">
        <div id="wordcloud" style="width:500px;height:500px"></div>
      </div>
       <div class="card" style="width:500px;height:500px">
        <div id="review">
        </div>
      </div>
</div>
<!-- 네비게이션 바 -->
<nav class="navbar fixed-bottom navbar-expand-sm navbar" style="padding-bottom:30px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
</button>
<div class="dropdown">
<i class="bi bi-house-heart-fill"></i>

      <button type="button" class="btn btn-primary" id="mattress">
      <span class="dropbtn_icon"></span>
      🛏️ 매트리스</button>
      <button type="button" class="btn btn-primary" id="sofa" >
	  🛋️ 소파</button>
      <button type="button" class="btn btn-primary" id="hangger">
      👔 행거</button>
      <button type="button" class="btn btn-primary" id="table" >
      🧇 식탁</button>
      <div class="dropdown-content">
        <a id="asset1">product1</a>
        <a id="asset2">product2</a>
        <a id="asset3">product3</a>
        <a id="asset4">product4</a>
        <a id="asset5">product5</a>
      </div>
</div>
</nav>

<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script> 
</body>
</html>