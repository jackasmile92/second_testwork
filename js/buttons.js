$(".feedback__button").on('mouseenter',function(){
    TweenLite.to(".feedback__button", .5 , { opacity: .5} );
});
$(".feedback__button").on('mouseout',function(){
    TweenLite.to(".feedback__button", .5 , {opacity: 1} );
});

$(".header__button").on('mouseenter',function(){
    TweenLite.to(".header__button", .5 , { opacity: .5} );
});
$(".header__button").on('mouseout',function(){
    TweenLite.to(".header__button", .5 , {opacity: 1} );
});
