let skill_graph = document.querySelector(".skill_inner");
let profile_img = document.querySelector(".profile-img");
let two_d_grapic = document.querySelector(".design-2d_container");
let ui_ux = document.querySelector(".design-uiux_container");

window.addEventListener("scroll", function () {
  let sec1_Height = document.querySelector(".section1-title").clientHeight;
  let one_depth_Height = document.querySelector(".one-depth").clientHeight;
  let sec3_Height = document.querySelector(".section3-main").clientHeight;
  let sec3_1_height = document.querySelector(".design-2d_container").clientHeight;

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
});

let sec2_1_slide_img = document.querySelector(".section2-1-slide-list");
let sec2_1_slide_li = document.querySelectorAll(".section2-1-slide-list > li");
let sec2_1_pre_btn = document.querySelector(".section2-1-pre-btn");
let sec2_1_next_btn = document.querySelector(".section2-1-next-btn");
let sec2_1_slide_img_width = sec2_1_slide_img.clientWidth;
let sec2_1_slide_img_number = sec2_1_slide_li.length;
let sec_2_1_old_img = 0;
let sec_2_1_new_img = 0;

sec2_1_next_btn.addEventListener("click", function () {
  sec_2_1_new_img++;
  if (sec_2_1_new_img >= sec2_1_slide_img_number - 1) {
    sec_2_1_new_img = 0;
  }
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
