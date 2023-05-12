import {createElm} from './create-element.js';

const buildPage = function(level, isThemeLigth, isSoundOn) {
  const theme = isThemeLigth ? 'light-theme' : 'dark-theme'
  const body = document.querySelector('body');
  body.classList.add(theme)
  const main = createElm('main', [], body);
  createElm('div', ['game', `${localStorage.getItem(level)}`], main);
  const menu = createElm('div', ['menu'], main);
  const settings = createElm('div', ['settings'], menu);
  const reset = createElm('div', ['reset'], menu);
  const times = createElm('div', ['time'], menu);
  const moves = createElm('div', ['moves'], menu);
  createElm('div', ['sound', `${isSoundOn ? 'sound-on' : 'sound-off'}`], menu);
  createElm('div', ['desc'], moves);
  createElm('div', ['counter'], moves);
  createElm('div', ['desc'], times);
  createElm('div', ['timer'], times);
  createElm('div', ['desc'], reset);
  createElm('div', ['save'], settings);
  createElm('div', ['desc', 'open'], settings);
};

export {buildPage};