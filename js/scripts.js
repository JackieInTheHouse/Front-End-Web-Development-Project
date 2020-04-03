"use strict";

console.log("hello");

/* Menu bar script*/
const navbarToggle = document.getElementById("navbar-toggle");
const menuNav = document.getElementById("menu-nav");
const toggleMenu = () => {
  menuNav.classList.toggle("navbar-toggle");
}

navbarToggle.addEventListener("click", toggleMenu);


/*Close Menu when click on a link script*/
const profilepage = document.querySelector("#profilepage");
const educationpage = document.querySelector("#educationpage");
const experiencepage = document.querySelector("#experiencepage");
const contactpage = document.querySelector("#contactpage");
const closeMenu = () => {
  if (menuNav.classList.toggle("navbar-toggle") === true) {
        menuNav.classList.toggle("navbar-toggle");
    }
}

profilepage.addEventListener("click", closeMenu);
educationpage.addEventListener("click", closeMenu);
experiencepage.addEventListener("click", closeMenu);
contactpage.addEventListener("click", closeMenu);


/* slide show dot and active script*/
function showSlide(n) {
  const activeSlides = document.querySelectorAll(".slideshow-container .slide.active");
  const activeDots = document.querySelectorAll(".dot.active");
  const dots = document.querySelectorAll(".dot");
  for (const slide of activeSlides) {
    slide.classList.remove("active");
  }
  for (const dot of activeDots) {
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

/* slide show prev and next script*/
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);


function prevSlide() {
  slideIndex -= 1;
  slideIndex += slides.length;
  slideIndex %= (slides.length);
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex += 1;
  slideIndex %= slides.length;
  showSlide(slideIndex);
}


/*contact form script*/
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#e-mail");
let subject = document.querySelector("#subject");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener('submit', submitForm);

function submitForm() {
    if ( (fname.value.length === 0) ||  (lname.value.length === 0) ||(email.value.length === 0) || (subject.value.length === 0)) {
      window.alert("Please fill in the missing field.");
      event.preventDefault();
    } else {
        window.alert("Your form has been submitted. I will contact you shortly. Thank you!");
        event.preventDefault();
    }

}
