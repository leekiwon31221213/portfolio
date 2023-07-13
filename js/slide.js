$(document).ready(function () {
  const slideWidth = document.querySelector(".section2-1-slide-list > li").clientWidth;

  $(".section2-1-slide-list").css("left", -slideWidth);
  $(".section2-1-slide-list > li").last().prependTo($(".section2-1-slide-list"));

  $("button.btn").on("click", function () {
    if ($(this).hasClass("section2-1-pre-btn")) {
      $(".section2-1-slide-list")
        .stop()
        .animate({ left: "+=" + slideWidth }, "slow", function () {
          $(".section2-1-slide-list").css("left", -slideWidth);
          $(".section2-1-slide-list > li").last().prependTo($(".section2-1-slide-list"));
        });
    } else if ($(this).hasClass("section2-1-next-btn")) {
      $(".section2-1-slide-list")
        .stop()
        .animate({ left: "-=" + slideWidth }, "slow", function () {
          $(".section2-1-slide-list").css("left", -slideWidth);
          $(".section2-1-slide-list > li").first().appendTo($(".section2-1-slide-list"));
        });
    }
  });
});
