$( window ).ready(function() {
    $(".popup__feedback").hide();}
);

$(".header__button").click(function(){
    $(".popup__feedback").toggle();
});
$(".popup__cross").click(function(){
    $(".popup__feedback").hide();
});

