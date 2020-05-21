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

var position = 0;

$(".clients__arrow.left").click( function () {
    position-=client_width;
    TweenLite.to(clients_list, 2, {
        x: position
    });



});

$(".clients__arrow.right").click(function () {
    position+=client_width;
    TweenMax.to(clients_list, 2,{
        x: position
    });

    
});