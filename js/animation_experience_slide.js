var tl6 = gsap.timeline();
tl6.addLabel("sixth_slide");
//fixed button logo animation
tl6.to("#black_lg", {
    opacity: 0
}, "sixth_slide");
tl6.to("#white_lg", {
    opacity: 1
}, "sixth_slide");

//slider animation
tl6.from('.experience__bottom', {
    duration: 1,
    x: 1000
}, "sixth_slide");
//title animation
tl6.from('.experience__title', {
    duration: 1.5,
    opacity: .2
}, "sixth_slide");


var scene6 = new ScrollMagic.Scene({
    reverse: true
});
scene6.setTween(tl6);
scene6.triggerElement(".experience");

scene6.addTo(controller);