let socialMediaIcons = ['vk', 'facebook', 'insta', 'ok', 'twitter', 'switch', 'youtube'];
let socialMediaIconsMobile = ['switch', 'vk', 'youtube', 'facebook', 'insta', 'ok', 'twitter'];
let socialMediaOrder = [];

function generateIcons() {
    let iconsCode = '';
    let codeParts = ['<div class="footer_icon"><a><object type="image/svg+xml" data="./src/img/svg/', '.svg" class="',
        '" > </object></a > </div>'
    ];

    for (let i = 0; i < socialMediaOrder.length; i++) {

        iconsCode += codeParts[0] + socialMediaOrder[i] + codeParts[1] + socialMediaOrder[i] + codeParts[2];
    }

return iconsCode;


}

function addFooterIcons(isMobile = false) {
    socialMediaOrder = [];
    if (isMobile) {
        socialMediaOrder = socialMediaIconsMobile;

    } else {
        socialMediaOrder = socialMediaIcons;
    }

    let footer = document.getElementById("footer__icons");
    footer.innerHTML = "";

    footer.innerHTML = generateIcons();

}

function pageIcons(){
    let width = $(window).width();

    if(width > 768 ){
        addFooterIcons(false);
    }else{
        addFooterIcons(true);
    }
}

$(document).ready(function () {
    pageIcons();
});

$( window ).resize(function() {
    pageIcons();
});