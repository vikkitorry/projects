import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller : AppController;
  public view : AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  async start() {
    const getSource: HTMLElement | null = document.querySelector('.sources');

    getSource?.addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => {
        return this.view.drawNews(data);
      })
    );

    this.controller.getSources((data) => {
      this.view.drawSources(data);
      this.controller.findNews();
    });
  }
}

export default App;
