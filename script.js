
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50) header.classList.add('bg-header'); else header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'});
sr.reveal(`.logos__img, .program__card, .choose__img`, {interval: 100});
