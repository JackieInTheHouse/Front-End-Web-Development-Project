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

let imageIndex = 1;
showImages(imageIndex);

function plusImages(n) {
  showImages(imageIndex += n);
}

function currentImage(n) {
  showImages(imageIndex = n);
}

function showImages(n) {
  let i;
  const images = document.getElementsByClassName("myImages");
  const dots = document.getElementsByClassName("dot");

  if (n > images.length) {
    imageIndex = 1}
  if (n < 1) {
    imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  images[imageIndex-1].classList.add("active");
  dots[imageIndex-1].classList.add("active");
}
