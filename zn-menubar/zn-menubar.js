$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
                  $('.batest').css({"color":"white","transition":"1s"});

            }

            else {
                  $('nav').removeClass('black');
                  $('.batest').css({"color":"rgba(0, 88, 219, 0.94)","transition":"1s"});

            }
      })