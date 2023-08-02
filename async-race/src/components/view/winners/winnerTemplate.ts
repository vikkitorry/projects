import {getCarImage} from '../../../data/carSVG'
import {ICar} from '../../../types/types'

export function getWinnerTemplate(number: number, wins: number, time: number, carParams: ICar) {
  return `
  <tr classs="car-tr" data-winner="${carParams.id}">
    <td>${number}</td>
    <td>${getCarImage(carParams.color)}</td>
    <td>${carParams.name}</td>
    <td class="winner-wins">${wins}</td>
    <td>${time}</td>
  </tr>`;
}