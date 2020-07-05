let tl3 = gsap.timeline();
//fixed button logo animation
tl3.addLabel("third_slide");
tl3.to("#black_lg", {
    opacity: 1
}, "third_slide");
tl3.to("#white_lg", {
    opacity: 0
}, "third_slide");

//background color animation
tl3.to(".viewport", {
    duration: 1,
    backgroundColor: "white"
}, "third_slide");
tl3.to("#viewport_background", {
    duration: 1,
    opacity: 0.1
}, "third_slide");

let scene3 = new ScrollMagic.Scene({
    reverse: true
});
scene3.setTween(tl3);
scene3.triggerElement(".services");

scene3.addTo(controller);


//mediahub slide
let tl3_1 = gsap.timeline();
tl3_1.addLabel("third_slide_one");
//title animation
tl3_1.from("#p_t_h", {
    duration: .5,
    y: 200
}, "third_slide_one");
//list animation
tl3_1.from("#p_l_h", {
    duration: .5,
    y: 200
}, "third_slide_one+=.1");
//image animation
tl3_1.from("#p_i_h", {
    duration: .5,
    y: 200
}, "third_slide_one+=.1");


let scene3_1 = new ScrollMagic.Scene({
    reverse: true
});
scene3_1.setTween(tl3_1);
scene3_1.triggerElement("#s_p_h");

scene3_1.addTo(controller);


//archieve slide
let tl3_2 = gsap.timeline();
tl3_2.addLabel("third_slide_two");
//title animation
tl3_2.from("#p_t_a", {
    duration: .5,
    y: 200
}, "third_slide_two");
//list animation
tl3_2.from("#p_l_a", {
    duration: .5,
    y: 200
}, "third_slide_two+=.1");
//image animation
tl3_2.from("#p_i_a", {
    duration: .5,
    y: 200
}, "third_slide_two+=.1");

//samp 1 animation
if (width > 1439) {
    tl3_2.from("#s_r_1", {
        duration: 2,
        rotation: 360
    }, "third_slide_two+=.1");
    tl3_2.from("#st_1", {
        duration: .5,
        y: 200
    }, "third_slide_two+=.1");
}

let scene3_2 = new ScrollMagic.Scene({
    reverse: true
});
scene3_2.setTween(tl3_2);
scene3_2.triggerElement("#s_p_a");

scene3_2.addTo(controller);


//signal slide
let tl3_3 = gsap.timeline();
tl3_3.addLabel("third_slide_three");
//title animation
tl3_3.from("#p_t_s", {
    duration: .5,
    y: 200
}, "third_slide_three");
//list animation
tl3_3.from("#p_l_s", {
    duration: .5,
    y: 200
}, "third_slide_three+=.1");
//image animation
tl3_3.from("#p_i_s", {
    duration: .5,
    y: 200
}, "third_slide_three+=.1");

let scene3_3 = new ScrollMagic.Scene({
    reverse: true
});
scene3_3.setTween(tl3_3);
scene3_3.triggerElement("#s_p_s");

scene3_3.addTo(controller);

//promo slide
let tl3_4 = gsap.timeline();
tl3_4.addLabel("third_slide_fourth");
//title animation
tl3_4.from("#p_t_p", {
    duration: .5,
    y: 200
}, "third_slide_fourth");
//list animation
tl3_4.from("#p_l_p", {
    duration: .5,
    y: 200
}, "third_slide_fourth+=.1");
//image animation
tl3_4.from("#p_i_p", {
    duration: .5,
    y: 200
}, "third_slide_fourth+=.1");

//samp 1 animation
if (width > 1439) {
    tl3_4.from("#s_r_2", {
        duration: 2,
        rotation: 360
    }, "third_slide_fourth+=.1");
    tl3_4.from("#st_2", {
        duration: .5,
        y: 200
    }, "third_slide_fourth+=.1");
}

let scene3_4 = new ScrollMagic.Scene({
    reverse: true
});
scene3_4.setTween(tl3_4);
scene3_4.triggerElement("#s_p_p");

scene3_4.addTo(controller);