import {createModal} from './modal.js';
import {changeTheme} from './theme.js';
import {createBoard} from './create-board.js';
import {changeLevel} from './level.js';
import {buildPage} from './build-page.js'



function createPage(options) {
  const isThemeLigth = options[0];
  const game = options[1];
  const level = options[2];
  const isSoundOn = options[3];
  const results = options[4];
  buildPage(level);
  //  if level is easy and game is not saved the game
  //  will start with default options
  if (!game && level === 'easy') {
    createBoard(10, 'easy');
  } else {
    createBoard(10, level, game);
  }
  createModal(results);
  changeTheme();
  changeLevel();
}

function checkOptions() {
  const isThemeLigth = localStorage.getItem('theme') || true;
  // isSave будет хранить массив с игрой, и класс для game
  const game = localStorage.getItem('game')|| false;
  const level = localStorage.getItem('level')|| 'easy';
  const isSoundOn = localStorage.getItem('sound') || true;
  const results = localStorage.getItem('sound') || false;
  return [isThemeLigth, game, level, isSoundOn, results];
}

window.addEventListener('load', () => {
  const options = checkOptions();
  createPage(options);
});



console.log()
