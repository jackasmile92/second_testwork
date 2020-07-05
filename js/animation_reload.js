
 function getWidthInterval(width) {
    if (width > 200 && width < 767) {
        return 1;
    }
    if (width >= 768 && width < 1023) {
        return 2;
    }
    if (width >= 1024 && width < 1439) {
        return 3;
    }
    if (width >= 1440 && width < 1919) {
        return 4;
    }
    if (width >= 1920) {
        return 5;
    }

}

var curInterval = getWidthInterval($(window).width());

 $(window).resize(function () {
    let newInterval =  getWidthInterval($(window).width());
    if (newInterval !== curInterval) {
        location.reload();
        curInterval = newInterval;
    }
});