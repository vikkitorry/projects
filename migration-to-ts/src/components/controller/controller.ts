import AppLoader from './appLoader';
import { Endpoints, Callback } from '../../types/index';

class AppController extends AppLoader {
  public getSources(callback: Callback): void {
    super.getResp(
      {
        endpoint: Endpoints.Sources,
      },
      callback
    );
  }

  public getNews(e: MouseEvent, callback: Callback ): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;

        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoints.Everything,
              options: {
                sources: sourceId,
                },
            },
            callback
          );
        }

        return;
      }
        target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
