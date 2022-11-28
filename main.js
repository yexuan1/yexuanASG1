/*
const hamburger = document.querySelector(".hamburger"); 
const navbar = document.querySelector(".nav_bar"); 
hamburger.addEventListener("click", () => 
navbar.classList.toggle("active"));
*/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=> navbarLinks.classList.toggle('active'))