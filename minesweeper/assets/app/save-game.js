let time;
let saveBtn;
let sec = 0;
let min = 0;


function savedGame(game) {
  saveBtn = document.querySelector('.save');
  time = document.querySelector('.timer');
  if (game) {

  }
  startTime(time);
  saveBtn.addEventListener('click', () => {
    saveGame()
  })
};

function saveGame() {
  const lastGame = {
    sec: sec,
    min: min,
    field: 'field'
  }
  localStorage.setItem('game', JSON.stringify(lastGame));
  console.log(JSON.parse(localStorage.getItem ("game")))
};

//console.log(time)
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
};




export {savedGame};