import { items } from '../data.js';
import { renderHair } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < items.length; i++) {
    const hair = items[i];

    const li = renderHair(hair);

    ul.appendChild(li);    
}