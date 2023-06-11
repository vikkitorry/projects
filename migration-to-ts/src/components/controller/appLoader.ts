import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'aff0c18826094d6398035e9f7cc5f1d2', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
