function feedbackLogic(e) {
    $("#feedback__top__input").hide();
    $("#feedback__bottom__input").hide();

    let name = $('#feedback__top__input').find('input[name="name"]').val();
    let tel = $('#feedback__top__input').find('input[name="tel"]').val();
    let answer = name + ', спасибо за ваше сообщение! Мы свяжемся с вами по указанному номеру телефона: ' + tel;
    $("#feedback__top__info").html(answer);
    $("#feedback__bottom__info").html(answer);
    e.preventDefault();
}

$(document).ready(function () {
    $("#feedback__top__input").submit(function (e) {
        feedbackLogic(e);
    });

    $("#feedback__bottom__input").submit(function (e) {
        feedbackLogic(e);
    });

});