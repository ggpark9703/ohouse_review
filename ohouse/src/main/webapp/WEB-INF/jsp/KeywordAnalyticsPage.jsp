<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/kastyles.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
</head>

<body>
<br>
<p class="subtitle" id="productName">Q4 유로탑 롤팩 매트리스 2size</p>
<!--WordCloud-->
<div class="card-wrapper">
      <div class="card">
        <div id="wordcloud" style="width:600px;height:600px"></div>
      </div>
       <div class="card" style="width:600px;height:600px">
       <div><p id = "Pword">오늘</p>의 키워드</div>
        <div id="review" class="review">
        </div>
      </div>
</div>

<!-- 네비게이션 바 -->
<nav class="navbar fixed-bottom navbar-expand-sm navbar" style="padding-bottom:100px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>

<i class="bi bi-house-heart-fill"></i>
	<div class="dropdown">
      <button type="button" class="btn btn-primary" id="mattress">
      <span class="dropbtn_icon"></span>
      🛏️ 매트리스</button>
      <div class="dropdown-content">
        <a id="asset1">1</a>
        <a id="asset2">2</a>
        <a id="asset3">3</a>
        <a id="asset4">4</a>
        <a id="asset5">5</a>
      </div>
      </div>
      <div class="dropdown">
      <button type="button" class="btn btn-primary" id="sofa" >
      <span class="dropbtn_icon"></span>
	  🛋️ 소파</button>
	  <div class="dropdown-content">
        <a id="asset6">1</a>
        <a id="asset7">2</a>
        <a id="asset8">3</a>
        <a id="asset9">4</a>
        <a id="asset10">5</a>
      </div>
      </div>
	  <div class="dropdown">
      <button type="button" class="btn btn-primary" id="hangger">
      <span class="dropbtn_icon"></span>
      👔 행거</button>
      <div class="dropdown-content">
        <a id="asset11">1</a>
        <a id="asset12">2</a>
        <a id="asset13">3</a>
        <a id="asset14">4</a>
        <a id="asset15">5</a>
      </div>
      </div>
      <div class="dropdown">
      <button type="button" class="btn btn-primary" id="table" >
      <span class="dropbtn_icon"></span>
      🧇 식탁</button>
      <div class="dropdown-content">
        <a id="asset16">1</a>
        <a id="asset17">2</a>
        <a id="asset18">3</a>
        <a id="asset19">4</a>
        <a id="asset20">5</a>
      </div>
      </div>
      
</nav>

<script type="text/javascript" src = "<%=request.getContextPath()%>/js/KeyWord.js"></script> 
</body>
</html>