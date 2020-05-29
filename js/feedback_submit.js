$(document).ready(function(){
    $("#feedback__top__input").submit(function(e){
      $("#feedback__top__input").hide();

        var name =  $('#feedback__top__input').find('input[name="name"]').val();

      $("#feedback__top__info").html(name);
      e.preventDefault();
    });
    
  });