import { Options, Endpoints, GetApiDataHandler, Method, StatusCode} from '../../types/index';

class Loader {
  public baseLink: string;
  private options: Pick<Options, 'apiKey'>;

  constructor(baseLink: string, options: Pick<Options, 'apiKey'>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: { endpoint: Endpoints; options: Options },
    callback: GetApiDataHandler = () => {
    console.error('No callback for GET response');
    }
    ): void {
      this.load(Method.GET, endpoint, callback, options);
    }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === StatusCode.Unauthorized || res.status === StatusCode.NotFound) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
      }
    }
      return res;
    }

  private makeUrl(options: Options, endpoint: Endpoints): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.entries(urlOptions).forEach(([key, value]): void => {
      url += `${key}=${value ?? ''}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: Endpoints, callback: GetApiDataHandler, options: Options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err)
    );
  }
}

export default Loader;
