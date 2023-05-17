let cell = [];
let saveBtn;
let step = 0;
let stepCounter;
let gameContainer;
let flags = [];
let allBombs;
let actualLevel;
//time settings
let timerId;
let sec = 0;
//let min = 0;
let time;
let timeContainer;

function createBoard(num, className, numBombs, lastGameOpt) {
  cell.length = 0;
  timeContainer = document.querySelector('.timer');
  stepCounter = document.querySelector('.counter');
  gameContainer = document.querySelector('.game');
  gameContainer.innerHTML = '';
  const prevLevel = gameContainer.classList[1];
  gameContainer.classList.remove(prevLevel);
  if (lastGameOpt) {
    const bombs = lastGameOpt.bombs;
    const сells = lastGameOpt.сells;
    const row = Math.round(Math.sqrt(сells.length + 1));
    createLoadField(lastGameOpt, сells);
    cellAction(cell, row, row, 0, false, bombs);
  } else {
    actualLevel = className;
    createNewGame(num, className);
    startTime(false);
    startTime(true);
    cellAction(cell, num, num, numBombs, true);
  }
};

function createLoadField(lastGameOpt, сells) {
  const level = lastGameOpt.level;
  const bombsWindow = lastGameOpt.bombsWindow;
  const steps = lastGameOpt.steps;
  const seconds = lastGameOpt.seconds;
  //const minutes = lastGameOpt.minutes;
  const flagsCount = lastGameOpt.flagsCount;
  const bombCounter = lastGameOpt.bombsCount;
  gameContainer.classList.add(level);
  actualLevel = level;
  document.querySelector('.bombs-num').textContent = bombsWindow;
  document.querySelector('.flag-counter').textContent = flagsCount;
  document.querySelector('.bomb-counter').textContent = bombCounter;

  step = steps;
  stepCounter.textContent = step;

  for (let i = 0; i < сells.length; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    const cellId = сells[i].id;
    const cellClass = сells[i].className;
    const cellText = сells[i].num;
    if (cellClass !== 0) {
      item.classList.add(cellClass);
    }
    if (cellId !== 0) {
      item.id = cellId;
      item.textContent = cellText;
    }
    gameContainer.appendChild(item);
    cell.push(item);
  }
}

function createNewGame(num, className) {
  step = 0;
  stepCounter.textContent = step;
  gameContainer.classList.add(`${className}`);
  for (let i = 0; i < num * num; i++) {
    const item = document.createElement('div');
    item.classList.add('cell');
    gameContainer.appendChild(item);
    cell.push(item);
  }
}


function cellAction(cells, width, height, numBombs, isNewGame, bombs) {
  const cellsCount = width * height
  let closedCount = cellsCount;
  let isFirstClick = isNewGame;
  let bombsArr;
  if (!isNewGame) {
    bombsArr = bombs;
    allBombs = bombs;
  }
  cells.forEach((e, index) => {
    e.addEventListener('mousedown', (evt) => {
      evt.preventDefault();
      if (!document.querySelector('.final-active')) {
        evt.preventDefault();
        if (evt.button === 2) {
          const flagCounter = document.querySelector('.flag-counter');
          const bombCounter = document.querySelector('.bomb-counter');
          if (e.classList.contains('flag')) {
            e.classList.remove('flag');
            flags.filter((elm) => elm === index)
            bombCounter.textContent++
            flagCounter.textContent--
          } else if (!e.classList.contains('active')) {
            e.classList.add('flag');
            flags.push(index);
            bombCounter.textContent--
            flagCounter.textContent++
          }
          if (!!document.querySelector('.sound-on') && !e.classList.contains('active')) {
            let audioFlag = new Audio();
            audioFlag.preload = 'auto';
            audioFlag.src = './assets/sound/item-click2.mp3';
            audioFlag.play();
          }
        }
        if (evt.button === 0) {
          if (!e.classList.contains('flag') && !e.classList.contains('active')) {
            step++;
            stepCounter.textContent = step;
            if (!!document.querySelector('.sound-on')) {
              let audioCell = new Audio();
              audioCell.preload = 'auto';
              audioCell.src = './assets/sound/item-click.mp3';
              audioCell.play();
            }
            closedCount--;
            if (isFirstClick) {
              step = 1;
              stepCounter.textContent = 1;
              bombsArr = [...Array(cell.length).keys()]
                            .filter((el) => el !== index)
                            .sort(() => Math.random() - 0.5)
                            .slice(0, numBombs);
              allBombs = bombsArr;
              addGameLogic(width, height, bombsArr, index);
              isFirstClick = false;
            } else {
              addGameLogic(width, height, bombsArr, index)
            }
          }
        }
      }
    });
  });
};


function loadSavedGame() {
  const loadBtn = document.querySelector('.load');
  loadBtn.addEventListener('click', () => {
    const loadGame = JSON.parse(localStorage.getItem ("gameVikkiTorry"));
    createBoard(0, 0, 0, loadGame)
  })
};

