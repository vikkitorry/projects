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
    let target: EventTarget | null = e.target;
    const newsContainer: EventTarget | null = e.currentTarget;
    while (target !== newsContainer && target instanceof HTMLElement && newsContainer instanceof HTMLElement ) {
      if (target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (sourceId) {
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
        }

        return;
      }
        target = target.parentNode;
    }
  }

  public findNews():void {
    const searchInput: HTMLInputElement | null = document.querySelector('.input');
    const sourcesButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.source__item-name');
    const searchButton: HTMLInputElement | null  = document.querySelector('.search-icon');

    if (searchButton instanceof HTMLInputElement) {
      searchButton.addEventListener('click', () => {
        const value = searchInput?.value.trim().toUpperCase();
        if (value) {
          sourcesButtons.forEach((button) => {
            const article: string | null = button.textContent;
            if (article && value === article.slice(0, value.length).toUpperCase()) {
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
}

export default AppController;
