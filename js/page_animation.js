 var controller = new ScrollMagic.Controller();

function page_animation(){

    var width = $(window).width();
    var height = $(window).height();

    var props; 
    if(width > 1500){
        props = 1;
    }

    if(width <= 1500 && width > 1200 ){
        props = 1440/1920;
    }
    
    if(width <= 1200 && width > 850 ){
        props = 1024/1920;
    }

    if(width > 850 ){

        var tl = gsap.timeline({repeat: 1,autoRemoveChildren: true});

        tl.addLabel("pause","0.5");
        tl.from("#curtain",{duration: 2, height:height},"pause");
        tl.addLabel("header1","-=2");
        tl.from(".header__top",{duration: 2, opacity:0},"pause+=1");
        tl.from(".header__arrow",{duration:2, y:  props * 50, opacity:0.8}, "header1");
        tl.from(".header__pike",{duration:2, x:  props * 300, opacity:0.7}, "header1");
        tl.from(".header__media",{duration:2, x:  props * (-300), opacity:0.7}, "header1");
        tl.from(".header__text",{duration:2, y:  props * 50, delay:0.5,opacity:0.7}, "header1");
        tl.from(".header__button",{duration:2, y:  props * 50, delay:0.5,opacity:0.7}, "header1");
        var scene = new ScrollMagic.Scene({reverse:false});
        scene.setTween(tl);
        scene.offset();
        scene.triggerHook('onEnter');
        scene.addTo(controller);
        

        /*Clients SecondSlide*/
        var tl2 = gsap.timeline();
        tl2.addLabel("second_slide");
        tl2.to(".header__bottom",{duration:1,y:  props *300},"second_slide");
        tl2.to(".header__pike",{duration:1.5, x:  props * (-2000) ,y:  props *(-1000), opacity:0.7},"second_slide+=.5");
        tl2.to(".header__media",{duration:1.5, x:  props * 2000,y:  props *(-1000),  opacity:0.7},"second_slide+=.5");
        tl2.to(".header__text",{duration:1,y:  props *(-300), opacity:0},"second_slide");
        tl2.to("#arrow_img",{opacity:0},"second_slide");
        tl2.to("#white_lg",{opacity:1},"second_slide");
        tl2.from(".clients__numbers",{duration:1,y:  props *200},"second_slide");
        tl2.from(".number",{duration:1,y:  props *200, stagger:0.1},"second_slide");
        tl2.from(".number__text",{duration:1,y:  props *200, stagger:0.1},"second_slide");
        


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

        tl2.from(".clients__title-row",{duration:1,y:  props *200},"second_slide");
        tl2.from(".clients__list",{duration:1,y:  props *300},"second_slide");

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
        tl3.to(".viewport",{duration:1, backgroundColor:"white"},"third_slide");
        tl3.to("#viewport_background",{duration:1, opacity:0.1},"third_slide");

        var scene3  = new ScrollMagic.Scene({reverse:true});
        scene3.setTween(tl3);
        scene3.triggerElement(".services");

        scene3.addTo(controller);

        var tl3_1= gsap.timeline();
        tl3_1.addLabel("third_slide_one");
        tl3_1.from("#p_t_h",{duration:.5,y:  props *200},"third_slide_one");
        tl3_1.from("#p_l_h",{duration:.5,y:  props *200},"third_slide_one+=.1");
        tl3_1.from("#p_i_h",{duration:.5,y:  props *200},"third_slide_one+=.1");


        var scene3_1  = new ScrollMagic.Scene({reverse:true});
        scene3_1.setTween(tl3_1);
        scene3_1.triggerElement("#s_p_h");

        scene3_1.addTo(controller);

        var tl3_2= gsap.timeline();
        tl3_2.addLabel("third_slide_two");
        tl3_2.from("#p_t_a",{duration:.5,y:  props *200},"third_slide_two");
        tl3_2.from("#p_l_a",{duration:.5,y:  props *200},"third_slide_two+=.1");
        tl3_2.from("#p_i_a",{duration:.5,y:  props *200},"third_slide_two+=.1");
        tl3_2.from("#s_r_1",{duration:2,rotation:360},"third_slide_two+=.1");
        tl3_2.from("#st_1",{duration:.5,y:  props *200},"third_slide_two+=.1");

        var scene3_2  = new ScrollMagic.Scene({reverse:true});
        scene3_2.setTween(tl3_2);
        scene3_2.triggerElement("#s_p_a");

        scene3_2.addTo(controller);

        var tl3_3= gsap.timeline();
        tl3_3.addLabel("third_slide_three");
        tl3_3.from("#p_t_s",{duration:.5,y:  props *200},"third_slide_three");
        tl3_3.from("#p_l_s",{duration:.5,y:  props *200},"third_slide_three+=.1");
        tl3_3.from("#p_i_s",{duration:.5,y:  props *200},"third_slide_three+=.1");

        var scene3_3  = new ScrollMagic.Scene({reverse:true});
        scene3_3.setTween(tl3_3);
        scene3_3.triggerElement("#s_p_s");

        scene3_3.addTo(controller);

        var tl3_4= gsap.timeline();
        tl3_4.addLabel("third_slide_fourth");
        tl3_4.from("#p_t_p",{duration:.5,y:  props *200},"third_slide_fourth");
        tl3_4.from("#p_l_p",{duration:.5,y:  props *200},"third_slide_fourth+=.1");
        tl3_4.from("#p_i_p",{duration:.5,y:  props *200},"third_slide_fourth+=.1");
        tl3_4.from("#s_r_2",{duration:2,rotation:360},"third_slide_fourth+=.1");
        tl3_4.from("#st_2",{duration:.5,y:  props *200},"third_slide_fourth+=.1");

        var scene3_4  = new ScrollMagic.Scene({reverse:true});
        scene3_4.setTween(tl3_4);
        scene3_4.triggerElement("#s_p_p");

        scene3_4.addTo(controller);


        /*banner01 fourth slide*/
        var tl4 = gsap.timeline();
        var tl4= gsap.timeline();
        tl4.addLabel("fourth_slide");
        tl4.to("#black_lg",{opacity:0},"fourth_slide");
        tl4.to("#white_lg",{opacity:1},"fourth_slide");
        tl4.from(".banner01_text_wrap",{x:  props *(-1000)},"fourth_slide");
        
        //tl4.to(".viewport",{duration:1, backgroundColor:"black"},"fourth_slide");
        tl4.to("#viewport_background",{duration:1, opacity:0.4},"fourth_slide");

        var scene4  = new ScrollMagic.Scene({reverse:true});
        scene4.setTween(tl4);
        scene4.triggerElement(".banner01");

        scene4.addTo(controller);

        /*banner02 fifth slide*/
        var tl5 = gsap.timeline();
        var tl5= gsap.timeline();
        tl5.addLabel("fifth_slide");
        tl5.to("#black_lg",{opacity:1},"fifth_slide");
        tl5.to("#white_lg",{opacity:0},"fifth_slide");
        tl5.from(".banner02__title",{duration:.5,y:  props *100},"fifth_slide");
        tl5.from(".trig_one",{duration:.5,opacity:0},"fifth_slide+=0.5");
        tl5.from(".trig_two",{duration:.5,opacity:0},"fifth_slide+=1 ");
        tl5.from(".trig_three",{duration:.5,opacity:0},"fifth_slide+=1.5");
        tl5.from(".banner02__point",{duration:.5, opacity:0, x:  props *200, stagger:0.5},"fifth_slide+=2");
        //tl5.to(".viewport",{duration:1, backgroundColor:"white"},"fifth_slide");
        tl5.to("#viewport_background",{duration:1, opacity:0.1},"fifth_slide");
        var scene5  = new ScrollMagic.Scene({reverse:true});
        scene5.setTween(tl5);
        scene5.triggerElement(".banner02");

        scene5.addTo(controller);

        /*experience sixth slide*/
        var tl6 = gsap.timeline();
        var tl6= gsap.timeline();
        tl6.addLabel("sixth_slide");
        tl6.to("#black_lg",{opacity:0},"sixth_slide");
        tl6.to("#white_lg",{opacity:1},"sixth_slide");
        tl6.from('.experience__bottom',{duration:1,x:  props *1000},"sixth_slide");
        tl6.from('.experience__title',{duration:1.5,opacity:.2},"sixth_slide");
        
        tl6.to(".viewport",{duration:1, backgroundColor:"black"},"sixth_slide");
        tl6.to("#viewport_background",{duration:1, opacity:0.4},"sixth_slide");
        var scene6  = new ScrollMagic.Scene({reverse:true});
        scene6.setTween(tl6);
        scene6.triggerElement(".experience");

        scene6.addTo(controller);

        /*feedback seven slide */
        var tl7 = gsap.timeline();
        var tl7= gsap.timeline();
        tl7.addLabel("seven_slide");
        tl7.to(".header__top",{opacity:0},"seven_slide");

        tl7.from("#feedback__bottom__title",{duration:1,y:  props *200},"seven_slide");
        tl7.from("#feedback__bottom__form",{duration:1,y:  props *200},"seven_slide+=0.2");
        tl7.from("#feedback__bottom__button",{duration:1,y:  props *100},"seven_slide+=0.3");

        var scene7  = new ScrollMagic.Scene({reverse:true});
        scene7.setTween(tl7);
        scene7.triggerElement(".feedback__bottom");

        scene7.addTo(controller);

    }else{
        var tl2 = gsap.timeline();
        tl2.addLabel("second_slide");
        tl2.to(".header__text",{duration:1,y:  props *-300, opacity:0},"second_slide");

        var scene2  = new ScrollMagic.Scene({reverse:true});
        scene2.setTween(tl2);
        scene2.triggerElement(".clients");
        scene2.addTo(controller);

        var tl7 = gsap.timeline();
        var tl7= gsap.timeline();
        tl7.addLabel("seven_slide");
        tl7.to(".header__top",{opacity:0},"seven_slide");

        var scene7  = new ScrollMagic.Scene({reverse:true});
        scene7.setTween(tl7);
        scene7.triggerElement(".feedback__bottom");

        scene7.addTo(controller);

    }
}
$(document).ready(function () {
    page_animation();
});

$( window ).resize(function() {
    location.reload();
});