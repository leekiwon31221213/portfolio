$(document).ready(function () {
  /* section2-1 slide */
  let slide2_1_Width = document.querySelector(".section2-1-slide-list > li").clientWidth;
  // section2-1-slide-list > li 가로 값을 변수 slideWidth에 저장

  let slide2_1_list = $(".section2-1-slide-list");
  // .section2-1-slide-list 를 변수 slide2_1_list에 저장

  $(slide2_1_list).css("left", -slide2_1_Width);
  // $(slide2_1_list)에 .css 스타일 적용 ("left", - slide2_1_width); 변수 slide2_1_width 만큼 왼쪽으로 마이너스 시켜라

  $(".section2-1-slide-list > li").last().prependTo($(slide2_1_list));
  // .section2-1-slide-list에 마지막 li를 slide2_1_list 맨앞으로 보내라

  $("button.btn").on("click", function () {
    /* 바닐라 스크립트 ele.addEventListener('click', funtion() {}); */
    if ($(this).hasClass("section2-1-pre-btn")) {
      //바닐라 스크립트 .hasClass() == .classList.contains()
      //만약  ($(button.btn==this))에 section2-1-pre-btn클래스를 가지고 있다면

      $(slide2_1_list) //변수 slide2_1_list 실행
        .stop() //.stop 버블링 방지
        .animate({ left: "+=" + slide2_1_Width }, "slow", function () // slide2_1_list 애니메이션 적용 변수 slide2_1_Width 크기만큼 증가시켜 왼쪽으로 느리게 이동
        {
          $(slide2_1_list).css("left", -slide2_1_Width);
          /* $(변수 slide2_1_list) .css 스타일 적용 (왼쪽으로 slide2_1_list 만큼 마이너스 시켜라) */

          $(".section2-1-slide-list > li").last().prependTo($(slide2_1_list));
          // .section2-1-slide-list에 마지막 li를 slide2_1_list 맨앞으로 보내라
        });
    } else if ($(this).hasClass("section2-1-next-btn")) {
      //만약 if가 아닐경우 ($(button.btn==this))에 section2-1-next-btn클래스를 가지고 있다면
      $(slide2_1_list) //$(변수 slide2_1_list) 실행
        .stop() //.stop 버를링 방지
        .animate({ left: "-=" + slide2_1_Width }, "slow", function () // slide2_1_list 애니메이션 적용 변수 slide2_1_Width 크기만큼 빼고 왼쪽으로 느리게 이동
        {
          $(slide2_1_list).css("left", -slide2_1_Width);
          /* $(변수 slide2_1_list) .css 스타일 적용 (왼쪽으로 slide2_1_list 만큼 마이너스 시켜라) */
          $(".section2-1-slide-list > li").first().appendTo($(slide2_1_list));
          // .section2-1-slide-list에 첫번째 li를 slide2_1_list 맨뒤로 보내라
        });
    }
  });

  /* section2-2 slide */
  let slide2_2_Width = document.querySelector(".section2-2-slide-list > li").clientWidth;

  let slide2_2_list = $(".section2-2-slide-list");

  $(slide2_2_list).css("left", -slide2_2_Width);

  $(".section2-2-slide-list > li").last().prependTo($(slide2_2_list));

  $("button.btn").on("click", function () {
    if ($(this).hasClass("section2-2-pre-btn")) {
      $(slide2_2_list)
        .stop()
        .animate({ left: "+=" + slide2_2_Width }, "slow", function () {
          $(slide2_2_list).css("left", -slide2_2_Width);

          $(".section2-2-slide-list > li").last().prependTo($(slide2_2_list));
        });
    } else if ($(this).hasClass("section2-2-next-btn")) {
      $(slide2_2_list)
        .stop()
        .animate({ left: "-=" + slide2_2_Width }, "slow", function () {
          $(slide2_2_list).css("left", -slide2_2_Width);

          $(".section2-2-slide-list > li").first().appendTo($(slide2_2_list));
        });
    }
  });

  /* section2-3 slide */
  let slide2_3_Width = document.querySelector(".section2-3-slide-list > li").clientWidth;

  let slide2_3_list = $(".section2-3-slide-list");

  $(slide2_3_list).css("left", -slide2_3_Width);

  $(".section2-3-slide-list > li").last().prependTo($(slide2_3_list));

  $("button.btn").on("click", function () {
    if ($(this).hasClass("section2-3-pre-btn")) {
      $(slide2_3_list)
        .stop()
        .animate({ left: "+=" + slide2_3_Width }, "slow", function () {
          $(slide2_3_list).css("left", -slide2_3_Width);

          $(".section2-3-slide-list > li").last().prependTo($(slide2_3_list));
        });
    } else if ($(this).hasClass("section2-3-next-btn")) {
      $(slide2_3_list)
        .stop()
        .animate({ left: "-=" + slide2_3_Width }, "slow", function () {
          $(slide2_3_list).css("left", -slide2_3_Width);

          $(".section2-3-slide-list > li").first().appendTo($(slide2_3_list));
        });
    }
  });
});

// 누구를.prependTo(리스트) 누구를.appendTo(리스트)
// append는 리스트의 맨 뒤, prepend는 리스트의 맨 앞
