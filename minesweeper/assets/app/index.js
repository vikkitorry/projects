import {createModal} from './modal.js';
import {changeTheme} from './theme.js';
import {createBoard} from './game.js';
import {buildPage} from './build-page.js';
import {turnSound} from './sound.js';



function createPage() {
  const isThemeLigth = true;
  const level = 'easy';
  const isSoundOn = 'on';
  // results from localstorage явл просто объектом
//надо переделать, чтоб он принимал
  const results = localStorage.getItem('sound') || false;
  buildPage(level, isThemeLigth, isSoundOn);
  createModal(results, isThemeLigth, 10);
  createBoard(10, 'easy', 10);
  turnSound(isSoundOn);
  changeTheme();
}


window.addEventListener('load', () => {
  createPage();
});