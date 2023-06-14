import './news.css';
import { Article } from '../../../types/index';

class News {
  public draw(data: Array<Article>): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10): data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {

      if (newsItemTemp instanceof HTMLTemplateElement) {
        const newsClone: Node = newsItemTemp.content.cloneNode(true);
        if (newsClone instanceof DocumentFragment) {
          if (idx % 2) {
            const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
            newsItem ? newsItem.classList.add('alt') : 0;
          }

          const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__item');
          const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
          const descriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
          const descriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
          const descriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
          const readMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
          const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');

          if (metaPhoto) {
            metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`
          }
          if (metaAuthor) {
            metaAuthor.textContent = item.author || item.source?.name || '';
          }
          if (descriptionTitle) {
            descriptionTitle.textContent = item.title || '';
          }
          if (descriptionSource) {
            descriptionSource.textContent = item.source?.name || '';
          }
          if (descriptionContent) {
            descriptionContent.textContent = item.description || '';
          }
          if (readMore) {
            readMore.setAttribute('href', item.url || '');
          }
          if (metaDate) {
            metaDate.textContent = item.publishedAt || ''
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-');
          }
      }
        fragment.append(newsClone);
      }
    });

    const newsParenNode: HTMLElement | null = document.querySelector('.news');
    if (newsParenNode) {
      newsParenNode.innerHTML = '';
      newsParenNode.appendChild(fragment);
    }
  }
}

export default News;
