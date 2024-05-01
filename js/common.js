$(document).ready(function(){//시작

  $(".ham").click(function(){
    $(".gnb-wrap").animate({
      right:"0"
    },1000);
  });

  $(".close").click(function(){
    $(".gnb-wrap").animate({
      right:"-100%"
    },1000);
  });

  $(".depth2").hide()

  $(".depth1").click(function(){
    $(".depth2").stop().slideUp();

    if($(this).children(".depth2").css("display")=="block"){
      $(this).children(".depth2").slideUp();
      $(".moreless").attr("src", "img/plus.png");
    }else{
      $(this).children(".depth2").slideDown();
      $(".moreless").attr("src", "img/plus.png");
      $(this).find(".moreless").attr("src", "img/minus.png");
    }
  });

});//끝