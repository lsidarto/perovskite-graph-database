window.onscroll = function() {nav_bg()};
var header = document.getElementById("nav");
var sticky = header.offsetTop; // Get the offset position of the navbar
function nav_bg() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function toggleNav() {
    document.getElementById("vnav").classList.toggle("hidden");
    document.getElementById("main").classList.toggle("hidden");
}

// theme switch
const themeSwitch = document.querySelector('input');
themeSwitch.addEventListener('change', () => {  
    document.body.classList.toggle('light_theme');
});
