///import { items } from '../';
//import { renderHair } from '../utils.js';
import { getLocalStorageItems, renderHair } from '../utils.js';

const localStorageItems = getLocalStorageItems();
//alert('localStorageItems: ' + localStorageItems);

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageItems.length; i++) {
    const item = localStorageItems[i];
   //alert('item:' + item);
    const li = renderHair(item);

    ul.appendChild(li);    
}