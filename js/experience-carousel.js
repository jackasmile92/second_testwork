
var experience__bottom = document.querySelector('.experience__bottom');
var exp_width = document.querySelector('.experience__point:first-child').offsetWidth;

var exp_num = document.getElementsByClassName('experience__point').length;

var poz = 0;
var poz_max = 0;
var poz_min = -exp_width * (exp_num - 1);

$( window ).resize(function() {
    if(poz != 0){
        TweenLite.to(experience__bottom, 2, {
            x: -poz
        });
    }
    exp_width = document.querySelector('.experience__point:first-child').offsetWidth;

    exp_num = document.getElementsByClassName('experience__point').length;

    poz = 0;
    poz_max = 0;
    poz_min = -exp_width * (exp_num - 1);
  });
$(".experience__arrow.left").click( function () {
    move_calousel(false);
});

$(".experience__arrow.right").click(function () {
    move_calousel(true);
});

function move_calousel(direct){
    if (direct){
        if (poz < poz_max ){
         poz+=exp_width;
        }
    }else{
        if (poz > poz_min){
         poz-=exp_width;
        }
    }


        TweenLite.to(experience__bottom, 2, {
            x: poz
        });

        if (poz >= poz_max ){
            $(".experience__arrow.right").fadeTo("slow", 0.33); 
        }else if(poz <= poz_min){
            $(".experience__arrow.left").fadeTo("slow", 0.33); 
        }else{
            $(".experience__arrow.right").css('opacity', '1');
            $(".experience__arrow.left").css('opacity', '1');
        }

}