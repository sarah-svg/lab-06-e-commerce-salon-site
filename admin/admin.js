const form = document.querySelector('form');
import { getLocalStorageItems, PRODUCTS } from '../utils.js';
///////////////
/////////////////


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const title = data.get('title');
    const author = data.get('author');
    const cover = data.get('cover');
    const price = data.get('price');


    const newItem = {
        id: id,
        title: title,
        author: author,
        cover: cover,
        price: Number(price),
    };
    const localStorageItems = getLocalStorageItems();
    localStorageItems.push(newItem);

    const stringyLocalItems = JSON.stringify(localStorageItems);
    localStorage.setItem(PRODUCTS, stringyLocalItems);

});