/*burger*/

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.logo__container');
const body = document.querySelector('.body');
const navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    overlay.classList.toggle('overlay-active');
    logo.classList.toggle('logo__container');
    logo.classList.toggle('logo__container-active');
    body.classList.toggle('block');
});
function removeBurgerMenu() {
    burger.classList.remove('burger-active');
    overlay.classList.remove('overlay-active');
    logo.classList.add('logo__container');
    logo.classList.remove('logo__container-active');
    body.classList.remove('block');
}
logo.addEventListener('click', () => {
    removeBurgerMenu();
});
overlay.addEventListener('click', () => {
    removeBurgerMenu();
});
navItem.forEach((item) => {
    item.addEventListener('click', () => {
        removeBurgerMenu();
    });
});