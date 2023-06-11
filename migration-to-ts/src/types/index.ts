export enum Endpoints {
  Everything = 'everything',
  Sources = 'sources',
}

export interface Options {
  apiKey: string;
  sources: string;
}

export interface Article {
  source: {
    id: string;
    name: string
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  category: string;
  language: string;
  country: string;
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface ArticleData {
  status: string;
  totalResults: number;
  articles: Article[];
  sources: Source[];
}

export type CallbackData = (data: ArticleData) => void;
export type Callback = (data?: ArticleData) => void;
