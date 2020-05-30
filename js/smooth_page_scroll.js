//https://greensock.com/forums/topic/17300-smooth-page-scroll/



var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.getElementById("scrolling_part"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

var maxScroll = scroller.target.clientHeight;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);


function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}


$(window).on("load", function() {
  if(scroller.y != 0){
    $(".header__text").hide();
  }
});

$(window).on("scroll", function() {

  if($("#scrolling_part").position().top > -250){
    $(".header__text").show();
  }
});
