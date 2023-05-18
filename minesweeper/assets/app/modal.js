import {createElm} from './create-element.js';
import {createBoard} from './game.js';

const createModal = function(isThemeLigth) {
  const body = document.querySelector('body');
  const modal = createElm('div', ['modal'], body);
  const containerSaved = createElm('div', ['container', 'tttttttttt'], modal);
  const container = createElm('div', ['container'], modal);
  const containerLvl = createElm('div', ['container'], modal);
  const containerModal = createElm('div', ['modal-container'], modal);
  const settings = createElm('h1', [], modal);
  const close = createElm('div', ['close'], modal);
  createElm('div', ['results'], container);
  createElm('div', [], container).textContent = 'Results';
  const containerItems = createElm('div', ['container-items'], containerLvl);
  const hard = createElm('div', ['hard-level', 'btn'], containerItems);
  const normal = createElm('div', ['normal-level', 'btn'], containerItems);
  const easy = createElm('div', ['easy-level', 'btn'], containerItems);
  const load = createElm('div', ['load', 'btn'], containerSaved);
  load.textContent = 'Load Saved Game';
  createElm('div', [], containerLvl).textContent = 'Change Level';
  const bombs = createElm('div', ['container'], containerModal);
  const changeTheme = createElm('div', ['container'], containerModal);
  const input = createElm('div', ['btn', 'input'], bombs);
  const arrows =   createElm('div', ['arrows'], input);
  const bombsDownBtn = createElm('div', ['arrow-down'], arrows);
  const bombsUpBtn =createElm('div', ['arrow-up'], arrows);
  const numOfBombs = createElm('div', ['bombs-num'], input);
  numOfBombs.textContent = 10;
  createElm('div', [], bombs).textContent = 'Bombs';
  const containerBtn= createElm('div', ['container-items'], changeTheme);
  createElm('div', ['dark', 'btn', `${!isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', ['light', 'btn', `${isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', [], changeTheme).textContent = 'Change Theme';
  bombsSettings(numOfBombs, bombsUpBtn, bombsDownBtn);
  modalWindow(modal, close, numOfBombs, hard, normal, easy, load);
}

function bombsSettings(numOfBombs, up, down) {
  up.addEventListener('click', () => {
    if (+numOfBombs.textContent < 99) {
      numOfBombs.textContent++
    }
  });
  down.addEventListener('click', () => {
    if (+numOfBombs.textContent > 10) {
      numOfBombs.textContent--
    }
  });
};

const modalWindow = function(modal, close, bombs, hard, normal, easy, load) {
  const settings = document.querySelector('.open');
  let bombsBefore;
  let levelBefore;
  let level = 'easy';
  easy.classList.add('active-btn')
  let num = 10;
  let bomb = 10;
  let isLoadPressed;

  load.addEventListener('click', () => {
    isLoadPressed = true;
  });

  settings.addEventListener('click', () => {
    isLoadPressed = false;
    bombsBefore = +bombs.textContent;
    levelBefore = level;
    const final = document.querySelector('.final');
    if (final.classList.contains('final-active')) {
      final.classList.remove(`${final.classList[1]}`)
    }
    modal.classList.toggle('modal-active');
  });

  close.addEventListener('click', () => {
    const bombsAfter = +bombs.textContent;
    bomb = bombsAfter;
    if (!isLoadPressed && (bombsBefore !== bombsAfter || levelBefore !== level)) {
      const counterBomb = document.querySelector('.bomb-counter');
      const counterFlag = document.querySelector('.flag-counter');
      counterBomb.textContent = bomb;
      counterFlag.textContent = 0;
      createBoard(num, level, bomb);
    }
    modal.classList.remove('modal-active');
  });

  easy.addEventListener('click', () => {
    if (!easy.classList.contains('active-btn')) {
      easy.classList.add('active-btn');
      const normalIsActive = normal.classList.contains('active-btn');
      normalIsActive ? normal.classList.remove('active-btn') : hard.classList.remove('active-btn');
      level = 'easy';
      num = 10;
    }
  });

  normal.addEventListener('click', () => {
    if (!normal.classList.contains('active-btn')) {
      normal.classList.add('active-btn');
      const easyIsActive = easy.classList.contains('active-btn');
      easyIsActive ? easy.classList.remove('active-btn') : hard.classList.remove('active-btn');
      level = 'normal';
      num = 15;
    }
  });

  hard.addEventListener('click', () => {
    if (!hard.classList.contains('active-btn')) {
      hard.classList.add('active-btn');
      const easyIsActive = easy.classList.contains('active-btn');
      easyIsActive ? easy.classList.remove('active-btn') : normal.classList.remove('active-btn');
      level = 'hard';
      num = 25;
    }
  });

};

export {createModal};