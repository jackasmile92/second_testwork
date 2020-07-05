function feedbackLogic(e, whichForm) {

    let name = '';
    let tel = '';
    let text = '';
    let ifError = false;

    if (whichForm == 'top') {
        name = $('#feedback__top__input').find('input[name="name"]').val();
        tel = $('#feedback__top__input').find('input[name="tel"]').val();
        text = $('#feedback__top__input').find('input[name="text"]').val();


        if (name === '') {
            $("#top_name").css("border-bottom-color", "red");
            ifError = true;
        } else {
            $("#top_name").css("border-bottom-color", "#01da00");
            ifError = false;
        }


        if (tel === '') {
            $("#top_tel").css("border-bottom-color", "red");
            ifError = true;
        } else {
            if (tel.length < "+7(000)000-00-00".length) {
                
                $("#top_tel").css("border-bottom-color", "red");
                ifError = true;
            } else {
                $("#top_tel").css("border-bottom-color", "#01da00");
                ifError = false;
            }
        }

        if (text === '') {
            $("#top_text").css("border-bottom-color", "red");
            ifError = true;
        } else {
            $("#top_text").css("border-bottom-color", "#01da00");
            ifError = false;
        }

    } else {
        name = $('#feedback__bottom__input').find('input[name="name"]').val();
        tel = $('#feedback__bottom__input').find('input[name="tel"]').val();
        text = $('#feedback__bottom__input').find('input[name="text"]').val();
        if (name === '') {
            $("#bottom_name").css("border-bottom-color", "red");
            ifError = true;
        } else {
            $("#bottom_name").css("border-bottom-color", "#01da00");
            ifError = false;
        }

        if (tel === '') {
            $("#bottom_tel").css("border-bottom-color", "red");
            ifError = true;
        } else {
            if (tel.length < "+7(000)000-00-00".length) {
                $("#bottom_tel").css("border-bottom-color", "red");
                ifError = true;
            } else {
                $("#bottom_tel").css("border-bottom-color", "#01da00");
                ifError = false;
            }
        }

        if (text === '') {
            $("#bottom_text").css("border-bottom-color", "red");
            ifError = true;
        } else {
            $("#bottom_text").css("border-bottom-color", "#01da00");
            ifError = false;
        }
    }

    if (!ifError) {
        $("#feedback__top__input").hide();
        $("#feedback__bottom__input").hide();
        let answer = 'Cпасибо за ваше сообщение! Мы свяжемся с вами по указанному номеру телефона ';
        $("#feedback__top__info").html(answer);
        $("#feedback__bottom__info").html(answer);
    }
    e.preventDefault();
}

$(document).ready(function () {
    $("#feedback__top__input").submit(function (e) {
        feedbackLogic(e, 'top');
    });

    $("#feedback__bottom__input").submit(function (e) {
        feedbackLogic(e, 'bottom');
    });


    IMask(
        document.getElementById('top_tel'), {
            mask: '+{7}(000)000-00-00'
        });
});