/*
const hamburger = document.querySelector(".hamburger"); 
const navbar = document.querySelector(".nav_bar"); 
hamburger.addEventListener("click", () => 
navbar.classList.toggle("active"));
*/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=> navbarLinks.classList.toggle('active'))

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}