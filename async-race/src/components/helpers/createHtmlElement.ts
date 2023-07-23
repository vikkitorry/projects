import { IElement } from '../../types/types'

export function createHtmlElement(elementParams: IElement) {
  const element = document.createElement(elementParams.tag)
  elementParams.classNames.forEach(className => element.classList.add(className))
  if (elementParams.textContent) {
    element.textContent = elementParams.textContent
  }
  if (elementParams.id) {
    element.id = elementParams.id.toString()
  }
  return element
}