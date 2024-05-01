$(document).ready(function(){//시작

  $(".ham").click(function(){
    $(".gnb-wrap").animate({
      right:"0"
    },1000);
  });

  $(".search-bar").hide();
  $(".menu-header .search, .buttons .search-button").click(function(){
    $(".search-bar").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search-bar").fadeOut();
  });

  $(".close").click(function(){
    $(".gnb-wrap").animate({
      right:"-100%"
    },1000);

    $(".depth2").hide();
    $(".moreless").attr("src", "img/plus.png");
  });

  $(".depth2").hide();

  $(".depth1 > a").click(function(){
   
    if($(this).next(".depth2").css("display")=="block"){
      $(this).next(".depth2").slideUp();
      $(".moreless").attr("src", "img/plus.png");
    }else{
      $(".depth2").slideUp();
      $(this).next(".depth2").slideDown();
      $(".moreless").attr("src", "img/plus.png");
      $(this).find(".moreless").attr("src", "img/minus.png");
    }
    
  });



  $(window).resize(function(){
    if($(window).width() > 1200) {
    
      $("header .gnb-wrap").css("right","0");
      $(".depth2").hide();
      $(".moreless").attr("src", "img/plus.png");

      } else {
        $("header .gnb-wrap").css("right","-100%");
        $(".depth2").hide();
        $(".moreless").attr("src", "img/plus.png");
      }
  });

  var button = $('#hoverButton');

  // 마우스 오버 효과
  button.mousemove(function(event) {
    var buttonWidth = $(this).outerWidth();
    var buttonHeight = $(this).outerHeight();
    var mouseX = event.pageX - $(this).offset().left;
    var mouseY = event.pageY - $(this).offset().top;

    var percentX = mouseX / buttonWidth;
    var percentY = mouseY / buttonHeight;

    var moveAmount = 40;

    var moveX = (0.5 - percentX) * moveAmount;
    var moveY = (0.5 - percentY) * moveAmount;

    $(this).css('transform', 'translate(' + moveX + 'px,' + moveY + 'px) scale(1.3)');
  });

  // 마우스가 버튼을 벗어날 때 복귀 효과
  button.mouseleave(function() {
    $(this).css({
      'transform': 'none',
      'transition': 'transform 0.3s, box-shadow 0.3s'
    });
  });

  $('#hoverButton').click(function() {
    $('html, body').animate({
      scrollTop: $('#introduce').offset().top
    }, 1000); // 스크롤 이동 속도 (1초)
  });

  AOS.init();

  var productList = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints :{
      900 : {
        slidesPerView : 2,
        spaceBetween : 0
      },

      1200 : {
        slidesPerView : 2,
        spaceBetween : 0,
      },
    }
  });

  //sub-section 4-1에 자바스크립트가 필요한 부분
  $("dd").hide();

  $("dt").click(function(){
   
    if($(this).next("dd").css("display")=="block"){
      $(this).next("dd").slideUp();
      $(".showhide").attr("src", "img/show.png");
    }else{
      $("dd").slideUp();
      $(this).next("dd").slideDown();
      $(".showhide").attr("src", "img/show.png");
      $(this).find(".showhide").attr("src", "img/hide.png");
    }
    
  });

});//끝