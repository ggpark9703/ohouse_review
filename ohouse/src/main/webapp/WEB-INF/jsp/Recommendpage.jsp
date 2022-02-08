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
 <div class="row hidden-md-up">
 
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
         <div style="width: 100%; height: 100%;">
	       <canvas id="priceChart"></canvas>
         </div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  
vs
  
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text" id="durability">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  
vs


    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text" id="design">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
</div>
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>
</html>
