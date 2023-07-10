let skill_graph = document.querySelector('.skill_inner');
let profile_img = document.querySelector('.profile-img');

window.addEventListener('scroll', function () {
    let sec1_Height = document.querySelector('.section1-title').clientHeight;
    let one_depth_Height = document.querySelector('.one-depth').clientHeight;

    if (window.scrollY >= sec1_Height + one_depth_Height / 2) {
        skill_graph.style.display = 'block';
        skill_graph.classList.add('active');
        profile_img.style.display = 'block';
        profile_img.classList.add('active');
    } else {
        skill_graph.style.display = 'none';
        skill_graph.classList.remove('active');
        profile_img.style.display = 'none';
        profile_img.classList.remove('active');
    }
});
