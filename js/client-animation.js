var tl2 = gsap.timeline();
        tl2.addLabel("beginning");
        tl2.to(".header__pike",{duration:1.5, x:2000, opacity:0},"beginning");
        tl2.to(".header__media",{duration:1.5, x: -2000, opacity:0},"beginning");
        tl2.from(".clients__numbers",{duration:1, y:100},"beginning");
        tl2.from(".number",{duration:1, y:100, stagger:0.1},"beginning");
        tl2.from(".number__text",{duration:1, y:100, stagger:0.1},"beginning");


        var Cont={val:0} , NewVal = 10000 ;

        tl2.to(Cont,2,{duration:2,val:NewVal,roundProps:"val",onUpdate:function(){
        document.getElementById("number11").innerHTML=Cont.val
        }},"beginning");

        var Cont2={val:0} , NewVal2 = 20 ;

        tl2.to(Cont2,2,{duration:2,val:NewVal2,roundProps:"val",onUpdate:function(){
        document.getElementById("number12").innerHTML=Cont2.val
        }},"beginning");

        var Cont3={val:0} , NewVal3 = 50 ;

        tl2.to(Cont3,2,{duration:2,val:NewVal3,roundProps:"val",onUpdate:function(){
        document.getElementById("number13").innerHTML=Cont3.val
        }},"beginning");

        var Cont4={val:0} , NewVal4 = 20 ;

        tl2.to(Cont4,2,{duration:2,val:NewVal4,roundProps:"val",onUpdate:function(){
        document.getElementById("number14").innerHTML=Cont4.val
        }},"beginning");

        tl2.from(".clients__title-row",{duration:1, y:200},"beginning");
        tl2.from(".clients__list",{duration:1, y:300},"beginning");

        var scene2  = new ScrollMagic.Scene({reverse:true});
        scene2.setTween(tl2);
        scene2.setPin(".header__bottom");
        scene2.triggerElement(".clients");

        scene2.addTo(controller);