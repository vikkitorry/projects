let childs = [];

function createBoard(num, className, gameOpt) {
  childs.slice();
  const game = document.querySelector('.game');
  const prevLevel = game.classList[1];
  game.classList.add(className);
  game.classList.remove(prevLevel);
  game.innerHTML = '';
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    game.appendChild(item);
    childs.push(item);
  }
  //  if player save game, gameOpt will contain
  //  info about game, else === false
  if (gameOpt) {
    addGameLogic(childs, gameOpt);
  } else {
    addGameLogic(childs, gameOpt);
  }
  addAudio(childs);
}

function addGameLogic(childs, gameOpt) {
  //console.log(childs)
  //add logic for childs add options? bombs and so on
  /*
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    game.appendChild(item)
  }*/
}

function addAudio(cells) {
  cells.forEach((e) => {
    e.addEventListener('click', () => {
      if (!!document.querySelector('.sound-on')) {
        let audioCell = new Audio();
        audioCell.preload = 'auto';
        audioCell.src = './assets/sound/item-click.mp3';
        audioCell.play();
      }
    });
  });
};

function checkCells() {
  console.log(childs)
  return childs;
}

export {createBoard, checkCells};