import type { Options, Endpoints, ArticleData} from '../../types/index';

type CallbackData = (data: ArticleData) => void;

class Loader {
  public baseLink : string;
  private options : Options;

    constructor(baseLink : string, options : Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} } : { endpoint: Endpoints; options?: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) : void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler (res : Response) : Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options : Options, endpoint : Endpoints) : string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method : string, endpoint : Endpoints, callback : CallbackData, options : Options = {}) : void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
