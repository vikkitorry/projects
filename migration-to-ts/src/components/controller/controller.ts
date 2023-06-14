import AppLoader from './appLoader';
import { Endpoints, GetApiDataHandler } from '../../types/index';

class AppController extends AppLoader {
  public getSources(callback: GetApiDataHandler): void {
    super.getResp(
      {
        endpoint: Endpoints.Sources,
        options: {}
      },
      callback
    );
  }

  public getNews(e: MouseEvent, callback: GetApiDataHandler ): void {
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

  public findNews():void {
    const searchInput = document.querySelector('.input') as HTMLInputElement;
    const sourcesButtons = document.querySelectorAll('.source__item-name') as NodeListOf<HTMLElement>;
    const searchButton = document.querySelector('.search-icon') as HTMLInputElement;

    searchButton.addEventListener('click', () => {
      const value = searchInput?.value.trim().toUpperCase();
      if (value) {
        sourcesButtons.forEach((button) => {
          const article = button.textContent as string;
          if (value === article.slice(0, value.length).toUpperCase()) {
            button.classList.add('active');
            setTimeout(() => {
              button.classList.remove('active');
            }, 4000)
            button.scrollIntoView({
              block: 'end',
              behavior: 'smooth',
              inline: 'center'
            });
          }
        })

      }
    });
  }
}

export default AppController;
