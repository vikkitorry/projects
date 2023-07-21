import { getCarImage } from '../../../data/carSVG'
import { getFlagImage } from '../../../data/flagSVG'

export function carTemplate(name: string, color: string): string {
  return`<div class="item-container">
  <div class="item-buttons-container">
    <button class="select btn">Select</button>
    <button class="remove btn">Remove</button>
  </div>
  <div class="item-move-buttons-container">
    <button class="item-start">A</button>
    <button class="item-stop">B</button>
    <div class="item-name">${name}</div>
  </div>
  <div class="race-container"></div>
    ${getCarImage(color)}
    ${getFlagImage()}
</div>`
}
