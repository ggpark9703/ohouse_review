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

<div class="scene">
  <div class="card">
    <div class="card__face card__face--front" style="overflow:scroll; width:350px; height:200px;">
<ul class="list-group">
            <li class="list-group-item">Lorem</li>
            <li class="list-group-item">Ipsum</li>
            <li class="list-group-item">Dolor</li>
            <li class="list-group-item">Lorem</li>
            <li class="list-group-item">Ipsum</li>
            <li class="list-group-item">Dolor</li>
            <li class="list-group-item">Lorem</li>
            <li class="list-group-item">Ipsum</li>
            <li class="list-group-item">Dolor</li>
            <li class="list-group-item">Lorem</li>
            <li class="list-group-item">Ipsum</li>
            <li class="list-group-item">Dolor</li>
            <li class="list-group-item">Lorem</li>
            <li class="list-group-item">Ipsum</li>
            <li class="list-group-item">Dolor</li>
          </ul>
</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>
<script type="text/javascript">
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
</script>
</body>

</html>