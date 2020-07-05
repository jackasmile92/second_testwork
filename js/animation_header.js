var controller = new ScrollMagic.Controller();

let tl = gsap.timeline();
var width = $(window).width();

tl.addLabel("pause", "0");
tl.from("#curtain", {
    duration: 1,
    height: '100vh'
}, "pause");
tl.addLabel("header1", "-=1");
tl.from(".header__top", {
    duration: 1,
    opacity: 0
}, "pause+=1");
tl.from(".header__arrow", {
    duration: 1,
    y: 50,
    opacity: 0.8
}, "header1");
if (width > 1023) {
    tl.from(".header__pike", {
        duration: 1,
        x: 300,
        opacity: 0.7
    }, "header1");
    tl.from(".header__media", {
        duration: 1,
        x: -300,
        opacity: 0.7
    }, "header1");
}
tl.from(".header__text", {
    duration: 1,
    y: 50,
    delay: 0.5,
    opacity: 0.7
}, "header1");
tl.from(".header__button", {
    duration: 1,
    y: 50,
    delay: 0.5,
    opacity: 0.7
}, "header1");
let scene = new ScrollMagic.Scene({
    reverse: false
});
scene.setTween(tl);
scene.offset();
scene.triggerHook('onEnter');
scene.addTo(controller);