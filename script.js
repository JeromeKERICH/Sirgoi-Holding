const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownBtn = document.querySelector('.drop-btn');
const dropdown = document.querySelector('.dropdown');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('active');
});



//Dropdown menu
dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    dropdown.classList.remove('active');
});



