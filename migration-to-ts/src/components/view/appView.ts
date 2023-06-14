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

  public drawNews(data?: ArticleData): void {
    const values: Array<Article> = data?.articles || [];
    this.news.draw(values);
  }

  public drawSources(data?: ArticleData): void {
    const values: Array<Source> = data?.sources || [];
    this.sources.draw(values);
  }

}

export default AppView;
