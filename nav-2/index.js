const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('nav-active');
})