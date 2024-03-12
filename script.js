////---menu icon----////
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


////---scroll section active link----////

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })


  ////---stickyyyy nav bar----////
let header= document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);


////---remove menu icon navbar when click navbar link (scroll)----////
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');

};

////---swiper  ----////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
  });


  ////---Dark-light Mood  ----////
  let darkmodicon = document.querySelector('#darkMode-icon');
  darkmodicon.onclick = () =>{
    darkmodicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };

  ////---scroll reveal  ----////

  ScrollReveal({ 
    reset: true,
    distance:'70px',
    duration:1500,
    delay:150
   });

   ScrollReveal().reveal('.home-content,  .heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img img,  .services-container, .protfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1,.home-content h3, .home-content p, .about-content,.about-img img,.services-box p', { origin: 'left' });
  