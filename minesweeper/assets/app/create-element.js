function createElm(element, classNames, parent) {
  const item = document.createElement(element);
  for (let i = 0; i < classNames.length; i++) {
    item.classList.add(classNames[i]);
  }
  parent.prepend(item);
  return item;
}

export {createElm};