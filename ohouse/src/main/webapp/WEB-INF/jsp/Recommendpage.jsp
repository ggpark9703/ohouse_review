<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/commendstyles.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>
<body>
<div class="space_text">
  <div class="text-animation" id="text-animation">
    매트리스
  </div>
</div>
 <div class="card-wrapper">
	   <div class="card">
	      <div class="card-body">
	         <h5 class="subtitle">❝가성비 좋은❞</h5>
	      	    <img class="card-img-top" id="product_img" src="" alt="Card image cap">
	        <h5 class="card-title" id="titlePrice"></h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="priceChart"></canvas>
	         </div>
	      </div>
	   </div>
	  <span class="vs">vs</span>
	   <div class="card">
	      <div class="card-body">
	      	<h5 class="subtitle">❝내구성 튼튼한❞</h5>
	      	    <img class="card-img-top" id="durablity_img" src="" alt="Card image cap">
	        <h5 class="card-title" id="titleDurablity">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="durablityChart"></canvas>
	         </div>
	      </div>
	   </div>
	 <span class="vs">vs</span>
	   <div class="card">
	      <div class="card-body">
	     	 <h4 class="subtitle">❝디자인이 이쁜❞</h4>
	      	    <img class="card-img-top" id="design_img" src="" alt="Card image cap">
	        <h5 class="card-title" id="titleDesign">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="designChart"></canvas>
	         </div>
	      </div>
	   </div>
  </div>
        <!--Bootstrap Modal-->
        <div class="modal fade" id="sampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!--Modal Header-->   
                    <div class="modal-header">
                        <h5 class="modal-title" id="product-name">Modal Title</h5>
                    </div>
                    <!--Modal Body -->
                    <div class="modal-body" id="review_data">
                    </div>
                    <!--Modal Footer-->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
<nav class="navbar fixed-bottom navbar-expand-sm navbar" style="padding-bottom:30px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
<i class="bi bi-house-heart-fill"></i>
      <button type="button" class="btn btn-primary" id="mattress">🛏️ 매트리스</button>
      <button type="button" class="btn btn-primary" id="sofa" >🛋️ 소파</button>
      <button type="button" class="btn btn-primary" id="hangger"  >👔 행거</button>
      <button type="button" class="btn btn-primary" id="table" >🧇 식탁</button>

    </nav>  
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>
</html>
