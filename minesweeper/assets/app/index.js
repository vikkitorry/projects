import {createModal} from './modal.js';
import {changeTheme} from './theme.js';
import {createBoard, loadSavedGame, saveGame, resetGame, createLocalResults} from './game.js';
import {buildPage} from './build-page.js';
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
  createLocalResults();
}


window.addEventListener('load', () => {
  createPage();
});