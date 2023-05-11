const buildPage = function(level) {
  const body = document.querySelector('body');
  const main =
  `
  <main>
  <div class="menu">
    <div class="sound sound-on"></div>
    <div class="moves">
      <div class="counter">1</div>
      <div class="desc">Steps</div>
    </div>
    <div class="time">
      <div class="timer">00:00</div>
      <div class="desc">Time</div>
    </div>
    <div class="reset">
      <div class="desc">Reset Game</div>
    </div>
    <div class="settings">
      <div class="desc">Settings</div>
      <div class="save">Save</div>
    </div>
  </div>
  <div class="game ${localStorage.getItem(level)}">
  </div>
</main>`
  body.insertAdjacentHTML('afterbegin', main);
};


export {buildPage};