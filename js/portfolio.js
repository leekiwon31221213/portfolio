let skill_graph = document.querySelector(".skill_inner");
let profile_img = document.querySelector(".profile-img");
let two_d_grapic = document.querySelector(".design-2d_container");
let ui_ux = document.querySelector(".design-uiux_container");
let sec2_3_phone = document.querySelector(".section2-3-slide-list");

window.addEventListener("scroll", function () {
  let sec1_Height = document.querySelector(".section1-title").clientHeight;
  let one_depth_Height = document.querySelector(".one-depth").clientHeight;
  let sec3_Height = document.querySelector(".section3-main").clientHeight;
  let sec3_1_height = document.querySelector(".design-2d_container").clientHeight;

  let sec2_main_Height = document.querySelector(".section2-main").clientHeight;

  let sec2_1_Height = document.querySelector(".section2-1").clientHeight;
  let sec2_2_Height = document.querySelector(".section2-2").clientHeight;

  if (window.scrollY >= sec1_Height + one_depth_Height / 2) {
    skill_graph.style.display = "block";
    skill_graph.classList.add("active");
    profile_img.style.display = "block";
    profile_img.classList.add("active");
  } else {
    skill_graph.style.display = "none";
    skill_graph.classList.remove("active");
    profile_img.style.display = "none";
    profile_img.classList.remove("active");
  }

  if (window.scrollY >= sec3_Height / 2) {
    two_d_grapic.style.display = "flex";
    two_d_grapic.classList.add("active");
  } else {
    two_d_grapic.style.display = "none";
    two_d_grapic.classList.remove("active");
  }

  if (window.scrollY >= sec3_Height + sec3_1_height) {
    ui_ux.style.display = "flex";
    ui_ux.classList.add("active");
  } else {
    ui_ux.style.display = "none";
    ui_ux.classList.remove("active");
  }

  if (window.scrollY >= sec2_main_Height + sec2_1_Height + sec2_2_Height / 2) {
    sec2_3_phone.style.display = "flex";
  } else {
    sec2_3_phone.style.display = "none";
  }
});

$(document).ready(function () {
  /* responsive tablet mobile btn */

  function responsive_scss() {
    $(".publishing_content_btn .re_btn_scssMo").click(function () {
      $(this).next().fadeIn();
      document.body.style.overflow = "hidden";
    });

    $(".publishing_content_btn .re_btn_scssTb").click(function () {
      $(this).next().fadeIn();
      document.body.style.overflow = "hidden";
    });

    $(".close").click(function () {
      $(".tb_pop ,.mo_pop").stop(true, true).fadeOut();
      document.body.style.overflow = "unset";
    });

    window.addEventListener("click", function (event) {
      let responsive_tb_pop = document.querySelectorAll(".tb_pop");

      let responsive_mo_pop = document.querySelectorAll(".mo_pop");

      responsive_tb_pop.forEach(function (element) {
        if (event.target === element) {
          element.style.display = "none";
          document.body.style.overflow = "unset";
        }
      });
      responsive_mo_pop.forEach(function (element) {
        if (event.target === element) {
          element.style.display = "none";
          document.body.style.overflow = "unset";
        }
      });
    });
  }
  responsive_scss();

  /* mo-all-page mobile btn */
  function mo_all_page_scss() {
    $(".publishing_content_btn .mo_all_scss-btn").click(function () {
      $(this).next().fadeIn();
      document.body.style.overflow = "hidden";
    });

    $(".mo_all_close.close").click(function () {
      $(".mo_all_pop").stop(true, true).fadeOut();
      document.body.style.overflow = "unset";
    });

    window.addEventListener("click", function (event) {
      let mo_all_pop = document.querySelectorAll(".mo_all_pop");

      mo_all_pop.forEach(function (element) {
        if (event.target === element) {
          element.style.display = "none";
          document.body.style.overflow = "unset";
        }
      });
    });
  }
  mo_all_page_scss();
});
/* section3-1 design modal */
$(".design_wrap li").click(function () {
  //클래스 tabContentWarp li를 클릭했을때
  de_modal(this); //de_modal은(this)를 받아 .tabContentWarp li가 됨
});

