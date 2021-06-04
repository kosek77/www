const scrollTime = 1000;

// scroll-up start
$("#btn-scroll-up").click(() => {
  $("html, body").animate({ scrollTop: 0 }, scrollTime);
});

$(window).scroll(() => {
  let scrolled = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrolled > windowHeight * 0.25) {
    $("#btn-scroll-up").css("display", "block");
    $("#nav-box").css("paddingLeft", "5px");
  } else {
    $("#btn-scroll-up").css("display", "none");
    $("#nav-box").css("paddingLeft", "");
  }
});
//scroll-up end

const navBox = document.querySelector(".navbar-collapse");
const navBoxArray = [...document.querySelectorAll(".navbar-nav")];

navBoxArray.forEach(e => {
  e.addEventListener("click", () => {
    navBox.classList.toggle("show");
  });
});

$("#btn-check-why").click(() => {
  $("html, body").animate(
    { scrollTop: $("#section-about-us").offset().top - 85 },
    scrollTime
  );
});

$("#nav-about-us").click(() => {
  $("html, body").animate(
    { scrollTop: $("#section-about-us").offset().top - 85 },
    scrollTime
  );
});

$("#nav-offer").click(() => {
  $("html, body").animate(
    { scrollTop: $("#section-offer").offset().top - 60 },
    scrollTime
  );
});

$("#nav-our-history").click(() => {
  $("html, body").animate(
    { scrollTop: $("#section-our-history").offset().top - 70 },
    scrollTime
  );
});

$("#nav-contact").click(() => {
  $("html, body").animate(
    { scrollTop: $("#section-contact").offset().top - 60 },
    scrollTime
  );
});




$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".my-main-header").addClass("active");
  } else {
     $(".my-main-header").removeClass("active");
  }
});