var clientState = 0;

function moveClients(direction){
    if (direction =="right"  && clientState == 0){
        var element = document.getElementsByClassName("clients__list");
        element[0].classList.remove("moveright");
        element[0].classList.add("moveleft");
        clientState = 1;
    }

    if (direction =="left"  && clientState == 1){
        var element = document.getElementsByClassName("clients__list");
        element[0].classList.remove("moveleft");
        element[0].classList.add("moveright");
        clientState = 0;
    }

    if (clientState == 1){
        var elem = document.getElementById("arrow_1");
        elem.style.opacity = 0.3;
        var elem1 = document.getElementById("arrow_2");
        elem1.style.opacity = 1;
    }

    if (clientState == 0){
        var elem = document.getElementById("arrow_1");
        elem.style.opacity = 1;
        var elem1 = document.getElementById("arrow_2");
        elem1.style.opacity =0.3;
    }

}
var elem = document.getElementById("arrow_1");
elem.onclick = function(){
    moveClients("right");
};

var elem2 = document.getElementById("arrow_2");
elem2.onclick = function(){
    moveClients("left");
};
