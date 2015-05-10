// Animation fix
/* timeout = window.setTimeout(slideJumbo, 1000);
function slideJumbo() {
  $("#intro-jumbotron").css("-webkit-animation", "1s unveil");
  $("#intro-jumbotron").css("animation", "1s unveil");
  $("#intro-jumbotron").css("animation-delay", "2s");
} */
timeoutMarginCorrection = window.setTimeout(setCorrectMargin, 3000);
function setCorrectMargin() {
  $("#main-intro").css("-webkit-animation", "1s unmargin");
  $("#main-intro").css("animation", "1s unmargin");
  $("#secondary-intro").css("-webkit-animation", "1s unmargin");
  $("#secondary-intro").css("animation", "1s unmargin");
  $("#main-intro").css("top", "0");
  $("#secondary-intro").css("top", "0");
  $("#main-intro").css("transform", "translate(0, 0)");
  $("#secondary-intro").css("transform", "translate(0, 0)");
}
timeoutHeightCorrection = window.setTimeout(setCorrectHeight, 4000);
function setCorrectHeight() {
	$("#intro-jumbotron").css("height", "40vh");
}
