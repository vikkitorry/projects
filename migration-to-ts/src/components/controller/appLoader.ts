import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: 'a2861caca1044db68bed2ba934f25a28', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
