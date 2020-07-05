let tl2 = gsap.timeline();
tl2.addLabel("second_slide");

//header elements animation on out from header
if (width > 1023) {
    tl2.to(".header__pike", {
        duration: 1,
        x: -2000,
        opacity: 0.7
    }, "second_slide");
    tl2.to(".header__media", {
        duration: 1,
        x: 2000,
        opacity: 0.7
    }, "second_slide");
}

tl2.to(".header__text", {
    duration: 1,
    y: -300,
    opacity: 0
}, "second_slide");


//fixed button logo animation
tl2.to("#arrow_img", {
    opacity: 0
}, "second_slide");
tl2.to("#white_lg", {
    opacity: 1
}, "second_slide");


//number element animation
tl2.from(".clients__numbers", {
    duration: 1,
    y: 200
}, "second_slide");
tl2.from(".number", {
    duration: 1,
    y: 200,
    stagger: 0.1
}, "second_slide");
tl2.from(".number__text", {
    duration: 1,
    y: 200,
    stagger: 0.1
}, "second_slide");


//counter animation
let Cont = {
        val: 0
    },
    NewVal = 10000;

tl2.to(Cont, 1.7, {
    duration: 2,
    val: NewVal,
    roundProps: "val",
    onUpdate: function () {
        if (Cont.val == 10000) {
            document.getElementById("number11").innerHTML = '10 000';
        } else {
            document.getElementById("number11").innerHTML = Cont.val;
        }
    }
}, "second_slide");

let Cont2 = {
        val: 0
    },
    NewVal2 = 20;

tl2.to(Cont2, 1.9, {
    duration: 2,
    val: NewVal2,
    roundProps: "val",
    onUpdate: function () {
        document.getElementById("number12").innerHTML = Cont2.val
    }
}, "second_slide+=0.1");

let Cont3 = {
        val: 0
    },
    NewVal3 = 50;

tl2.to(Cont3, 1.8, {
    duration: 2,
    val: NewVal3,
    roundProps: "val",
    onUpdate: function () {
        document.getElementById("number13").innerHTML = Cont3.val
    }
}, "second_slide+=0.2");

let Cont4 = {
        val: 0
    },
    NewVal4 = 20;

tl2.to(Cont4, 1.7, {
    duration: 2,
    val: NewVal4,
    roundProps: "val",
    onUpdate: function () {
        document.getElementById("number14").innerHTML = Cont4.val
    }
}, "second_slide+=0.3");


//slider appearing animation
tl2.from(".clients__title-row", {
    duration: 1,
    y: 400
}, "second_slide+=0.5");
tl2.from(".clients__list", {
    duration: 1,
    y: 400
}, "second_slide+=.5");

let scene2 = new ScrollMagic.Scene({
    reverse: true
});
scene2.setTween(tl2);
scene2.triggerElement(".clients");

scene2.addTo(controller);