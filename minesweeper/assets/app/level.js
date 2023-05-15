import {createBoard} from './game.js'

const changeLevel = function() {
  const easy = document.querySelector('.easy-level');
  const normal = document.querySelector('.normal-level');
  const hard = document.querySelector('.hard-level');
  easy.addEventListener('click', () => {
    if (!easy.classList.contains('active-btn')) {
      easy.classList.add('active-btn');
      const normalIsActive = normal.classList.contains('active-btn');
      normalIsActive ? normal.classList.remove('active-btn') : hard.classList.remove('active-btn');
      createBoard(10, 'easy');
    }
  });
  normal.addEventListener('click', () => {
    if (!normal.classList.contains('active-btn')) {
      normal.classList.add('active-btn');
      const easyIsActive = easy.classList.contains('active-btn');
      easyIsActive ? easy.classList.remove('active-btn') : hard.classList.remove('active-btn');
      createBoard(15, 'normal');
    }
  });
  hard.addEventListener('click', () => {
    if (!hard.classList.contains('active-btn')) {
      hard.classList.add('active-btn');
      const easyIsActive = easy.classList.contains('active-btn');
      easyIsActive ? easy.classList.remove('active-btn') : normal.classList.remove('active-btn');
      createBoard(20, 'hard');
    }
  });
};

export {changeLevel};