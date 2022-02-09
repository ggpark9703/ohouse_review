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
	      <div class="card-body">
	         <h5 class="subtitle">가성비</h5>
	      	    <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap">
	        <h5 class="card-title" id="titlePrice"></h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="priceChart"></canvas>
	         </div>
	      </div>
	   </div>
	  <span class="vs">vs</span>
	   <div class="card">
	      <div class="card-body">
	      	<h5 class="subtitle">내구성</h5>
	      <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap">
	        <h5 class="card-title" id="titleDurablity">Special title treatment</h5>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="durablityChart"></canvas>
	         </div>
	      </div>
	   </div>
	 <span class="vs">vs</span>
	   <div class="card">
	      <div class="card-body">
	     	 <h4 class="subtitle">디자인</h4>
	      <img class="card-img-top" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162269626749505136.jpg?gif=1&w=640&h=640&c=c" 
	    alt="Card image cap" >
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
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <!--Modal Body -->
                    <div class="modal-body" id="product-description">
                        <p>Modal body content will be here.</p>
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

      <button type="button" class="btn btn-primary" id="mattress">🛏️ 매트리스</button>
      <button type="button" class="btn btn-primary" id="sofa" >🛋️ 소파</button>
      <button type="button" class="btn btn-primary" id="hangger"  >👔 행거</button>
      <button type="button" class="btn btn-primary" id="table" >🧇 식탁</button>

    </nav>  
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>
</html>
