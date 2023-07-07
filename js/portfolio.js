let skill_graph = document.querySelector(".skill_inner");

window.addEventListener("scroll", function () {
  let sec1_Height = document.querySelector(".section1-title").clientHeight;
  let one_depth_Height = document.querySelector(".one-depth").clientHeight;
  let two_depth_Height = document.querySelector(".two-depth").clientHeight;

  if (window.scrollY >= sec1_Height + one_depth_Height / 2) {
    skill_graph.style.display = "block";
    skill_graph.style.opacity = "1";
  } else {
    skill_graph.style.display = "none";
    skill_graph.style.opacity = "0";
  }
  console.log(sec1_Height);
});
