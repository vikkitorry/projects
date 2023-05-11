function createBoard(num, className, gameOpt) {
  const game = document.querySelector('.game');
  const prevLevel = game.classList[1];
  game.classList.add(className);
  game.classList.remove(prevLevel);
  game.innerHTML = '';
  let childs = [];
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


export {createBoard};