// Animation fix
timeoutMarginCorrection = window.setTimeout(setCorrectMargins, 3000);
function setCorrectStyles() {
  $("#main-intro").css("-webkit-animation", "1s unmargin");
  $("#main-intro").css("animation", "1s unmargin");
  $("#secondary-intro").css("-webkit-animation", "1s unmargin");
  $("#secondary-intro").css("animation", "1s unmargin");
  $("#main-intro").css("top", "0");
  $("#secondary-intro").css("top", "0");
  $("#main-intro").css("transform", "translate(0, 0)");
  $("#secondary-intro").css("transform", "translate(0, 0)");
}
timeoutMarginCorrection = window.setTimeout(setCorrectHeight, 4000);
function setCorrectHeight() {
  $("#intro-jumbotron").css("height", "40vh");
}
