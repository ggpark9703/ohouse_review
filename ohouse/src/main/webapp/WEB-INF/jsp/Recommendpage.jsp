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
  </div>
</div>
 <div class="card-wrapper">
	   <div class="card">
	      <div class="card-body">
	      	 <div class="slide-effect">
	      	 	<div class="slideUp">
		          <h5 class="subtitle">#가성비</h5>
		          <span class="subtitle-hash">가격:104900<br>색상:화이트+그레이<br>소재:소프트 우레탄폼,하드 우레탄폼</span>
		     	</div>
	         </div>
			  <div class="slide-effect" id="action_price_img">
	      	 	<div class="slideUp">
	      	    <img class="card-img-top" id="product_img" src="" alt="Card image cap">
	      	    </div>
	      	  </div>
	        <div class="slide-effect" id="action_price">
	        <div class="slideUp"><h5 class="card-title" id="titlePrice"></h5></div>
	        </div>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="priceChart"></canvas>
	         </div>
	      </div>
	   </div>
	   <div class="card">
	      <div class="card-body">
	      	 <div class="slide-effect">
	      	 	<div class="slideUp">	      
			      	<h5 class="subtitle">#내구성</h5>
			      	<span class="subtitle-hash"></span>
			     </div>
			  </div>
			  <div class="slide-effect" id="action_durablity_img">
	      	 	<div class="slideUp">	
	      	     <img class="card-img-top" id="durablity_img" src="" alt="Card image cap">
	      	    </div>
			  </div>
	        	        <div class="slide-effect" id="action_durablity">
	        <div class="slideUp"><h5 class="card-title" id="titleDurablity"></h5></div>
	        </div>
	         <div style="width: 100%; height: 100%;">
		       <canvas id="durablityChart"></canvas>
	         </div>
	      </div>
	   </div>
	   <div class="card">
	      <div class="card-body">
	      	 <div class="slide-effect">
	      	 	<div class="slideUp">	 
		     	 <h4 class="subtitle">#디자인</h4>
		     	 <span class="subtitle-hash"></span>
		     	</div>
		     </div>
			  <div class="slide-effect" id="action_design_img">
	      	 	<div class="slideUp">
	      	    <img class="card-img-top" id="design_img" src="" alt="Card image cap">
	      	    </div>
	      	   </div>
	        <div class="slide-effect" id="action_design">
	        <div class="slideUp"><h5 class="card-title" id="titleDesign"></h5></div>
	        </div>

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
                        <button class="btn btn-danger btn-circle btn-circle-sm " data-dismiss="modal"><i class="fa fa-close" style="font-size:24px"></i></button>
             </div>
                    <!--Modal Body -->
                    <div class="modal-body" id="review_data">
                    </div>
                    <!--Modal Footer-->
                    <div class="modal-footer">
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
	<a href="#" class="icon facebook"><span>해당 상품과 키워드(가성비,내구성,디자인)간의 연관성을 바탕으로 추천도가 측정됩니다.<br><br>차트 항목 클릭 시 관련 리뷰를 확인 할 수 있습니다.</span></a>	
    </nav>  
<script type="text/javascript" src = "<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>
</html>
