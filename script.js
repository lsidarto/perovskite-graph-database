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

//only for portfolio page
if ($("body#portfolio").length > 0) { 
    var coll = document.getElementsByClassName("closable_card");

    for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        
        var content = this.children[1];
        content.classList.toggle("active");
    });
    }
}

// birds: only run on index page
if ($("body#index").length > 0) {

    gsap.registerPlugin(MotionPathPlugin);

    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    gsap.to(".b1", {
    duration: 3, 
    repeat: -1,
    repeatDelay: 2,
    ease: "power1.inOut",
    motionPath:{
        path: ".path1",
        align: ".path1",
        autoRotate: 90,
        alignOrigin: [0.5, 0.5]
    }});
    gsap.to(".b2", {
    duration: 4, 
    repeat: -1,
    repeatDelay: 4,
    ease: "power1.inOut",
    motionPath:{
        path: ".path2",
        align: ".path2",
        autoRotate: 90,
        alignOrigin: [0.5, 0.5],
    }});
    gsap.to(".b3", {
    duration: 4, 
    repeat: -1,
    repeatDelay: 4,
    ease: "power1.inOut",
    motionPath:{
        path: ".path3",
        align: ".path3",
        autoRotate: 90,
        alignOrigin: [0.5, 0.5]
    }});
    gsap.to(".b4", {
        duration: 8, 
        repeat: -1,
        repeatDelay: 1,
        ease: "power1.inOut",
        motionPath:{
            path: ".path4",
            align: ".path4",
            autoRotate: 90,
            alignOrigin: [0.5, 0.5]
    }});

    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".b0", {
        x: w,
        duration: 6,
        scrollTrigger: {
            trigger:".b0",
            start: "center 90%",
            end: "center top",
            toggleActions: "restart pause resume reset",
            // markers: true,
        }, motionPath:{
            path: ".path0",
            align: ".path0",
            autoRotate: 90,
            alignOrigin: [0.5, 0.5]
        }
        });
}
