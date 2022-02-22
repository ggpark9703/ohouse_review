<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/kastyles.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
</head>

<body>

<p class="subtitle" id="productName">Q4 유로탑 롤팩 매트리스 2size</p>
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
<nav class="navbar fixed-bottom navbar-expand-sm navbar" style="padding-bottom:100px;">
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
        <a id="asset1">1</a>
        <a id="asset2">2</a>
        <a id="asset3">3</a>
        <a id="asset4">4</a>
        <a id="asset5">5</a>
      </div>
</div>
</nav>

<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script> 
</body>
</html>