/* Design Modal */
function de_modal(target) {
  //de_modal은 target으로 칭한다.

  let modal = $(".design-modal"); // #modal은 let이라는 이름이 modal이란 변수에 저장한다.
  let modal_img = modal.find(".modal_wd_inner li p");
  // 변수modal에서 .modal_wd_inner li p를 찾아 변수 modal_img에 저장한다.

  target = $(target); //target에 de_modal(target)을 저장한다.
  target.siblings().removeClass("selected");
  target.addClass("selected");
  console.log(target.attr("data-img"));

  let li_count = target.parent().children("li").length;
  // 변수 li_count는 부모 타겟에 자식li개수를 저장한다

  console.log(li_count);
  let index = target.attr("data-index");
  // 변수 index는 타겟의 data-index요소의 속성을 저장한다

  modal_img.html("<img src='./img/viewpage/" + target.attr("data-img") + "_view.png' alt='.'>");

  /* 변수 modal_img(.modal_wd_inner li p)에 html("")을 출력한다.
  이미지 방에 뷰페이지 방에있는 이미지를 불러오며 de_modal(target)==.design_wrap li에
  data-img 속성을 값을 설정한다 + _view.png _뷰.png확장자며 알트값은.으로 설정한다  */

  modal.find(".design-modal_btn .page_num .pres").text(index);
  //변수 modal(#modal)에서 ("design-modal_btn .page_num.pres")찾아 데이터 인덱스 속성을 부여한다

  modal.find(".design-modal_btn .page_num .total").text(li_count);
  //변수 modal(#modal)에서 ("design-modal_btn .page_num .total")찾아 자식에li개수를 저장한다
  modal.stop(true, true).fadeIn();
  document.body.style.overflow = "hidden";
  //console.log(index);
}

/* 다음보기 */
$(".design-modal .right_btn").click(function () {
  let next_index = parseInt($(".design-modal .page_num .pres").text()) + 1;
  let li_count = parseInt($(".design-modal .page_num .total").text());
  next_index = next_index > li_count ? 1 : next_index;
  de_modal(
    $(".design_wrap li.selected")
      .parent()
      .children("li[data-index='" + next_index + "']")[0]
  );
});

/* 이전보기 ;*/
$(".design-modal .left_btn").click(function () {
  let prev_index = parseInt($(".design-modal .page_num .pres").text()) - 1;
  let li_count = parseInt($(".design-modal .page_num .total").text());
  prev_index = prev_index == 0 ? li_count : prev_index;
  de_modal(
    $(".design_wrap li.selected")
      .parent()
      .children("li[data-index='" + prev_index + "']")
  );
});

/* 닫기 버튼 */
$(".design-modal .close_btn").click(function () {
  $(".design-modal").stop(true, true).fadeOut();
  $(".design_wrap .selected").removeClass("selected");
  document.body.style.overflow = "unset";
});

/*Publishing background-img  */

function responsive_bgPosition() {
  let jimssa_bgPosition = document.querySelector(".jimssa-page-img");
  let bn_survery_bgPosition = document.querySelector(".bn-page-img");
  let webtrend_bgPosition = document.querySelector(".webtrend-page-img");

  let cgv_bgPosition = document.querySelector(".cgv-page-img");
  let desert39_bgPosition = document.querySelector(".desert39-page-img");
  let krispy_kreme_bgPosition = document.querySelector(".krispy-kreme-donut-page-img");

  jimssa_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  jimssa_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });

  bn_survery_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  bn_survery_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });
  webtrend_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  webtrend_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });

  cgv_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  cgv_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });

  desert39_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  desert39_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });

  krispy_kreme_bgPosition.addEventListener("mouseenter", function () {
    this.style.backgroundPosition = "0 100%";
  });

  krispy_kreme_bgPosition.addEventListener("mouseleave", function () {
    this.style.backgroundPosition = "0 0";
  });
}
responsive_bgPosition();