function saveGame() {
  saveBtn = document.querySelector('.save');
  saveBtn.addEventListener('click', () => {
    const final = document.querySelector('.final');
    if (!!final) {
      final.textContent = 'Nothing To Save. You End Game!'
    }
    if (!allBombs) {
      final.classList.add('final-active');
      final.textContent = 'Nothing to save :( Make first move.'
    } else {
      const savedLevel = gameContainer.classList[1];
      const bombsNum = +document.querySelector('.bombs-num').textContent;
      const flagsCounter = +document.querySelector('.flag-counter').textContent;
      const bombCounter = document.querySelector('.bomb-counter').textContent;
      let gameField = [];
      cell.forEach((el, i) => {
        let chunk = {};
        chunk.id = el.id || 0;
        chunk.className = el.classList[1] || 0;
        chunk.num = el.textContent || 0;
        gameField.push(chunk);
      })
      const lastGame = {
        level: savedLevel,
        bombsWindow: bombsNum,
        bombs: allBombs,
        steps: step,
        seconds: sec,
        //minutes: min,
        сells: gameField,
        flagsCount: flagsCounter,
        bombsCount: bombCounter,
      }
      localStorage.setItem('gameVikkiTorry', JSON.stringify(lastGame));
    }
  })
  //console.log(JSON.parse(localStorage.getItem ("gameVikkiTorry")))
};


function startTime(isWork) {
  if (isWork) {
    timerId = setInterval(() => {
      sec++;
      /*
      feature: time in min and sec
      if (sec === 60) {
        min++;
        sec = 0;
      }
      if (min === 99) {
        min = 0;
        sec = 0;
      }
      timeContainer.textContent = [min, sec].map((e) => (e < 10 ? `0${e}` : e)).join(':');
      */
      timeContainer.textContent = sec;
      time = timeContainer.textContent;
    }, 1000) ;
  }
  if (!isWork) {
    //min = 0;
    sec = 0;
    clearInterval(timerId);
    timeContainer.textContent = '00';
  }
}


function resetGame() {
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', () => {
    startTime(false);
    stepCounter.textContent = 0;
    step = 0;
    const final = document.querySelector('.final');
    if (final.classList.contains('final-active')) {
      final.classList.remove(`${final.classList[1]}`);
    }
    let level = gameContainer.classList[1];
    let bombsNum = +document.querySelector('.bombs-num').textContent;
    createBoard(Math.round(Math.sqrt(cell.length + 1)) || 10, level || 'easy', bombsNum || 10);
  })
}

function addGameLogic(width, height, bombs, index) {
  const column = index % width;
  const row = Math.floor(index / width);
  openCell(row, column);
  function isValid(row, column) {
    return row >= 0
      && row < height
      && column >= 0
      && column < width
  }

  function getCount(row, column) {
    let count = 0;
    for(let x = -1; x <= 1; x++) {
      for(let y = -1; y <= 1; y++) {
        if (isBomb(row + y, column + x)) {
          count++;
        }
      }
    }
    return count;
  }

  function openCell(row, column) {
    if (!isValid(row, column)) return;
    const index = row * width + column;
    const btn = cell[index];
    if (btn.classList.contains('active')) return;
    if (btn.classList.contains('flag')) return;
    btn.classList.add('active');

    if(isBomb(row, column)) {
      const final = document.querySelector('.final');
      final.classList.add('final-active');
      final.textContent = 'Game over. Try again'
      createLocalResults(false)
      if (!!document.querySelector('.sound-on')) {
        const bombAudio = new Audio();
        bombAudio.preload = 'auto';
        bombAudio.src = './assets/sound/loser.mp3';
        bombAudio.play();
      }
      for (let i = 0; i < bombs.length; i++) {
        const bomb = bombs[i];
        cell[bomb].classList.add('bomb');
      }
        return;
    }

    const active = document.querySelectorAll('.active');
    const result = active.length;
    if (result === cell.length - bombs.length) {
      const final = document.querySelector('.final');
      final.classList.add('final-active');
      final.textContent = `Hooray! You found all mines in ${sec} seconds and ${step} moves!`
      createLocalResults(true);
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
      btn.textContent = count;
      return;
    }

    for(let x = -1; x <= 1; x++) {
      for(let y = -1; y <= 1; y++) {
        openCell(row + y, column + x);
      }
    }
    }

  function isBomb(row, column) {
    if (!isValid(row, column)) return false;
    const index = row * width + column;
    return bombs.includes(index);
  }
};

function createLocalResults(isWin) {
  let res = JSON.parse(localStorage.getItem("resultsVikkiTorry"));
  const gameRes =
    {
      win: isWin? 'Yes' : 'No',
      time: time || 10,
      steps: step,
      level: actualLevel,
      bombs: allBombs ? allBombs.length : document.querySelector('.bomb-counter').textContent,
    }
  if (res) {
    res.push(gameRes);
    const numOfRes = res.length;
    if (numOfRes === 10) {
      res.slice(-10);
    }
  }
  if (!res) {
    res = [];
    res.push(gameRes);
  }
  localStorage.setItem('resultsVikkiTorry', JSON.stringify(res));
  addResults();
}

function addResults() {
  const resContainer = document.querySelector('.results');
  const results = JSON.parse(localStorage.getItem ("resultsVikkiTorry")) || false;
  resContainer.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const res = document.createElement('p');
    const info = results[i]
    if (info && results) {
      res.textContent = `${i + 1}. Win: ${info.win}, Sec: ${info.time || 10}, Level: ${info.level}, Bombs: ${info.bombs}, Steps: ${info.steps}`
    } else {
      res.textContent = `${i + 1}. Еще нет данных, надо сначала поиграть :)`
    }
    resContainer.appendChild(res);
  }
};


export {createBoard, loadSavedGame, saveGame, resetGame, addResults};