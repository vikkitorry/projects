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

  public findNews():void {
    const input = document.querySelector('.input') as HTMLInputElement;
    const btns = document.querySelectorAll('.source__item-name') as NodeListOf<HTMLElement>;
    const search = document.querySelector('.search-icon') as HTMLInputElement;

    search.addEventListener('click', () => {
      const value = input?.value.toUpperCase();
      if (value) {
        for (let i = 0; i < btns.length; i++) {
          const article = btns[i].textContent as string;
          if (value === article.slice(0, value.length).toUpperCase()) {
            btns[i].classList.add('active');
            setTimeout(() => {
              btns[i].classList.remove('active');
            }, 4000)
            btns[i].scrollIntoView({
              block: 'end',
              behavior: 'smooth',
              inline: 'center'
            });
            break;
          }
        }
      }
    });
  }
}

export default AppController;
