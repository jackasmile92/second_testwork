let tl5 = gsap.timeline();
tl5.addLabel("fifth_slide");
//banner01 text dissapear animation
tl5.to(".banner01_text_wrap", {
    duration: .5,
    x:1000
}, "fifth_slide");


//fixed button logo animation
tl5.to("#black_lg", {
    opacity: 1
}, "fifth_slide");
tl5.to("#white_lg", {
    opacity: 0
}, "fifth_slide");

//banner title animation
tl5.from(".banner02__title", {
    duration: .5,
    y: 100
}, "fifth_slide");

//triangle animation
if (width > 1023) {
    tl5.from(".trig_one", {
        duration: .5,
        opacity: 0
    }, "fifth_slide+=0.5");
    tl5.from(".trig_two", {
        duration: .5,
        opacity: 0
    }, "fifth_slide+=1 ");
    tl5.from(".trig_three", {
        duration: .5,
        opacity: 0
    }, "fifth_slide+=1.5");
}
//text animation
tl5.from(".banner02__point", {
    duration: .5,
    opacity: 0,
    x: 200,
    stagger: 0.5
}, "fifth_slide+=2");

let scene5 = new ScrollMagic.Scene({
    reverse: true
});
scene5.setTween(tl5);
scene5.triggerElement(".banner02");

scene5.addTo(controller);