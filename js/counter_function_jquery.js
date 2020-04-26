var my_jquery_function;



jQuery(document).ready(function ($) {

    // this is jQuery function
    $(function () {
        my_jquery_function = function () {
            var time = 4;

            $('.number__title.active').each(function () {

                if ($(this).data('num') > 100) {
                    var i = 0,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        incr = num / 400,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                clearInterval(int);
                            }
                            i += incr;
                        }, step);
                } else if ($(this).data('num') > 20) {
                    var i = 0,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        incr = 2,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                clearInterval(int);
                            }
                            i += incr;
                        }, step);

                } else {
                    var i = 0,
                        num = $(this).data('num'),
                        step = 500 * time / num,
                        incr = 1,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                clearInterval(int);
                            }
                            i += incr;
                        }, step);
                }

            });
        }
    });
});