<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/commendstyles.css" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>
<body> 

 <div class="card-wrapper">
	   <div class="card">
	    <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap" style="height:250px;width:250px;border-radius: 70%;overflow: hidden;margin-top:-50px;">
	      <div class="card-body">
	        <h5 class="card-title" id="titlePrice">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="priceChart"></canvas>
	         </div>
	      </div>
	   </div>
	   vs
	   <div class="card">
	    <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap" style="height:250px;width:250px;border-radius: 70%;overflow: hidden;margin-top:-50px;">
	      <div class="card-body">
	        <h5 class="card-title" id="titleDurablity">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="durablityChart"></canvas>
	         </div>
	      </div>
	   </div>
	   vs
	   <div class="card">
	    <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap" style="height:250px;width:250px;border-radius: 70%;overflow: hidden;margin-top:-50px;">
	      <div class="card-body">
	        <h5 class="card-title" id="titleDesign">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="designChart"></canvas>
	         </div>
	      </div>
	   </div>
  </div>
<nav class="navbar fixed-bottom navbar-expand-sm navbar" style="padding-bottom:30px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <button type="button" class="btn btn-primary" id="mattress">🛏️ 매트리스</button>
      <button type="button" class="btn btn-primary" id="sofa" >🛋️ 소파</button>
      <button type="button" class="btn btn-primary" id="hangger"  >👔 행거</button>
      <button type="button" class="btn btn-primary" id="table" >🧇 식탁</button>

    </nav>  
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>
</html>
