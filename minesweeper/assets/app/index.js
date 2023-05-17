import {createModal} from './modal.js';
import {changeTheme} from './theme.js';
import {buildPage} from './build-page.js';
import {createBoard, loadSavedGame, saveGame, resetGame, addResults} from './game.js';
import {turnSound} from './sound.js';



function createPage() {
  const level = 'easy';
  buildPage(level, true, true);
  createModal(true);
  createBoard(10, level, 10);
  turnSound(true);
  changeTheme();
  resetGame();
  saveGame();
  loadSavedGame();
  addResults();
}


window.addEventListener('load', () => {
  createPage();
});