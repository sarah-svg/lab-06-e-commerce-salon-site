///import { items } from '../data.js';
//import { renderHair } from '../utils.js';
import { getLocalStorageItems, renderHair } from '../utils.js';

const localStorageItems = getLocalStorageItems();
const ul = document.querySelector('#list');

for (let i = 0; i < localStorageItems.length; i++) {
    const item = localStorageItems[i];
    const li = renderHair(item);

    ul.appendChild(li);    
}