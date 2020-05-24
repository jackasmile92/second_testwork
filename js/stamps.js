$(".servises__stamp.one").on('mouseenter',function(){
    TweenLite.to(".servises_text.one", 1, {scaleX:1.1, scaleY:1.1, opacity: 1} );
});
$(".servises__stamp.one").on('mouseout',function(){
    TweenLite.to(".servises_text.one", 1, {scaleX:1, scaleY:1, opacity: 0} );
});
$(".servises__stamp.two").on('mouseenter',function(){
    TweenLite.to(".servises_text.two", 1, {scaleX:1.1, scaleY:1.1, opacity: 1} );
});
$(".servises__stamp.two").on('mouseout',function(){
    TweenLite.to(".servises_text.two", 1, {scaleX:1, scaleY:1, opacity: 0} );
});