
$(document).ready(function (){

  function anim(){
    $('.jq-anim').each(function(i , element){
      $(element).animate({backgroundPositionY: '-=500px'},parseInt($(element).data('speed')),'linear', anim);
    });
  }
  anim();
});
