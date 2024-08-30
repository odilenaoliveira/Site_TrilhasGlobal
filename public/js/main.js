// Marquee
const marqueeContainer = document.querySelector('.marquee-container');
const marqueeContent = document.querySelector('.marquee-content');
function resizeMarquee() {
  const containerWidth = marqueeContainer.offsetWidth;
  const contentWidth = marqueeContent.offsetWidth;
  marqueeContent.style.animationDuration = `${contentWidth / containerWidth * 10}s`;
}
window.addEventListener('resize', resizeMarquee);
resizeMarquee();

// Slide Swiper
var swiper = new Swiper(".mySlide", {
  slidesPerView: 4,spaceBetween: 30,centeredSlides: true,
  pagination: {el: ".swiper-pagination",clickable: true,},
  breakpoints:{
    0:{slidesPerView:1,},
    768:{slidesPerView:2},
    1024:{slidesPerView:3},
  }
});

// Menu Responsivo
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.onclick = function (){
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
}

// ScrollReveal
ScrollReveal({reset:true,distance:"60px",duration:2500,delay:400});
ScrollReveal().reveal("#banner .text",{delay:500,origin:"left"});
ScrollReveal().reveal("#destaque .card",{delay:500,origin:"bottom",interval:200});
ScrollReveal().reveal(".title",{delay:400,origin:"left"});