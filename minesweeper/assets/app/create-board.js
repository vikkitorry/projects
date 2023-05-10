function createBoard(num, className) {
  const game = document.querySelector('.game');
  const prevLevel = game.classList[1];
  game.classList.add(className);
  game.classList.remove(prevLevel);
  game.innerHTML = '';
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    game.appendChild(item)
  }
}


export {createBoard};