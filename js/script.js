//canvas text carousel
var canvasText = document.getElementById("front-page-canvas-text");
var i = 0;
function updateCanvasText() {
  if(i == 0) {
    canvasText.innerHTML = "Professional software development, a click away.";
    i++;
  } else if(i == 1) {
    canvasText.innerHTML = "Here to make your business ventures easier.";
    i++;
  } else if(i == 2) {
    canvasText.innerHTML = "Providing a variety of skill-sets.";
    i++;
  } else if(i == 3) {
    canvasText.innerHTML = "Making sure your needs are secured.";
    i = 0;
  }
  setTimeout(updateCanvasText, 2500);
}
updateCanvasText();

//progress bars
var html5css3Bar = new RadialProgress(document.getElementById("skills-skill-html5css3"),
{progress:0.90, colorFg:"#E4512A", colorBg:"grey", thick:2.5, fixedTextSize:0.3});
var javascriptBar = new RadialProgress(document.getElementById("skills-skill-javascript"),
{progress:0.50, colorFg:"#F0DB4F", colorBg:"grey", thick:2.5, fixedTextSize:0.3});
var mysqlBar = new RadialProgress(document.getElementById("skills-skill-mysql"),
{progress:0.80, colorFg:"#00618A", colorBg:"grey", thick:2.5, fixedTextSize:0.3});
var javaBar = new RadialProgress(document.getElementById("skills-skill-java"),
{progress:0.65, colorFg:"#F69314", colorBg:"grey", thick:2.5, fixedTextSize:0.3});
var phpBAR = new RadialProgress(document.getElementById("skills-skill-php"),
{progress:0.60, colorFg:"#777BB3", colorBg:"grey", thick:2.5, fixedTextSize:0.3});
var pythonBar = new RadialProgress(document.getElementById("skills-skill-python"),
{progress:0.10, colorFg:"#F8B721", colorBg:"grey", thick:2.5, fixedTextSize:0.3});

//google maps
var myLatLng = {lat: 32.926077, lng: -96.9487462};
var map = new google.maps.Map(document.getElementById('google-maps'), {
  zoom: 10,
  center: myLatLng
});
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: "Residence"
});

//scroll reveal
new WOW().init();

//smooth scroll on anchor links
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeInOutCubic",
  offset: 75,
  speed: 500
});
