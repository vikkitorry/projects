const turnSound = function(isSoundOn) {
  const sound = document.querySelector('.sound');
  sound.addEventListener('click', () => {
    if (isSoundOn) {
      sound.classList.remove('sound-on');
      sound.classList.add('sound-off');
      localStorage.setItem('sound', 'off')
      isSoundOn = !isSoundOn
    } else {
      sound.classList.add('sound-on');
      sound.classList.remove('sound-off');
      localStorage.setItem('sound', 'on')
      isSoundOn = !isSoundOn
    }
  });
};

let audio = new Audio();

export {turnSound};