/* Main cube slide */
const cube = document.querySelector(".cube");
const pfPage = document.querySelectorAll(".cube__face");
const rotateLeft = document.querySelector(".left-btn");
const rotateRight = document.querySelector(".right-btn");
let cube_face_back = document.querySelector(".cube__face--back");

let cubeFace = "front";

/* pre-btn */
rotateLeft.addEventListener("click", () => {
  if (cubeFace === "front") {
    cubeFace = "left";
    cube.classList.remove("activeRight__left-front");
    cube.classList.remove("activeLeft__right-front");
    cube.classList.add("activeLeft__front-left");
    cube.style.height = "100vh";
    cube_face_back.style.zIndex = "-1";
  } else if (cubeFace === "left") {
    cubeFace = "back";
    cube.classList.remove("activeRight__back-left");
    cube.classList.remove("activeLeft__front-left");
    cube.classList.add("activeLeft__left-back");
    cube.style.height = "300vh";
    cube_face_back.style.zIndex = "1";
  } else if (cubeFace === "back") {
    cubeFace = "right";
    cube.classList.remove("activeRight__right-back");
    cube.classList.remove("activeLeft__left-back");
    cube.classList.add("activeLeft__back-right");
    cube.style.height = "400vh";
    cube_face_back.style.zIndex = "-1";
  } else if (cubeFace === "right") {
    cubeFace = "front";
    cube.classList.remove("activeRight__front-right");
    cube.classList.remove("activeLeft__back-right");
    cube.classList.add("activeLeft__right-front");
    cube.style.height = "300vh";
    cube_face_back.style.zIndex = "-1";
  }
});
/* next-btn */
rotateRight.addEventListener("click", () => {
  cube.classList.add("active");
  if (cubeFace === "front") {
    cubeFace = "right";
    cube.classList.remove("activeLeft__right-front");
    cube.classList.remove("activeRight__left-front");
    cube.classList.add("activeRight__front-right");
    cube.style.height = "400vh";
    cube_face_back.style.zIndex = "-1";
  } else if (cubeFace === "right") {
    cubeFace = "back";
    cube.classList.remove("activeRight__front-right");
    cube.classList.remove("activeLeft__back-right");
    cube.classList.add("activeRight__right-back");
    cube.style.height = "300vh";
    cube_face_back.style.zIndex = "1";
  } else if (cubeFace === "back") {
    cubeFace = "left";
    cube.classList.remove("activeRight__right-back");
    cube.classList.remove("activeLeft__left-back");
    cube.classList.add("activeRight__back-left");
    cube.style.height = "100vh";
    cube_face_back.style.zIndex = "-1";
  } else if (cubeFace === "left") {
    cubeFace = "front";
    cube.classList.remove("activeRight__back-left");
    cube.classList.remove("activeLeft__front-left");
    cube.classList.add("activeRight__left-front");
    cube.style.height = "300vh";
    cube_face_back.style.zIndex = "-1";
  }
});

/* onepage view page modal */
let desert39_modal = document.querySelector(".desert39-modal");
let desert39_modal_btn = document.querySelector(".de39-view-btn");
let desert39_closeBtn = document.querySelector(".desert39-close");

let krispy_donut_modal = document.querySelector(".krispy-donut-modal");
let krispy_donut_modal_btn = document.querySelector(".krispy-view-btn");
let krispy_donut_closeBtn = document.querySelector(".krispy-donut-close");

desert39_modal_btn.addEventListener("click", function () {
  desert39_modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

desert39_closeBtn.addEventListener("click", function () {
  desert39_modal.style.display = "none";
  document.body.style.overflow = "unset";
});

window.addEventListener("click", function (event) {
  if (event.target == desert39_modal) {
    desert39_modal.style.display = "none";
    document.body.style.overflow = "unset";
  }
});

krispy_donut_modal_btn.addEventListener("click", function () {
  krispy_donut_modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

krispy_donut_closeBtn.addEventListener("click", function () {
  krispy_donut_modal.style.display = "none";
  document.body.style.overflow = "unset";
});

window.addEventListener("click", function (event) {
  if (event.target == krispy_donut_modal) {
    krispy_donut_modal.style.display = "none";
    document.body.style.overflow = "unset";
  }
});
