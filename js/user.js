$(document).ready(function () {
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.kv .scroll').bind('click', function (event) {
    // alert("hi");
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1500);
    event.preventDefault();
  });
  // top
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 200;
    if ($(window).scrollTop() > 300) {
      $('.float-btn').css('position', 'absolute').css('top', window_top + 200);
      $('.float-btn').css('opacity', 1);
    } else {
      $('.float-btn').css('opacity', 0);
    }
  })
  // tab輪播畫面
  $(".swiper-container").slick({
    infinite: true,
    dots: true,
    loop: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  $('.swiper-container2').slick({
    infinite: true,
    dots: true,
    loop: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.swiper-container3').slick({
    infinite: true,
    dots: true,
    loop: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.js-tabs-item:not(:first)').hide();
  $('.js-tabs-link').on('click', function (e) {
    e.preventDefault();
    var tabLink = $(this);
    var target = $(this.hash);
    $('.js-tabs-link').removeClass('m-active');
    $('.js-tabs-item:visible').fadeOut("200", function () {
      tabLink.addClass('m-active');
      target.fadeIn("200", function () {
        $('.swiper-container2').slick("setPosition", 0);
        $('.swiper-container3').slick("setPosition", 0);
      });
    });


  });

  $('.swiper-container').slick("setPosition", 0);
  FastClick.attach(document.body);
  $('.tabs .tab label').click(function (e) {

  });

  $('a.target-burger').click(function (e) {
    $('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
    e.preventDefault();
  });

  //錨點展開
  // var url = window.location.href.split("#")[1]
  // var target = 'Notice'
  // if (url == target) {
  //   $('#Notice').css("display", "block")

  // }
})