import News from './news/news';
import Sources from './sources/sources';
import { ArticleData, Source, Article } from '../../types/index';

export class AppView {
  public news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: ArticleData): void {
    const values: Array<Article> = data?.articles ? data?.articles: [];
    this.news.draw(values);
  }

  drawSources(data?: ArticleData): void {
    const values: Array<Source> = data?.sources ? data?.sources: [];
    this.sources.draw(values);
  }
}

export default AppView;
