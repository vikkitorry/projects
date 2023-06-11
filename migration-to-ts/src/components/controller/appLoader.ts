import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '928a11df0183461780a8711ffc0086d8', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
