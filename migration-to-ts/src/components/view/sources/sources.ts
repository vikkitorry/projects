import './sources.css';
import { Source } from '../../../types/index';

class Sources {
  public draw(data: Array<Source>): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      if ( sourceItemTemp instanceof HTMLTemplateElement ) {
        const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
        if (sourceClone instanceof DocumentFragment) {

          const sourceItemName = sourceClone.querySelector('.source__item-name');
          const sourceItem = sourceClone.querySelector('.source__item');

          if (sourceItemName && sourceItem) {
            sourceItemName.textContent = item.name  || '';
            sourceItem.setAttribute('data-source-id', item.id  || '');
          }

          fragment.append(sourceClone);
        }

      }
    });

    const sources: HTMLElement | null = document.querySelector('.sources');
    sources?.append(fragment);
  }
}

export default Sources;
