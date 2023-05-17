import {data} from './data.js';
import {shuffle, createListCards} from './cards.js'

/*slider*/
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');
//block button(disabled to click many times)
let isBtnWork = true;
//switcher - create different nodes for slider
let sliderSwitchRight = true;
let sliderSwitchLeft = true;
let fullCarousel;
let switcher = true;
const friendsWindow = document.querySelector('.friends__window');
const arrows = document.querySelectorAll('.arrow');


const friendsArr1 =  data.slice(0,4);
const friendsArr2 =  data.slice(4,8);

//create html node for slider
function createLeftSlide(pets, slider) {
    return  `<div class="carousel carousel_left left">
                <div class="friends_slider next">
                    ${createListCards(pets)}
                </div>
            </div> `;
};
function createCenterSlide(pets) {
    return `<div class="carousel carousel_center center">
                <div class="friends_slider next">
                    ${createListCards(pets)}
                </div>
            </div> `;
};
function createRightSlide(pets) {
    return `<div class="carousel carousel_right right">
                <div class="friends_slider next">
                    ${createListCards(pets)}
                </div>
            </div> `;
};

function createFullSlider(arr1, arr2, need) {
    let resultSlider = '';
    let slider1 = createLeftSlide(shuffle(arr1, 3));
    let slider2 = createCenterSlide(shuffle(arr2, 3));
    let slider3 = createRightSlide(shuffle(arr1, 3));
    if (need === 'all') {
        resultSlider = slider1 + slider2 + slider3;
    }
    else if (need === 'rigth') {
        resultSlider = slider3;
    }
    else if (need === 'left') {
        resultSlider = slider1;
    }
    return resultSlider;
}

//create slider after load
window.addEventListener('load', function () {
    let fullSlider;
    if (Math.floor(Math.random() * 2)) {
        fullSlider = createFullSlider(friendsArr1, friendsArr2, 'all');
    } else {
        fullSlider = createFullSlider(friendsArr2, friendsArr1, 'all');
    }
    friendsWindow.insertAdjacentHTML('afterbegin', fullSlider);
});

function changeCarousel(direction, nSlider, classNameLast, classNameNew) {
    isBtnWork = false;
    fullCarousel[nSlider].classList.add(direction);
    fullCarousel[nSlider].addEventListener('animationend', function () {
        this.classList.remove(classNameLast, direction);
        this.classList.add(classNameNew);
        isBtnWork = true;
    });
};

function showCarousel(direction, nSlider, classNameLast) {
    fullCarousel[nSlider].classList.add(direction);
    fullCarousel[nSlider].addEventListener('animationend', function () {
        this.classList.remove(classNameLast, direction);
        this.classList.add('carousel_center');
        isBtnWork = true;
    });
};

arrows.forEach((arrow )=> {
    arrow.addEventListener('click', () => {
        if (isBtnWork) {
        if (arrow.classList.contains('arrow-right')) {
            fullCarousel = document.querySelectorAll('.carousel');
            let newCarousel;
            let names = document.querySelector('.carousel_center').querySelectorAll('.friend-name')
            if (names[0].textContent === 'Jennifer' || names[0].textContent === 'Sophia' ||
            names[0].textContent === 'Woody' || names[0].textContent === 'Scarlett') {
                newCarousel = createRightSlide(shuffle(friendsArr1, 3), 0, 'right')
            } else {
                newCarousel = createRightSlide(shuffle(friendsArr2, 3), 0, 'right')
            }
            changeCarousel('to-left', 1, 'carousel_center', 'carousel_left');
            showCarousel('from-right', 2, 'carousel_right');
            fullCarousel[0].remove();
            friendsWindow.insertAdjacentHTML('beforeend', newCarousel);
            fullCarousel = document.querySelectorAll('.carousel');
        }
        else if (arrow.classList.contains('arrow-left')) {
            fullCarousel = document.querySelectorAll('.carousel');
            let newCarousel;
            fullCarousel[2].remove();
            let names = document.querySelector('.carousel_center').querySelectorAll('.friend-name');
            if (names[0].textContent === 'Jennifer' || names[0].textContent === 'Sophia' ||
            names[0].textContent === 'Woody' || names[0].textContent === 'Scarlett') {
                newCarousel = createLeftSlide(shuffle(friendsArr1, 3), 0, 'left');
            } else {
                newCarousel = createLeftSlide(shuffle(friendsArr2, 3), 0, 'left');
            };
            changeCarousel('to-right', 1, 'carousel_center', 'carousel_right');
            showCarousel('from-left', 0, 'carousel_left');
            friendsWindow.insertAdjacentHTML('afterBegin', newCarousel);
            fullCarousel = document.querySelectorAll('.carousel');
        };
    };
    });
});

/*modal window*/
const modal = document.querySelector('.modal');
const modalTittle = document.querySelector('.modal-tittle');
const modalSubtittle = document.querySelector('.modal-subtittle');
const modalText = document.querySelector('.modal-text');
const modalList = document.querySelector('.modal-list');
const modalPic = document.querySelector('.modal-pic');

friendsWindow.addEventListener('click', (event) => {
    if (event.target.closest('.friends__card')) {
        let activeData = data.filter((item) => item.name === event.target.closest('.friends__card').dataset.name);
        activeData = activeData[0]
        createModal(activeData)
        showModal()
    };
});
function createModal(activeData) {
    modalPic.src = `../../assets/img/friends-${activeData.img}-1280.jpg`
    modalTittle.textContent = activeData.name;
    modalSubtittle.textContent = `${activeData.type}-${activeData.breed}`;
    modalText.textContent = activeData.description;
    const modalDescription = ['age', 'inoculations', 'diseases', 'parasites'];
    let modalItems = modalDescription.reduce((acc, el) => (acc += createModalList(activeData, el)), '');
    modalList.insertAdjacentHTML('afterbegin', modalItems);
};
//create description for pets
function createModalList(activeData, el) {
    return `<li class="modal-list-item">
                <div class="modal-point"></div>
                <div class="modal-item-text">
                    <b>${el}:</b>
                     ${activeData[el]}
                </div>
            </li>`
};
function showModal(activeData) {
    modal.classList.add('modal-active');
    body.classList.add('block');
    overlay.classList.add('overlay-active');
};
function closeModal() {
    modal.classList.remove('modal-active');
    body.classList.remove('block');
    overlay.classList.remove('overlay-active');
    modalList.replaceChildren();
};
overlay.addEventListener('click', () => {
    closeModal();
});
modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close')) {
        closeModal()
    }
});
