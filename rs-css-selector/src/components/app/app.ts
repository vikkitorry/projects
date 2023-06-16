import {AppController}  from '../controller/controller'
import {AppView}  from '../view/appView'


class App {
  private controller : AppController;
  public view : AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  async start() {
    const getLevel: HTMLElement | null = document.querySelector('.levels');

    getLevel?.addEventListener('click', (e) =>
     this.view.drawGame(e)
    );
/*
    this.controller.getSources((data) => {
      this.view.drawSources(data);
      this.controller.findNews();
    });*/
  }
}


export default App;