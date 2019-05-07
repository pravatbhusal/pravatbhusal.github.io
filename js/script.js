//canvas text carousel
var canvasText = document.getElementById("front-page-canvas-text");
var i = 0;

function updateCanvasText() {
  if (i == 0) {
    canvasText.innerHTML = "Professional software development, a click away.";
    i++;
  } else if (i == 1) {
    canvasText.innerHTML = "Here to make your business ventures easier.";
    i++;
  } else if (i == 2) {
    canvasText.innerHTML = "Providing a variety of skill-sets.";
    i++;
  } else if (i == 3) {
    canvasText.innerHTML = "Making sure your needs are secured.";
    i = 0;
  }
  setTimeout(updateCanvasText, 2500);
}
updateCanvasText();

//google maps
var myLatLng = {
  lat: 30.2849,
  lng: -97.7341
};
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

//mobile navbar collapse
document.getElementById("mobile-navbar-collapse").addEventListener("click", function() {
  document.getElementById("navbar").classList.toggle("isActive");
});
