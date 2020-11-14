// $(function () {

  $('head').append(
    '<style>.fade0{display:none;}'
    );
    $(window).on("load", function() {
    $('.fade0').css('opacity',1).delay(800).fadeIn(1000);
  });
  $('head').append(
    '<style>.fade00{display:none;}'
    );
    $(window).on("load", function() {
    $('.fade00').css('opacity',0.2).delay(200).fadeIn(1000);
  });

  // TOPページ左から順にスライドイン
  if (window.matchMedia('(min-width: 960px)').matches){
    $(window).on('load', function(){
      var SlideIn = 200;
      $('.next-page').css('display','inline').each(function(i){
        $(this).delay(i*(SlideIn)).css({
          bottom: outerHeight
        }).animate({
          top:'0'
        },1700, 'easeInOutExpo')
      });
    });
  } else {
    $(window).on("load", function() {
      $('.next-page').css('display','inline').delay(1200).fadeIn(1000);
    });
  }


  // $(".cover-img").hover(function(){
  //     $(this).animate({"opacity":1});
  // });

  //マウスを乗せたら発動
  $('.cover-img').hover(function() {
    //マウスを乗せたら色が変わる
    $(this).css({'opacity':1});
  //ここにはマウスを離したときの動作を記述
  }, function() {
    //色指定を空欄にすれば元の色に戻る
    $(this).css({'opacity':0.2});
  });
    




  // ロゴフェードイン
  $('head').append(
    '<style>.load-fade{display:none;}'
    );
    $(window).on("load", function() {
    $('.load-fade').css('opacity',1).delay(1500).fadeIn(1500);
  });



  //  なし
  // if (window.matchMedia('(max-width: 1024px)').matches){
  //   $(window).on("load", function() {
  //   $('.fade').css('opacity',1).delay(500).fadeIn(1000);
  //   });
  // } else {
  //   $(window).on("load", function() {
  //   $('.fade').css('display','none')
  //   });
  // }



  // 順番にフェード①
  $('head').append(
    '<style>.fade1{display:none;}'
    );
    $(window).on("load", function() {
    $('.fade1').css('opacity',1).delay(1200).fadeIn(1000);
  });
  $('head').append(
    '<style>.fade2{display:none;}'
    );
    $(window).on("load", function() {
    $('.fade2').css('opacity',1).delay(1700).fadeIn(1000);
  });
  $('head').append(
    '<style>.fade3{display:none;}'
    );
    $(window).on("load", function() {
    $('.fade3').css('opacity',1).delay(2000).fadeIn(1000);
  }); 

  // メニューカレント表示
  $(function () {
    $('nav ul li a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
        $(this).children('.jp').addClass('current');
        } else {
        $(this).children('.jp').removeClass('current');
        }
    });
  });



  // スクロールフェードイン
  if (window.matchMedia('(max-width: 1024px)').matches){
    $('head').append(
      '<style>.scroll-fadein{display:none;}'
    );
    $(window).on("load", function() {
    $('.scroll-fadein').css('opacity',1).delay(500).fadeIn(1000);
    });
  } else {
    $(window).scroll(function (){
      $('.scroll-fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 180){
            $(this).addClass('active');
          }
      });
    });
  }

  $(window).scroll(function (){
      $('.scroll-fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 180){
            $(this).addClass('active');
          }
      });
  });




  // show moreボタン
  $(function () {
    $(".btn").on("click", function() {
      $(this).toggleClass("on-click");
      $(".hide-data").slideToggle(500);
      $(this).toggleClass('open');
    });
  });

  // トップへ
  $(function () {
    $('.toTop').on('click', function() {
      $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


  // ハンバーガーメニュー
  $(function () {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  });


  if (window.matchMedia('(min-width: 960px)').matches){
    // $('head').append(
    //   '<style>.captoon{opacity:0;}'
    //   );
    $(window).on('load', function(){
      $(".captoon").css({
        // left:"-300px",
        opacity:"0"
      }).animate({
        // left:"300px",
        opacity:"1.0"
      },5000);
    });
  }



  $(window).on("load", function() {
    $('.caption').addClass('yokoin');
  });


// });




