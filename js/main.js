$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();
  $(".hero-back").css({
    'background-size' : 100 + scrollPos + '%'
  });
});
