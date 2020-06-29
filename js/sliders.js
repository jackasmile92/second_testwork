function tinySlider() {
    tns({
        container: '.clients__list',
        prevButton: '.clients__arrow.left img',
        nextButton: '.clients__arrow.right img',
        loop: false,
        nav: false,
        speed: 500,
        autoWidth:false,
        preventScrollOnTouch: 'auto',
        touch: true,
        swipeAngle: 35,
        responsive: {
            1920: {
                items: 3,
                fixedWidth: 500,
            },
            1440: {
                items: 3,
                fixedWidth: 500,
            },
            1024: {
                items: 3,
                fixedWidth: 407,
            },
            768: {
                items: 2,
                fixedWidth: 407,
            },
            320: {
                items: 2,
                fixedWidth: 407,
            }
        }
    });

    tns({
        container: '.experience__bottom',
        prevButton: '.experience__arrow.left img',
        nextButton: '.experience__arrow.right img',
        loop: false,
        nav: false,
        speed: 500,
        preventScrollOnTouch: 'auto',
        autoWidth:false,
        touch: true,
        swipeAngle: 35,
        responsive: {
            1920: {
                items: 3,
                fixedWidth: 500,
            },
            1440: {
                items: 3,
                fixedWidth: 500,
            },
            1024: {
                items: 3,
                fixedWidth: 407,
            },
            768: {
                items: 2,
                fixedWidth: 407,
            },
            320: {
                items: 2,
                fixedWidth: 407,
            }
        }
    });
}

$(document).ready(tinySlider());


$("#clients__arrow_right").click(function () {
    if(this.getAttribute('aria-disabled') == "true"){
        $(".clients__arrow.right img").fadeTo("slow", 0.33); 
    }else{
        $(".clients__arrow.right img").fadeTo("slow", 1);
        $(".clients__arrow.left img").fadeTo("slow", 1);
    }

});


$("#clients__arrow_left").click(function () {
    if(this.getAttribute('aria-disabled') == "true"){
        $(".clients__arrow.left img").fadeTo("slow", 0.33); 
    }else{
        $(".clients__arrow.right img").fadeTo("slow", 1);
        $(".clients__arrow.left img").fadeTo("slow", 1);
    }

});

        $("#experience__arrow_right").click(function () {
    if(this.getAttribute('aria-disabled') == "true"){
        $(".experience__arrow.right img").fadeTo("slow", 0.33); 
    }else{
        $(".experience__arrow.right img").fadeTo("slow", 1);
        $(".experience__arrow.left img").fadeTo("slow", 1);
    }

});


$("#experience__arrow_left").click(function () {
    if(this.getAttribute('aria-disabled') == "true"){
        $(".experience__arrow.left img").fadeTo("slow", 0.33); 
    }else{
        $(".experience__arrow.right img").fadeTo("slow", 1);
        $(".experience__arrow.left img").fadeTo("slow", 1);
    }

});