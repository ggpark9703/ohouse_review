<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html class="wide wow-animation" lang="en">

<head>
	<title>오늘의 집중분석</title>
	<meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="img/favicon.ico" type="img/x-icon">
    
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:300i,400,400i,700%7CMontserrat:400,500,600,700%7CPlayfair+Display:400,700,700i%7COswald:400,700,700i">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/styles.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/fonts.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/style.css">
    <style>.ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}</style>
  </head>

<body>

  <section class="section swiper-container swiper-slider swiper-slider-1" data-loop="false" data-autoplay="5500" data-simulate-touch="false" data-slide-effect="fade">

	<!-- 가성비 -->
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-slide-bg="https://i.imgur.com/oxz4zQu.png">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-sm-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100">가장 <span class="text-primary">가성비</span>좋은 <br><span class="divider"></span>가구를 원한다면?
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">#가성비_갑 #합리적_소비 #착한가격</p><a class="button button-default-outline" data-caption-animate="fadeInUp" data-caption-delay="450" onclick="ajaxTest('/recommend')">Go Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 내구성 -->
      <div class="swiper-slide" data-slide-bg="https://i.imgur.com/qbxyYis.png">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100">가장 <span class="text-primary">튼튼</span>한 <br><span class="divider"></span>가구를 원한다면?
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">#내구성_만점 #튼튼 #탄탄 #짱짱</p><a class="button button-default-outline" data-caption-animate="fadeInUp" data-caption-delay="450" onclick="ajaxTest('/recommend')">Go Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 디자인 -->
      <div class="swiper-slide" data-slide-bg="https://i.imgur.com/gUbu3il.png">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100">가장 <span class="text-primary">예뻐</span>보이는 <br><span class="divider"></span>가구를 원한다면?
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">#디자인_최고 #분위기_끝판왕 #색감_깡패</p><a class="button button-default-outline" data-caption-animate="fadeInUp" data-caption-delay="450" onclick="ajaxTest('/recommend')">Go Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- Swiper Pagination -->
    <div class="swiper-pagination"></div>
    <div class="swiper-counter"></div>
    <!-- Swiper Navigation-->
    <div class="swiper-button-prev">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="30px" viewbox="0 0 17 30" enable-background="new 0 0 17 30" xml:space="preserve">
        <g>
          <defs>
            <rect id="SVGID_111_" width="17" height="30"></rect>
          </defs>
          <clippath id="SVGID_2222_">
            <use xlink:href="#SVGID_111_" overflow="visible"></use>
          </clippath>
          <line clip-path="url(#SVGID_2222_)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" y1="0.833" x2="8.5" y2="29.167"></line>
          <polyline clip-path="url(#SVGID_2222_)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="									    16.15,20.833 8.5,29.167 0.85,20.833 	"></polyline>
        </g>
      </svg>
    </div>
    <div class="swiper-button-next">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="30px" viewbox="0 0 17 30" enable-background="new 0 0 17 30" xml:space="preserve">
        <g>
          <defs>
            <rect id="SVGID_1_" width="17" height="30"></rect>
          </defs>
          <clippath id="SVGID_2_">
            <use xlink:href="#SVGID_1_" overflow="visible"></use>
          </clippath>
          <line clip-path="url(#SVGID_2_)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" y1="29.167" x2="8.5" y2="0.833"></line>
          <polyline clip-path="url(#SVGID_2_)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="									    0.85,9.167 8.5,0.833 16.15,9.167 	"></polyline>
        </g>
      </svg>
    </div>
  </section>
  
  <section class="section section-lg bg-gray-100">
   <div class="container">
     <div class="row row-50 align-items-lg-center justify-content-xl-between">
       <div class="col-lg-6">
         <div class="box-images">
           <div class="box-images-item box-images-1" data-parallax-scroll="{&quot;y&quot;: 20, &quot;x&quot;: 30,  &quot;smoothness&quot;: 30 }"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162683824477008052.jpg?gif=1&w=640&h=640&c=c" alt="" width="282" height="282"/>
           </div>
           <div class="box-images-item box-images-2" data-parallax-scroll="{&quot;y&quot;: 20,  &quot;smoothness&quot;: 30 }"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163826557174187513.png?gif=1&w=640&h=640&c=c" alt="" width="240" height="369"/>
           </div>
           <div class="box-images-item box-images-3" data-parallax-scroll="{&quot;y&quot;: 20, &quot;x&quot;: -30, &quot;smoothness&quot;: 30 }"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163875327222440461.jpg?gif=1&w=640&h=640&c=c" alt="" width="259" height="369"/>
           </div>
           <div class="box-images-item box-images-4" data-parallax-scroll="{&quot;y&quot;: -20,  &quot;smoothness&quot;: 30 }"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162675561580408252.jpg?gif=1&w=640&h=640&c=c" alt="" width="266" height="266"/>
           </div>
         </div>
       </div>
       <div class="col-lg-6 col-xl-5">
         <h2 class="heading-decorate"></span>당신을 위한 <span class="text-primary">오늘의 </span><br><span class="divider"></span><span class="text-primary">집</span>중 분석
         </h2>
         <p class="big text-gray-800">엉망으로 섞여있던 리뷰들을 당신이 궁금해할 키워드들에 맞춰 정리해뒀어요.</p>
         <p class="text-spacing-60">#당신의 #당신에_의한 #당신을_위한 #맞춤_리뷰</p><a class="button button-default-outline" type="button" onclick="ajaxTest('/keyword')">Go Now</a>
       </div>
     </div>
   </div>
 </section>

  
  	<!-- java script -->
    <script src="<%=request.getContextPath()%>/js/core.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/script.js"></script>
    
</body>

</html>