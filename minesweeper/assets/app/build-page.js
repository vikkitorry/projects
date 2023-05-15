import {createElm} from './create-element.js';

const buildPage = function(level, isThemeLigth, isSoundOn) {
  const theme = isThemeLigth ? 'light-theme' : 'dark-theme'
  const body = document.querySelector('body');
  body.classList.add(theme)
  const main = createElm('main', [], body);
  createElm('div', ['game', `${localStorage.getItem(level)}`], main);
  const menu = createElm('div', ['menu'], main);
  const counters = createElm('div', ['counters'], body);
  const flagsCounter = createElm('div', ['flags'],counters);
  const bomsCounter = createElm('div', ['bombs'], counters);
  createElm('div', ['flag-counter'], flagsCounter);
  createElm('div', ['flag-item'], flagsCounter);
  createElm('div', ['bomb-counter'], bomsCounter).textContent = 10;
  createElm('div', ['bomb-item'], bomsCounter);
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
  createElm('div', ['final'], body);
  document.oncontextmenu = function (){return false}
};

export {buildPage};