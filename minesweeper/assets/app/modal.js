const modalWindow = function() {
  const modal = document.querySelector('.modal');
  const settings = document.querySelector('.settings');
  const close = document.querySelector('.close');
  settings.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
  });
}

export {modalWindow};