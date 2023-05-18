const turnSound = function(isSoundOn) {
  const sound = document.querySelector('.sound');
  const btn = document.querySelectorAll('.btn');
  const reset = document.querySelector('.reset');
  const save = document.querySelector('.save');
  const close = document.querySelector('.close');
  const open = document.querySelector('.open');
  const allBtn = [...btn, sound, reset, save, close, open];
  let ismodalOpen = false;
  const audio = new Audio();
  const audioMenu = new Audio();
  allBtn.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.closest('.sound')) {
        if (isSoundOn) {
          sound.classList.remove('sound-on');
          sound.classList.add('sound-off');
          localStorage.setItem('sound', 'off')
          isSoundOn = !isSoundOn
          audio.preload = 'auto';
          audio.src = './assets/sound/menu-click.mp3';
          audio.play();
        } else {
          sound.classList.add('sound-on');
          sound.classList.remove('sound-off');
          localStorage.setItem('sound', 'on')
          isSoundOn = !isSoundOn
        }
      }
      if (isSoundOn) {
        audio.preload = 'auto';
        audio.src = './assets/sound/menu-click.mp3';
        audio.play();
      }
      //if modal is open
      if (el.closest('.open')) {
        ismodalOpen = !ismodalOpen
        if (ismodalOpen && isSoundOn) {
          if (document.querySelector('body').classList.contains('light-theme')) {
            audioMenu.preload = 'auto';
            audioMenu.src = './assets/sound/open-modal.mp3';
            audioMenu.play();
          } else {
            audioMenu.preload = 'auto';
            audioMenu.src = './assets/sound/open-modal2.mp3';
            audioMenu.play();
          }
        }
      }
      // if change theme in modal window
      if (el.closest('.dark') && isSoundOn) {
        audioMenu.currentTime = 0;
        audioMenu.pause();
        audioMenu.src = './assets/sound/open-modal2.mp3';
        audioMenu.play();
      }
      if (el.closest('.light') && isSoundOn) {
        audioMenu.currentTime = 0;
        audioMenu.pause();
        audioMenu.src = './assets/sound/open-modal.mp3';
        audioMenu.play();
      }
      if (el.closest('.close')) {
        ismodalOpen = !ismodalOpen
        audioMenu.currentTime = 0;
        audioMenu.pause();
      }
    });
  })
};

export {turnSound};