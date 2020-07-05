let tl7 = gsap.timeline();
tl7.addLabel("seven_slide");

//hide fixed part
tl7.to(".header__top", {
    opacity: 0
}, "seven_slide");

// change background color
tl7.to(".viewport", {
    duration: 1,
    backgroundColor: "black"
}, "seven_slide");
tl7.to("#viewport_background", {
    duration: 1,
    opacity: 0.4
}, "seven_slide");

//feedback elements
tl7.from("#feedback__bottom__title", {
    duration: 1,
    y: 200
}, "seven_slide");
tl7.from("#feedback__bottom__form", {
    duration: 1,
    y: 200
}, "seven_slide+=0.2");
tl7.from("#feedback__bottom__button", {
    duration: 1,
    y: 100
}, "seven_slide+=0.3");

let scene7 = new ScrollMagic.Scene({
    reverse: true
});
scene7.setTween(tl7);
scene7.triggerElement(".feedback__bottom");

scene7.addTo(controller);