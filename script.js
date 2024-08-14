document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
