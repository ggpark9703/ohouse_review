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
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/fonts.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/style.css">
    <style>.ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}</style>
  </head>

<body>

  <section class="section swiper-container swiper-slider swiper-slider-1" data-loop="false" data-autoplay="5500" data-simulate-touch="false" data-slide-effect="fade">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-slide-bg="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-sm-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100"><span class="text-primary">Solari</span> Beauty Salon <br><span class="divider"></span>Beauty as a gift
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">Solari Beauty Salon offers the latest and highest quality services for you and all your family members. We specialize in all beauty treatments and our team is fully professional and innovative, from makeup services to hairstyling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide" data-slide-bg="https://images.unsplash.com/photo-1616627408664-00fa6151580c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100"><span class="text-primary">Experience </span> the Best<br><span class="divider"></span>Beauty Services
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about your style and look!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide" data-slide-bg="https://images.unsplash.com/photo-1573879500655-98f2012dd1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhhbmdlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <h1 class="heading-decorate" data-caption-animate="fadeInUp" data-caption-delay="100">Professional <span class="text-primary">Beauty</span> <br><span class="divider"></span>Care for Everyone
                </h1>
                <p class="lead" data-caption-animate="fadeInUp" data-caption-delay="250">Our beauty salon treatments will help you relax after a long and stressful day. At Solari, you can pamper yourself and enjoy the benefits of professional beauty care available at affordable price. Enjoy your life with our high-quality beauty services.</p>
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
    <script src="<%=request.getContextPath()%>/js/core.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/script.js"></script>	
</body>

</html>