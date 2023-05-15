import {createElm} from './create-element.js';
import {createBoard} from './game.js';

const createModal = function(result, isThemeLigth) {
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
    // todo добавить 3 класс для кнопок, чтоб он выделял их (класс active-btn)
  //для этого создать норм структуру для гейм и вытаскивать его
  const hard = createElm('div', ['hard-level', 'btn'], containerItems);
  const normal = createElm('div', ['normal-level', 'btn'], containerItems);
  const easy = createElm('div', ['easy-level', 'btn'], containerItems);

  createElm('div', ['load', 'btn'], containerSaved).textContent = 'Load Saved Game';
  createElm('div', [], containerLvl).textContent = 'Change Level';
  const bombs = createElm('div', ['container'], containerModal);
  const changeTheme = createElm('div', ['container'], containerModal);

  const input = createElm('div', ['btn', 'input'], bombs);
  const arrows =   createElm('div', ['arrows'], input);
  const bombsDownBtn = createElm('div', ['arrow-down'], arrows);
  const bombsUpBtn =createElm('div', ['arrow-up'], arrows);
    //если сохранено значение добавь его в валие а точнее текстконтент
  const numOfBombs = createElm('div', ['bombs-num'], input);
  numOfBombs.textContent = 10
  createElm('div', [], bombs).textContent = 'Bombs';
  const containerBtn= createElm('div', ['container-items'], changeTheme);
  createElm('div', ['dark', 'btn', `${!isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', ['light', 'btn', `${isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', [], changeTheme).textContent = 'Change Theme';
  bombsSettings(numOfBombs, bombsUpBtn, bombsDownBtn);
  modalWindow(modal, close, numOfBombs, hard, normal, easy);
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

const modalWindow = function(modal, close, bombs, hard, normal, easy) {
  const settings = document.querySelector('.open');
  let bombsBefore;
  let levelBefore;
  //добавить что уровень завит от сахранения
  let level = 'easy';
  easy.classList.add('active-btn')
  //добавить что число завит от сахранения
  let num = 10;
  let bomb = 10;
  settings.addEventListener('click', () => {
    bombsBefore = +bombs.textContent;
    levelBefore = level;
    modal.classList.toggle('modal-active');
  });
  close.addEventListener('click', () => {
    const bombsAfter = +bombs.textContent;
    bomb = bombsAfter;
    if (bombsBefore !== bombsAfter || levelBefore !== level) {
      const counter = document.querySelector('.bomb-counter');
      counter.textContent = bomb;
      createBoard(num, level, bomb)
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

    /*
    <p>${localStorage.getItem(result[9]) || 'Date: 22.05.23 Steps: 05 Time: 01:14 Win: No'}</p>
    <p>${localStorage.getItem(result[8]) || 'Date: 21.05.23 Steps: 31 Time: 04:02 Win: No'}</p>
    <p>${localStorage.getItem(result[7]) || 'Date: 19.05.23 Steps: 17 Time: 05:32 Win: No'}</p>
    <p>${localStorage.getItem(result[6]) || 'Date: 19.05.23 Steps: 14 Time: 03:46 Win: No'}</p>
    <p>${localStorage.getItem(result[5]) || 'Date: 17.05.23 Steps: 08 Time: 02:15 Win: No'}</p>
    <p>${localStorage.getItem(result[4]) || 'Date: 15.05.23 Steps: 12 Time: 01:25 Win: No'}</p>
    <p>${localStorage.getItem(result[3]) || 'Date: 15.05.23 Steps: 28 Time: 10:28 Win: Yes'}</p>
    <p>${localStorage.getItem(result[2]) || 'Date: 15.05.23 Steps: 10 Time: 03:38 Win: No'}</p>
    <p>${localStorage.getItem(result[1]) || 'Date: 15.05.23 Steps: 21 Time: 02:35 Win: No'}</p>
    <p>${localStorage.getItem(result[0]) || 'Date: 14.05.23 Steps: 11 Time: 01:31 Win: No'}</p>
    */