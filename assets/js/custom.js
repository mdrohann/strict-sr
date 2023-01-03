// navbar-scroll start
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll > 200) {
      $(".navbar").addClass("navbar_bg");
    } else {
      $(".navbar").removeClass("navbar_bg");
    }

    if (scroll > 300) {
      $(".back_to_top").show(1000);
    } else {
      $(".back_to_top").hide(1000);
    }
  });
  $(".back_to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
// navbar-scroll end
// type start
var typed = new Typed(".hero_head", {
  strings: ["DESIGN BY", " STRICT"],
  typeSpeed: 80,
  loop: true,
});
// type end

// wow start
new WOW().init();
// wow end

// venobox start
new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});
new VenoBox({
  selector: ".my-video-links",
});
new VenoBox({
  selector: ".my-custom-links",
});

// venobox end
