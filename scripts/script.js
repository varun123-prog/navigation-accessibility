const mobileMenuTrigger=document.getElementById('mobileMenuTrigger');
const mobileMenu=document.querySelector('.nav-links-container');
const navLinks=document.querySelectorAll('.nav-links li a');
console.log(navLinks);

//console.log(mobileMenu);

mobileMenuTrigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuTrigger.classList.toggle('active');

    // Toggle aria-expanded attribute True / False
    if(mobileMenu.classList.contains('active')){
        mobileMenuTrigger.setAttribute('aria-expanded','true');
    }else{
        mobileMenuTrigger.setAttribute('aria-expanded','false');
    }
});

// Provide Styling For Current Page Anchor Tag
navLinks.forEach((link) => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current','page');
        console.log('Link',link.href);
        console.log('Widow',window.location.href);
    }
});

// Make index.html page active on page load
const baseURI=document.baseURI;
console.log(baseURI);
const homePageAnchor=document.getElementById('home');

window.addEventListener('load', () => {
    if(baseURI){
        homePageAnchor.setAttribute('aria-current','page');
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        mobileMenu.classList.remove('active');
        mobileMenuTrigger.classList.remove('active');
    }
});