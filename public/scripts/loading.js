function loading() {
  var text1 = document.getElementById("content");
  var text2 = document.getElementById("hidden-js");
  var changeTextOne = setInterval(textOne, 1000);

  function textOne() {
  	text1.style.opacity = 0;
  	text1.style.animationName = "fadeInOut";
  	text1.style.animationDelay = "8.5s";
  	text1.style.animationDuration = "9s";
  	var changeTextTwo = setInterval(textTwo, 500);
  }

  function textTwo() {
  	text2.style.opacity = 1;
  	text2.style.animationName = "fadeIn";
  	text2.style.animationDelay = "8.5s";
  	text2.style.animationDuration = "9s";
  	$('#content').css({display: 'none'})
    var fadeSecond = setInterval(fadeTwo, 2000);
  }

  function fadeTwo() {
    text2.style.opacity = 0;
  	text2.style.animationName = "fadeInOut";
  	text2.style.animationDelay = "8.5s";
  	text2.style.animationDuration = "5s";
    var nextPage = setInterval(Page2, 500);
  }

  function Page2() {
  	window.location.href = "question.html"
  }
 }

loading();
