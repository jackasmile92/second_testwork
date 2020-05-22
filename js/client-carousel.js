/*
var arrow_left = document.querySelector('.clients__arrow.left img');
var arrow_right = document.querySelector('.clients__arrow.right img');

var clients_list = document.querySelector('.clients__list');

var client_width = document.querySelector('.client:first-child').offsetWidth;

//tl.to(clients_list, 1, {x: client_width});

arrow_left.onclick = animate(false,client_width);
arrow_right.onclick =  animate(true,client_width);


function animate(direct, client_width){
    console.log(1);
    if (direct == true) {
       TweenMax.to(clients_list, {x: client_width});
    }
    else{
        TweenMax.to(clients_list, {x: -client_width});
    }
  }
*/
var clients_list = document.querySelector('.clients__list');
var client_width = document.querySelector('.client:first-child').offsetWidth;

var client_num = document.getElementsByClassName('client').length;

var position = 0;
var position_max = 0;
var position_min = -client_width * (client_num - 1);

$( window ).resize(function() {
    if(position != 0){
        TweenLite.to(clients_list, 2, {
            x: -position
        });
    }
    client_width = document.querySelector('.client:first-child').offsetWidth;

    client_num = document.getElementsByClassName('client').length;

    position = 0;
    position_max = 0;
    position_min = -client_width * (client_num - 1);
  });
$(".clients__arrow.left").click( function () {
    move_calousel(false);
});

$(".clients__arrow.right").click(function () {
    move_calousel(true);
});

function move_calousel(direct){
    if (direct){
        if (position < position_max ){
         position+=client_width;
        }
    }else{
        if (position > position_min){
         position-=client_width;
        }
    }


        TweenLite.to(clients_list, 2, {
            x: position
        });

        if (position >= position_max ){
            $(".clients__arrow.right").fadeTo("slow", 0.33); 
        }else if(position <= position_min){
            $(".clients__arrow.left").fadeTo("slow", 0.33); 
        }else{
            $(".clients__arrow.right").css('opacity', '1');
            $(".clients__arrow.left").css('opacity', '1');
        }

}