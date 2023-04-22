const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

/* burger handler */
(function () {
 const burgerItem = document.querySelector('.burger');
 const menu = document.querySelector('.header_nav');
const menuCloseItem = document.querySelector('.header_nav_close');

 burgerItem.addEventListener('click', () => {
    menu.classList.add('header_nav_active');
 });

 menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header_nav_active');
 });
}());