import {modalWindow} from './modal.js'
import {changeTheme} from './theme.js'
import {createBoard} from './create-board.js'
import {changeLevel} from './level.js'


createBoard(10, 'easy');
modalWindow();
changeTheme();
changeLevel();

console.log()
