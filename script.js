// Selectors

const burgerMenu = document.querySelector('#bar');
const navbar = document.querySelector('#navbar');

burgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('activate');
    })

    