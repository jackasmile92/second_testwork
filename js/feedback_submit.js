$(document).ready(function () {
    $("#feedback__top__input").submit(function (e) {
        $("#feedback__top__input").hide();
        $("#feedback__bottom__input").hide();

        var name = $('#feedback__top__input').find('input[name="name"]').val();
        var tel = $('#feedback__top__input').find('input[name="tel"]').val();
        var answer = name + ', спасибо за ваше сообщение! Мы свяжемся с вами по указанному номеру телефона: ' + tel;
        $("#feedback__top__info").html(answer);
        $("#feedback__bottom__info").html(answer);
        e.preventDefault();
    });

    $("#feedback__bottom__input").submit(function (e) {
        $("#feedback__top__input").hide();
        $("#feedback__bottom__input").hide();

        var name = $('#feedback__bottom__input').find('input[name="name"]').val();
        var tel = $('#feedback__bottom__input').find('input[name="tel"]').val();
        var answer = name + ', спасибо за ваше сообщение! Мы свяжемся с вами по указанному номеру телефона: ' + tel;
        $("#feedback__top__info").html(answer);
        $("#feedback__bottom__info").html(answer);
        e.preventDefault();
    });

});