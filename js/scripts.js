"use strict";

console.log("hello");

/* Menu bar script*/
const navbarToggle = document.getElementById("navbar-toggle");
const menuNav = document.getElementById("menu-nav");
const profilepage = document.querySelector("#profilepage");
const educationpage = document.querySelector("#educationpage");
const experiencepage = document.querySelector("#experiencepage");
const contactpage = document.querySelector("#contactpage");


/* Created Menu toggle for mobile screen*/
const toggleMenu = () => {
  menuNav.classList.toggle("navbar-toggle");
}

navbarToggle.addEventListener("click", toggleMenu);


/*Close Menu when click on a link*/

const closeMenu = () => {
  if (menuNav.classList.toggle("navbar-toggle") === true) {
        menuNav.classList.toggle("navbar-toggle");
    }
}

profilepage.addEventListener("click", closeMenu);
educationpage.addEventListener("click", closeMenu);
experiencepage.addEventListener("click", closeMenu);
contactpage.addEventListener("click", closeMenu);

/* slide show script*/

function showSlide(n) {
  const activeSlides = document.querySelectorAll(".slideshow-container .slide.active");
  const activeDots = document.querySelectorAll(".dot.active");
  const dots = document.querySelectorAll(".dot");
  for (const slide of activeSlides){
    slide.classList.remove("active");
  }
  for (const dot of activeDots){
    dot.classList.remove("active");
  }
  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

function showNextSlide() {
  slideIndex += 1;
  slideIndex %= (slides.length  - 1);
  showSlide(slideIndex);
}

const slides = document.querySelectorAll(".slideshow-container .slide");

slides.forEach((slide, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', ev => {
    showSlide(i)
  })
  dots.appendChild(dot);
})

let slideIndex = 0;
showSlide(0);

/* prev and next script*/
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);


function prevSlide(){
  slideIndex -= 1;
  slideIndex += slides.length;
  slideIndex %= (slides.length);
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex += 1;
  slideIndex %= slides.length;
  showSlide(slideIndex);
}
