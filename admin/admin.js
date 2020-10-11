/* eslint-disable no-unused-vars */
const form = document.querySelector('form');
//import { items } from '../data.js';
import { getLocalStorageItems, PRODUCTS, addNewItem } from '../utils.js';

///////////////
/////////////////moved to utils

/*export function addNewItem(newItem) {
    ///items.push(newItem);
    const localStorageItems = getLocalStorageItems();
   
    localStorageItems.push(newItem);
  
    const stringyLocalItems = JSON.stringify(localStorageItems);
   //alert('stringyLocalItems' + stringyLocalItems);
    localStorage.setItem(PRODUCTS, stringyLocalItems);
      
}*/

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

    addNewItem(newItem);
    
});

/*export function addNewItem(newItem) {
  ///items.push(newItem);
    const localStorageItems = getLocalStorageItems();
 
    localStorageItems.push(newItem);

    const stringyLocalItems = JSON.stringify(localStorageItems);
 //alert('stringyLocalItems' + stringyLocalItems);
    localStorage.setItem(PRODUCTS, stringyLocalItems);
    //return stringyLocalItems;
}*/