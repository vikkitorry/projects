import {createElm} from './create-element.js';

const createModal = function(result, isThemeLigth, game) {
  const body = document.querySelector('body');
  const modal = createElm('div', ['modal'], body);
  const container = createElm('div', ['container'], modal);
  const containerLvl = createElm('div', ['container'], modal);
  const containerModal = createElm('div', ['modal-container'], modal);
  const settings = createElm('h1', [], modal);
  const close = createElm('div', ['close'], modal);
  createElm('div', ['results'], container);
  createElm('div', [], container).textContent = 'Results';
  const containerItems = createElm('div', ['container-items'], containerLvl);
    // todo добавить 3 класс для кнопок, чтоб он выделял их (класс active-btn)
  //для этого создать норм структуру для гейм и вытаскивать его
  createElm('div', ['hard-level', 'btn'], containerItems);
  createElm('div', ['normal-level', 'btn'], containerItems);
  createElm('div', ['easy-level', 'btn'], containerItems);
  createElm('div', [], containerLvl).textContent = 'Change Level';
  const bombs = createElm('div', ['container'], containerModal);
  const changeTheme = createElm('div', ['container'], containerModal);
  createElm('input', ['btn'], bombs).value = 10;
  createElm('div', [], bombs).textContent = 'Bombs';
  const containerBtn= createElm('div', ['container-items'], changeTheme);
  createElm('div', ['dark', 'btn', `${!isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', ['light', 'btn', `${isThemeLigth ? 'active-btn' : 'btn'}`], containerBtn);
  createElm('div', [], changeTheme).textContent = 'Change Theme';

  modalWindow(modal, close);
}

const modalWindow = function(modal, close) {
  const settings = document.querySelector('.open')
  settings.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
  });
};

export {createModal};

    /*
    <p>${localStorage.getItem(result[9]) || 'Date: 22.05.23 Steps: 05 Time: 01:14 Win: No'}</p>
    <p>${localStorage.getItem(result[8]) || 'Date: 21.05.23 Steps: 31 Time: 04:02 Win: No'}</p>
    <p>${localStorage.getItem(result[7]) || 'Date: 19.05.23 Steps: 17 Time: 05:32 Win: No'}</p>
    <p>${localStorage.getItem(result[6]) || 'Date: 19.05.23 Steps: 14 Time: 03:46 Win: No'}</p>
    <p>${localStorage.getItem(result[5]) || 'Date: 17.05.23 Steps: 08 Time: 02:15 Win: No'}</p>
    <p>${localStorage.getItem(result[4]) || 'Date: 15.05.23 Steps: 12 Time: 01:25 Win: No'}</p>
    <p>${localStorage.getItem(result[3]) || 'Date: 15.05.23 Steps: 28 Time: 10:28 Win: Yes'}</p>
    <p>${localStorage.getItem(result[2]) || 'Date: 15.05.23 Steps: 10 Time: 03:38 Win: No'}</p>
    <p>${localStorage.getItem(result[1]) || 'Date: 15.05.23 Steps: 21 Time: 02:35 Win: No'}</p>
    <p>${localStorage.getItem(result[0]) || 'Date: 14.05.23 Steps: 11 Time: 01:31 Win: No'}</p>
    */