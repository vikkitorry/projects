import {getCarImage} from '../../data/carSVG'
import {IWinner} from '../../api/serverTypes'
import {ICar} from '../../../types/types'

export function winnerTemplate(number: number, params: IWinner, carParams: ICar) {
  return `
  <tr>
    <td>${number}</td>
    <td>${getCarImage(carParams.color)}</td>
    <td>${carParams.name}</td>
    <td>${params.wins}</td>
    <td>${params.time}</td>
  </tr>`;
}