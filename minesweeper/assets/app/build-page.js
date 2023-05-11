const buildPage = function(level, isThemeLigth, isSoundOn) {
  const body = document.querySelector('body');
  const theme = isThemeLigth ? 'light-theme' : 'dark-theme'
  body.classList.add(theme)
  const main =
  `
  <main>
  <div class="menu">
    <div class="sound ${isSoundOn ? 'sound-on' : 'sound-off'}"></div>
    <div class="moves">
      <div class="counter">1</div>
      <div class="desc">Steps</div>
    </div>
    <div class="time">
      <div class="timer"></div>
      <div class="desc">Time</div>
    </div>
    <div class="reset">
      <div class="desc">Reset Game</div>
    </div>
    <div class="settings">
      <div class="desc settng">Settings</div>
      <div class="save">Save</div>
    </div>
  </div>
  <div class="game ${localStorage.getItem(level)}">
  </div>
</main>`
  body.insertAdjacentHTML('afterbegin', main);
};


export {buildPage};