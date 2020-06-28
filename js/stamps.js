var duration = 1;


$(".servises__stamp.one").on('mouseenter',function(){
    TweenLite.to(".servises_text.one", duration, {scaleX:1.1, scaleY:1.1, opacity: 1} );
});
$(".servises__stamp.one").on('mouseout',function(){
    TweenLite.to(".servises_text.one", duration, {scaleX:.8, scaleY:.8, opacity: 0} );
});
$(".servises__stamp.two").on('mouseenter',function(){
    TweenLite.to(".servises_text.two", duration, {scaleX:1.1, scaleY:1.1, opacity: 1} );
});
$(".servises__stamp.two").on('mouseout',function(){
    TweenLite.to(".servises_text.two", duration, {scaleX:.8, scaleY:.8, opacity: 0} );
});