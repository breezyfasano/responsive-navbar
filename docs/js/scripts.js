'use strict';
const navbar = document.getElementById('nav');
const navbarChildren = navbar.children;
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    for (let i = 0; i < 2; i++) {
        navbar.style.width = "250px";
        navbarChildren[i].style.width = "250px";
    }
    document.querySelector('main').style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    for (let i = 0; i < 2; i++) {
        navbar.style.width = 0;
        navbarChildren[i].style.width = 0;
    }
    document.querySelector('main').style.marginLeft = 0;
}