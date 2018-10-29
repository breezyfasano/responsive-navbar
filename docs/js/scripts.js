'use strict';
const navbar = document.getElementById('nav');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

const openNav = () => {
    let navbarChildren = navbar.children;
    for (let i = 0; i < 2; i++) {
        let widthValue = '55vw';
        navbar.style.width = widthValue;
        navbarChildren[i].style.width = widthValue;
    }
};

const closeNav = () => {
    for (let i = 0; i < 2; i++) {
        navbar.style.width = 0;
        navbarChildren[i].style.width = 0;
    }
    document.querySelector('main').style.marginLeft = 0;
};


openIcon.addEventListener ('click',
 function() {
        openNav();
    }
 );

 closeIcon.addEventListener('click',
     function () {
         closeNav();
     }
 );