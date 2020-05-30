window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var isScrolling = false;

var step = 0;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

//var listItems = document.querySelectorAll("#mainContent ol li");
var firstBox = document.querySelector(".header");
var secondBox = document.querySelector(".banner01");
var thirdBox = document.querySelector(".clients");
var feedbackBox = document.querySelector(".feedback");
var stamp = document.querySelector("#firstStamp");
var stamp2 = document.querySelector("#secondStamp");

function scrolling(e) {

  if (isFullyVisible(secondBox)) {
    secondBox.classList.add("active");

  }

  else {
      secondBox.classList.remove("active");
  }

  if (isFullyVisible(firstBox) ) {
    firstBox.classList.remove("active");
    step = 1;
  }
  else{
    firstBox.classList.add("active");
    if(step == 1 ){
    window.scrollBy({ 
        top: 1080, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });
    step =2;
        }
    }

    if (isFullyVisible(thirdBox)) {
        thirdBox.classList.add("active");
        var elements = document.getElementsByClassName("number__title"),
        i,
        len;
        console.log(elements.length);
        for (i = 0, len = elements.length; i < len; i += 1) {
            elements[i].className = "number__title active";
        }
        my_jquery_function();
      } 
    
    if (isFullyVisible(feedbackBox)) {
        feedbackBox.classList.add("active");
        step =3;
    } /*
    if (isPartiallyVisible(feedbackBox)) {
        if(step != 3 ){
        window.scrollBy({ 
        top: 127, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });}
    } */

    if(isFullyVisible(stamp)) {
        stamp.classList.add("active");
    }else{
        stamp.classList.remove("active"); 
    }

    if(isFullyVisible(stamp2)) {
        stamp2.classList.add("active");
    }else{
        stamp2.classList.remove("active"); 
    }


  }



function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top <=   window.innerHeight - 500 ) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
