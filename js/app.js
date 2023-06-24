// variables
const slideMobileNav = document.getElementById('slide-in-mobile-nav');
const mobileNavBar = document.getElementById('mobile-nav');
const closeMobileNav = document.getElementById('close-mobile-nav');



// eventlisteners
eventListeners();
function eventListeners() {
    // event to listen for click on the hamburger image of the mobile design to slide in the nav bar
    slideMobileNav.addEventListener('click', slideInNavBar);

    // event to listen for click on the close image of the nav bar to close the nav bar
    closeMobileNav.addEventListener('click', slideOutNavbar)
}


// functions

// function to slide in the nav bar from the left by adding the class with the properties to slide in
function slideInNavBar() {
    mobileNavBar.classList.remove('position-nav');
}

// function to close the nav bar
function slideOutNavbar() {
    mobileNavBar.classList.add('position-nav');
}