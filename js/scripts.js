"use strict";

console.log("hello");

const navbarToggle = document.getElementById("navbar-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  menuNav.classList.toggle("navbar-toggle");
}

navbarToggle.addEventListener("click", toggleMenu);
