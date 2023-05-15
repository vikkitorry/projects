let cell = [];
let time;
let saveBtn;
let sec = 0;
let min = 0;
let step = 0;
let stepCounter;
let flags = [];


// gameOpt приходит с корня и явл просто объектом game from localstorage
//надо переделать, чтоб он принимал уровень
function createBoard(num, className, numBombs, isSaved) {
  cell.length = 0;
  stepCounter = document.querySelector('.counter');
  //todo добавить изменение кол-ва шагов если созранено в game.steps
  stepCounter.textContent = step;
  //аналогично с таймом

  const gameContainer = document.querySelector('.game');
  const prevLevel = gameContainer.classList[1];
  gameContainer.classList.remove(prevLevel);
  gameContainer.classList.add(`${className}`);
  //console.log(gameContainer.classList)
  gameContainer.innerHTML = '';
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    gameContainer.appendChild(item);
    cell.push(item);
  }
  //  if player save game, gameOpt will contain
  //  info about game, else === false
  if (isSaved) {
    savedGame(cell, isSaved);
  } else {
    //savedGame(cell, isSaved);
  }
  cellAction(cell, num, num, numBombs);
}


//добавить считыватель с инпута сколько бомб bombsCount
function cellAction(cells, width, height, numBombs) {
  const cellsCount = width * height
  let closedCount = cellsCount;
  let isFirstClick = true;
  let bombsArr;
  cells.forEach((e, index) => {
    e.addEventListener('mousedown', (evt) => {
      evt.preventDefault();
      if (evt.button === 2) {
        const flagCounter = document.querySelector('.flag-counter');
        const bombCounter = document.querySelector('.bomb-counter');
        if (e.classList.contains('flag')) {
          e.classList.remove('flag');
          flags.filter((elm) => elm === index)
          bombCounter.textContent++
          flagCounter.textContent--
        } else {
          e.classList.add('flag');
          flags.push(index);
          bombCounter.textContent--
          flagCounter.textContent++
        }
        if (!!document.querySelector('.sound-on')) {
          let audioFlag = new Audio();
          audioFlag.preload = 'auto';
          audioFlag.src = './assets/sound/item-click2.mp3';
          audioFlag.play();
        }
      }
      if (evt.button === 0) {
        if (!e.classList.contains('flag')) {
          step++;
          stepCounter.textContent = step
          if (!!document.querySelector('.sound-on')) {
            let audioCell = new Audio();
            audioCell.preload = 'auto';
            audioCell.src = './assets/sound/item-click.mp3';
            audioCell.play();
          }
          closedCount--;
          //bombsCount=10 временно после считывателя, убрать кол-во
          if (isFirstClick) {
            bombsArr = [...Array(cell.length).keys()]
                          .filter((el) => el !== index)
                          .sort(() => Math.random() - 0.5)
                          .slice(0, numBombs)

          addGameLogic(width, height, bombsArr, index, closedCount)
          }
          addGameLogic(width, height, bombsArr, index, closedCount)
          isFirstClick = false;
          //console.log(cell[0])
        }
      }
    });
  });
};

//при запуске игры достает прошлую если сохранена
function savedGame(game) {
  saveBtn = document.querySelector('.save');
  time = document.querySelector('.timer');
  const lastGame = JSON.parse(localStorage.getItem ("game"));

  if (lastGame.saved) {
    //console.log(1111)
  }
  //startTime(time);
  saveBtn.addEventListener('click', () => {
    saveGame()
  })
};

function saveGame() {
  //console.log(cell[0].dataset.game)
  const lastGame = {
    level: '',
    bombs: bombs, //передаю массив с бомбами
    steps: step,
    sec: sec,
    min: min,
    saved: true,
    сells: cell// надо передавать весь массив с открытыми и закрытыми ячейками
  }
  localStorage.setItem('game', JSON.stringify(lastGame));
  //console.log(JSON.parse(localStorage.getItem ("game")))
};


//есть глюк при каждой смене настроек он запускает время и время летит
/*
function timer() {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 99) {
    min = 0;
    sec = 0;
  }
  time.textContent = [min, sec].map((e) => (e < 10 ? `0${e}` : e)).join(':');
}

function startTime() {
  setInterval(timer, 1000);
};*/







function addGameLogic(width, height, bombs, index, closedCount) {
  //console.log(cell)
  //add logic for cell add options? bombs and so on
  /*
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    game.appendChild(item)
  }*/
  startGame(width, height, bombs, index, closedCount)
  function startGame(width, height, bombs, index, closedCount) {

    
    const column = index % width;
    const row = Math.floor(index/width)
    open(row, column)

    function isValid(row, column) {
      return row >= 0
      && row < height
      && column >= 0
      && column < width
    }
  
    //считает количество бомб и пишет циферку
    function getCount(row, column) {
      let count = 0;
      for(let x = -1; x <= 1; x++) {
        for(let y = -1; y <= 1; y++) {
          if (isBomb(row + y, column + x)) {
            count++
          }
        }
      }
      return count;
    }
    function open(row, column) {
      if (!isValid(row, column)) return;
  //index  записывает индексы всех открытых кнопок
  // и на которую нажал и которые автоматом открылись
      const index = row * width + column;
  //cell содержит в себе кнопки  которые открылись и была нажата
  //со ссылкой на них
      const btn = cell[index]
  
      if (btn.classList.contains('active')) return;
  
      //cell.disabled = true;
      btn.classList.add('active')
  //проигрыш
      if(isBomb(row, column)) {
        const final = document.querySelector('.final');
        final.classList.add('final-active');
        final.textContent = 'YOU ARE LOOSER :('
        if (!!document.querySelector('.sound-on')) {
          const bombAudio = new Audio();
          bombAudio.preload = 'auto';
          bombAudio.src = './assets/sound/loser.mp3';
          bombAudio.play();
        }
        for (let i = 0; i < bombs.length; i++) {
          const bomb = bombs[i];
          cell[bomb].classList.add('bomb')
        }
        return;
      }
      const active = document.querySelectorAll('.active');
      //const flag = document.querySelectorAll('.flag')
      //console.log(flag)
      const result = active.length
      if (result === cell.length - bombs.length) {
        const final = document.querySelector('.final');
        final.classList.add('final-active');
        final.textContent = 'YOU ARE WINNER!!!'
        if (!!document.querySelector('.sound-on')) {
          const winAudio = new Audio();
          winAudio.preload = 'auto';
          winAudio.src = './assets/sound/win.mp3';
          winAudio.play();
        }
        return;
      }
  
      const count = getCount(row, column)
      if(count != 0) {
        if (count > 6) {
          btn.id = 'color6'
        } else {
          btn.id = `color${count}`
        }
        btn.textContent = count
        return;
      }
      //открывает ячейки до циферок
      for(let x = -1; x <= 1; x++) {
        for(let y = -1; y <= 1; y++) {
          open(row + y, column + x)
        }
      }
    }
  
    function isBomb(row, column) {
      if (!isValid(row, column)) return false;
      const index = row * width + column;
      return bombs.includes(index)
    }
  }
}



export {createBoard, savedGame};