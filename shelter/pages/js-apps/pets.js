import {data, matrix} from './data.js';
import {shuffle, createListCards} from './cards.js'

//plagination
//окно и будет маяком
const ourWindow = document.querySelector('.our__window');
const btnStart = document.querySelector('.double-flip-left');
const btnPrev = document.querySelector('.flip-left');
const btnEnd = document.querySelector('.double-flip-right');
const btnNext = document.querySelector('.flip-right');
const pageNumber = document.querySelector('.page-number');
let slidersObjBig = {};
let slidersObjMedium = {};
let slidersObjSmall = {};
let page = 1;
let maxPage;

window.addEventListener('load', function () {
    const screenWidth = window.innerWidth;
    let newData = shuffleArr();
    if (screenWidth >= 1280) {
        maxPage = 6;
    } else if (screenWidth >= 768) {
        maxPage = 8;
    } else {
        maxPage = 16;
    }
    createSliders(6, 8, newData, 'big');
    createSliders(8, 6, newData, 'medium');
    createSliders(16, 3, newData, 'small');
    ourWindow.insertAdjacentHTML('afterbegin', slidersObjBig[1].cards);
    ourWindow.insertAdjacentHTML('afterbegin', slidersObjMedium[1].cards);
    ourWindow.insertAdjacentHTML('afterbegin', slidersObjSmall[1].cards);
});
//create arr(48 items) where each animal is repeated only 6 times(according to task);
//animal shouldn't be repeated in the slide
function shuffleArr() {
    let shufledArr = shuffle(data, 8);
    let dataArr = [];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < shufledArr.length; j++) {
            shufledArr[j].num = j + 1;
            if (shufledArr[j].num === matrix[i]) {
                dataArr.push(shufledArr[j]);
            };
        };
    };
    return dataArr.flat();
};
function createSliders(sliderNum, numCards, newData, size) {
    let arr = createSlide(numCards, newData)
    for(let i = 0; i < sliderNum; i++) {
        let num = i + 1;
        if (size === 'big') {slidersObjBig[num] = {number: num , cards: createNextSlide(arr[i], size)}}
        else if (size === 'medium') {slidersObjMedium[num] = {number: num, cards: createNextSlide(arr[i], size)}}
        else if (size === 'small') {slidersObjSmall[num] = {number: num, cards: createNextSlide(arr[i], size)}}
    };
};
//create slide based on assignment
function createSlide(numCards, newData) {
    let res = [];
    for (let i = 0; i < newData.length; i += numCards) {
      const chunk = newData.slice(i, i + numCards)
      res.push(chunk)
    }
    return res;
}
//create html node for slider
function createNextSlide(pets, size) {
    return `<div class="our_slider ${size}">
                ${createListCards(pets)}
            </div>`;
};
//page counter
function pageNum(num) {
    return page += num;
};
window.addEventListener('resize', (e) => {
    let screenSize = window.outerWidth;
    if (screenSize >= 1280) {
        if (page > 6) {page = 6}
        maxPage = 6
        pageNumber.textContent = page;
        checkPage(page)
    } else if (screenSize >= 768) {
        if (page > 8)  {page = 8}
        maxPage = 8
        pageNumber.textContent = page;
        checkPage(page)
    } else {
        checkPage(page)
        maxPage = 16
    }
});
//add visual effects for buttons
function checkPage(n) {
    if (page === maxPage){
        disableBtn(btnNext, btnEnd);
        activeBtn(btnPrev, btnStart);
    } else if (page === 1){
        disableBtn(btnPrev, btnStart);
        activeBtn(btnNext, btnEnd);
    } else if (page > 1) {
        activeBtn(btnPrev, btnStart);
        activeBtn(btnNext, btnEnd);
    } else if (page < maxPage){
        activeBtn(btnNext, btnEnd);
        activeBtn(btnPrev, btnStart);
    }
};
function disableBtn(btnDis1, btnDis2) {
    btnDis1.classList.add('flip-disabled');
    btnDis2.classList.add('flip-disabled');
};
function activeBtn(btnAct1, btnAct2) {
    btnAct1.classList.remove('flip-disabled');
    btnAct2.classList.remove('flip-disabled');
};
function showNewWindow(actualPage) {
    pageNumber.textContent = actualPage;
    ourWindow.replaceChildren();
    if (page > 8) {
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjMedium[8].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjBig[6].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjSmall[actualPage].cards);
    } else if (page > 6) {
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjMedium[actualPage].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjBig[6].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjSmall[actualPage].cards);
    } else if (page <= 6){
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjMedium[actualPage].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjBig[actualPage].cards);
        ourWindow.insertAdjacentHTML('afterbegin', slidersObjSmall[actualPage].cards);
    }
    checkPage(page);
}
btnNext.addEventListener('click', function () {
    if (page >= 1 && page < maxPage) {
        let actualPage = pageNum(1);
        showNewWindow(actualPage);
    }
});
btnPrev.addEventListener('click', function () {
    if (page > 1 && page <= maxPage) {
        let actualPage = pageNum(-1);
        showNewWindow(actualPage);
    }
});
btnEnd.addEventListener('click', function () {
    if (page >= 1 && page <= maxPage) {
        let actualPage = maxPage;
        page = actualPage;
        showNewWindow(actualPage);
    }
});
btnStart.addEventListener('click', function () {
    if (page >= 1 && page <= maxPage) {
        let actualPage = 1;
        page = actualPage;
        showNewWindow(actualPage);
    }
});

//modal window
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');
const modal = document.querySelector('.modal');
const modalTittle = document.querySelector('.modal-tittle');
const modalSubtittle = document.querySelector('.modal-subtittle');
const modalText = document.querySelector('.modal-text');
const modalList = document.querySelector('.modal-list');
const modalPic = document.querySelector('.modal-pic');

ourWindow.addEventListener('click', (event) => {
    if (event.target.closest('.friends__card')) {
        let activeData = data.filter((item) => item.name === event.target.closest('.friends__card').dataset.name);
        activeData = activeData[0];
        createModal(activeData);
        showModal();
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
}
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
    };
});
