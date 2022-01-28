<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
  <title>Custom Bootstrap 4 card</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link href="<%=request.getContextPath()%>/css/styles.css" rel="stylesheet" type="text/css"/>
</head>

<style>

  .container {
    font-size: 14px;
    color: #666666;
    font-family: "Open Sans";
  }
</style>

<body>
<div class="card" style="width: 24rem;">
  <img src="<%=request.getContextPath()%>/img/testimg.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
    <ul class="mylist">
	</ul>
	</p>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#" onclick="categorySort('책상')">책상</a>
    <a href="#" onclick="categorySort('침대')">침대</a>
  </div>
</div>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/Recommend.js"></script>
</body>

</html>