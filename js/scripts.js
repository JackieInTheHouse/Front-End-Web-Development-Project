"use strict";

console.log("hello");

/* Menu bar script*/
const navbarToggle = document.getElementById("navbar-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  menuNav.classList.toggle("navbar-toggle");
}

navbarToggle.addEventListener("click", toggleMenu);


/* slide show script*/

function showSlide(n) {
  const activeSlides = document.querySelectorAll(".slideshow-container .slide.active");
  for (const slide of activeSlides){
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
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
  // slideIndex %= (slides.length);
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex += 1;
  slideIndex %= (slides.length);
  showSlide(slideIndex);
}
