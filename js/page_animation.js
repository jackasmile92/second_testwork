var controller = new ScrollMagic.Controller();


/*Clients SecondSlide*/
var tl2 = gsap.timeline();
tl2.addLabel("second_slide");
tl2.to(".header__text",{duration:1,y:-300},"second_slide");
tl2.to("#arrow_img",{opacity:0},"second_slide");
tl2.to("#white_lg",{opacity:1},"second_slide");
tl2.from(".clients__numbers",{duration:1, y:200},"second_slide");
tl2.from(".number",{duration:1, y:200, stagger:0.1},"second_slide");
tl2.from(".number__text",{duration:1, y:200, stagger:0.1},"second_slide");


var Cont={val:0} , NewVal = 10000 ;

tl2.to(Cont,1.7,{duration:2,val:NewVal,roundProps:"val",onUpdate:function(){
    if(Cont.val == 10000){
        document.getElementById("number11").innerHTML = '10 000';
    }else{
        document.getElementById("number11").innerHTML=Cont.val;
    }
}},"second_slide");

var Cont2={val:0} , NewVal2 = 20 ;

tl2.to(Cont2,1.9,{duration:2,val:NewVal2,roundProps:"val",onUpdate:function(){
document.getElementById("number12").innerHTML=Cont2.val
}},"second_slide+=0.1");

var Cont3={val:0} , NewVal3 = 50 ;

tl2.to(Cont3,1.8,{duration:2,val:NewVal3,roundProps:"val",onUpdate:function(){
document.getElementById("number13").innerHTML=Cont3.val
}},"second_slide+=0.2");

var Cont4={val:0} , NewVal4 = 20 ;

tl2.to(Cont4,1.7,{duration:2,val:NewVal4,roundProps:"val",onUpdate:function(){
document.getElementById("number14").innerHTML=Cont4.val
}},"second_slide+=0.3");

tl2.from(".clients__title-row",{duration:1, y:200},"second_slide");
tl2.from(".clients__list",{duration:1, y:300},"second_slide");

var scene2  = new ScrollMagic.Scene({reverse:true});
scene2.setTween(tl2);
//scene2.setPin(".header__bottom");
scene2.triggerElement(".clients");

scene2.addTo(controller);

/*servises third slide*/
var tl3= gsap.timeline();
tl3.addLabel("third_slide");
tl3.to("#black_lg",{opacity:1},"third_slide");
tl3.to("#white_lg",{opacity:0},"third_slide");

var scene3  = new ScrollMagic.Scene({reverse:true});
scene3.setTween(tl3);
scene3.triggerElement(".services");

scene3.addTo(controller);

/*banner01 fourth slide*/
var tl4 = gsap.timeline();
var tl4= gsap.timeline();
tl4.addLabel("fourth_slide");
tl4.to("#black_lg",{opacity:0},"fourth_slide");
tl4.to("#white_lg",{opacity:1},"fourth_slide");
tl4.from(".banner01_text_wrap",{x:-1000},"fourth_slide");

var scene4  = new ScrollMagic.Scene({reverse:true});
scene4.setTween(tl4);
scene4.triggerElement(".banner01");

scene4.addTo(controller);