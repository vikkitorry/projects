import './sources.css';
import { Source } from '../../../types/index';

class Sources {
  public draw(data: Array<Source>): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name  || '';
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id  || '');

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;
