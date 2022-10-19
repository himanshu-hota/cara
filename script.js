//--------------- Main Page----------------------

// Selectors

const burgerMenu = document.querySelector('#bar');
const navbar = document.querySelector('#navbar');

burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('activate');
})


// --------------------------Shop Page Section-------------------------

const mainImg = document.querySelector('#main-product');
const imgs = document.querySelectorAll('.small-img')

const onClick = (event) => {
    switch (event.srcElement.id) {
        case 'd-img-1':
            mainImg.src = event.target.src;
            break;
        case 'd-img-2':
            mainImg.src = event.target.src;
            break;
        case 'd-img-3':
            mainImg.src = event.target.src;
            break;
        case 'd-img-4':
            mainImg.src = event.target.src;
            break;
    }
}

window.addEventListener('click', onClick);






