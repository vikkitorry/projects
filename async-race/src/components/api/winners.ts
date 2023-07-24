import { URL, IWinner, Method, WinnersPages, IGetWinners } from './serverTypes'

export class WinnersApi {

  async getWinner(id: number): Promise<IWinner> {
    const response = await fetch(`${URL.winners}/${id}`)
    return response.json()
  }

  async deleteWinner(id: number): Promise<void> {
    const statusWinner = (await fetch(`${URL.winners}/${id}`)).status;
    if (statusWinner !== 404) {
      await fetch(`${URL.winners}/${id}`, {
        method: Method.delete,
      });
    }
  }

  async setWinner(winner: IWinner): Promise<void> {
    await fetch(URL.winners, {
      method: Method.post,
      body: JSON.stringify(winner),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateWinner(winner: IWinner): Promise<void> {
    await fetch(`${URL.winners}/${winner.id}`, {
      method: Method.put,
      body: JSON.stringify(winner),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getWinners({ page, limit = WinnersPages.limit, sort, order }: IGetWinners): Promise<IWinner> {
    return (await fetch(`${URL.winners}?_page=${page}&_limit=${limit}${this.getSortOrder(sort, order)}`)).json();
  }

  getSortOrder = (sort: string, order: string) => {
    if (sort && order) {
        return `&_sort=${sort}&_order=${order}`
    }
    return ''
  }
}
