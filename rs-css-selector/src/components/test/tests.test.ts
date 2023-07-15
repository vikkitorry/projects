import { AppController } from '../controller/controller';
import { ElementCreator } from '../view/elementCreator';
import { ElementParams, IlocalStorage, LevelState, LocalStorageName } from '../../types/types';
import { LocalStorage } from '../app/localStorage';
import { describe, expect, test, jest } from '@jest/globals';

const controller = new AppController();

describe('getActualLevel', () => {
  test('should return the level as a number', () => {
    const levelElement = document.createElement('div');
    levelElement.classList.add('active');
    levelElement.textContent = 'Level 5';

    const querySelectorMock = jest.spyOn(document, 'querySelector');
    querySelectorMock.mockReturnValue(levelElement);

    const result = controller.getActualLevel();

    expect(result).toBe(5);

    expect(querySelectorMock).toHaveBeenCalledWith('.active');
  });
});

describe('isNodeListsEqual', () => {
  test('should return true if the node lists are equal', () => {
    const nodeList1 = document.querySelectorAll('div');
    const nodeList2 = document.querySelectorAll('div');
    const result = controller.isNodeListsEqual(nodeList1, nodeList2);
    expect(result).toBe(true);
  });
});

describe('ElementCreator', () => {
  let mockClueContainer: HTMLElement;

  beforeEach(() => {
    mockClueContainer = document.createElement('div');
    mockClueContainer.classList.add('html-clue');
    document.body.appendChild(mockClueContainer);
  });

  afterEach(() => {
    mockClueContainer.remove();
  });

  test('should create a clue with the specified parameters and append it to the clue container', () => {
    const params = {
      tag: 'span',
      classNames: ['cat'],
      textContent: '123',
    };

    const parent = document.createElement('div');
    const elementCreate = new ElementCreator(params, parent, true);
    elementCreate.createClueForItem(params);

    const clueContainer = document.querySelector('.html-clue');
    const clue = clueContainer?.querySelector('.tooltip');

    expect(clueContainer).toBeTruthy();
    expect(clue).toBeTruthy();
    expect(clue?.tagName.toLowerCase()).toBe('div');
    expect(clue?.textContent).toBe('<span> <span/>');
    expect(clue?.classList.contains('tooltip')).toBe(true);
    expect(clue?.classList.contains('cat')).toBe(true);
  });

  test('should create a clue if isNeedClue is true', () => {
    const params: ElementParams = {
      tag: 'span',
      textContent: '',
      classNames: ['small', 'dog'],
    };

    const parent = document.createElement('div');
    new ElementCreator(params, parent, true);
    const element = parent.querySelector('span');
    const clue = document.querySelector('.tooltip');

    expect(element).toBeTruthy();
    expect(clue).toBeTruthy();
    expect(clue?.classList.contains('dog')).toBe(false);
  });

  test('should not create a clue if isNeedClue is false', () => {
    const params: ElementParams = {
      tag: 'div',
      textContent: 'No Clue',
      classNames: ['cat'],
    };

    const parent = document.createElement('div');
    new ElementCreator(params, parent, false);
    const element = parent.querySelector('div');
    const clue = mockClueContainer.querySelector('.tooltip');

    expect(element).toBeTruthy();
    expect(clue).toBeFalsy();
  });
});




describe('LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return the current level on load', () => {

    const mockLocalStorage: IlocalStorage = {
      levels: [
        LevelState.available,
        LevelState.available,
        LevelState.active,
        LevelState.done,
      ],
      currentLevel: 3,
    };
    localStorage.setItem(LocalStorageName.name, JSON.stringify(mockLocalStorage));
    const localStorageObj = new LocalStorage();
    const level = localStorageObj.getLevelOnLoad();
    expect(level).toBe(3);
  });

  test('should create new local storage if it does not exist', () => {
    const localStorageObj = new LocalStorage();
    const level = localStorageObj.getLevelOnLoad();
    expect(level).toBe(0);
  });

  test('should change the local storage for the specified level and status', () => {
    const mockLocalStorage: IlocalStorage = {
      levels: [
        LevelState.available,
        LevelState.available,
        LevelState.active,
        LevelState.done,
      ],
      currentLevel: 3,
    };
    localStorage.setItem(LocalStorageName.name, JSON.stringify(mockLocalStorage));
    const localStorageObj = new LocalStorage();
    localStorageObj.updateLocalStorage(2, LevelState.done);
    const updatedLocalStorage = JSON.parse(localStorage.getItem(LocalStorageName.name) || '');
    expect(updatedLocalStorage.levels[1]).toBe(LevelState.done);
  });

  test('should check if all levels are done', () => {
    const mockLocalStorage: IlocalStorage = {
      levels: [
        LevelState.done,
        LevelState.done,
        LevelState.done,
        LevelState.done,
      ],
      currentLevel: 3,
    };
    localStorage.setItem(LocalStorageName.name, JSON.stringify(mockLocalStorage));
    const localStorageObj = new LocalStorage();
    const isAllLevelsDone = localStorageObj.checkIsAllLevelsDone();
    expect(isAllLevelsDone).toBe(true);
  });

  test('should create new local storage with default values', () => {
    const localStorageObj = new LocalStorage();
    localStorageObj.setNewLocalStorage();
    const createdLocalStorage = JSON.parse(localStorage.getItem(LocalStorageName.name) || '');
    expect(createdLocalStorage.levels.length).toBe(12);
    expect(createdLocalStorage.currentLevel).toBe(0);
  });
});
