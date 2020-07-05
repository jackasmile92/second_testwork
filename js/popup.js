$(".header__button").click(function(){
    TweenLite.from(".popup__feedback__wrapper", .5, {
        opacity: .5
    });
    $(".popup__feedback__wrapper").toggle();

});
$(".popup__cross").click(function(){
    $(".popup__feedback__wrapper").hide();
});

