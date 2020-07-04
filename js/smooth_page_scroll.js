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

var onloadd = false;

function onLoad() {
  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
}

function updateScroller() {

  let resized = scroller.resizeRequest > 0;

  if (resized) {
    let height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }

  let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
  if (onloadd) {
    scrollY = 0;
    window.scroll(0, 0);
    scroller.y = 0;
    scroller.endY = 0;
    onloadd = false;
  }
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


$(window).on("load", function () {
  onloadd = true;
  scroller.y = 0;
  scroller.endY = 0;
});
