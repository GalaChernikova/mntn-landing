const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

//click on button
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMobileNav();
})

//click on the window beyond navigation
window.addEventListener('click', function(){
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

//stop click inside opened mobile navigation
mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})


function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}