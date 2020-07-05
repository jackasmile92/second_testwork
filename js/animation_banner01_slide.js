let tl4 = gsap.timeline();
tl4.addLabel("fourth_slide");
//fixed button logo animation
tl4.to("#black_lg", {
    opacity: 0
}, "fourth_slide");
tl4.to("#white_lg", {
    opacity: 1
}, "fourth_slide");

//text appear animation
tl4.from(".banner01__text", {
    duration:.5,
    x: -1000,
    ease: "power1.out"
}, "fourth_slide");

let scene4 = new ScrollMagic.Scene({
    reverse: true
});
scene4.setTween(tl4);
scene4.triggerElement(".banner01");

scene4.addTo(controller);