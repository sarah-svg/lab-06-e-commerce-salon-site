

//////////THIS ONE
import { items as hardCodedHair } from '../data.js';

export function calculateItem(quantity, price) {
    let linetotal = quantity * price;
    return linetotal;
} 
////////////////////
export const CART = 'CART';
export const PRODUCTS = 'PRODUCTS';

//////////////////////////////////////
export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our someId?
        if (item.id === someId) {
            return item;
        }
    }
}
//////////////
export function getLocalStorageItems() {
    let localStorageItems = JSON.parse(localStorage.getItem(PRODUCTS));

  
    if (!localStorageItems) {
        
        const stringyItems = JSON.stringify(hardCodedHair);

        localStorage.setItem(PRODUCTS, stringyItems);
        localStorageItems = hardCodedHair;
    }

    return localStorageItems;
}
/////////////
export function renderHair(item) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const removeButton = document.createElement('button');
/////////////////////////////
    li.classList.add('item');

    if (item.onSale) {
        li.classList.add('on-sale');
    }

    title.classList.add('title');
    title.textContent = item.title;

    li.appendChild(title);

    author.classList.add('author');
    author.textContent = item.author;

    li.appendChild(author);
    cover.classList.add('cover');

    cover.src = `../assets/${item.cover}`;

    li.appendChild(cover);

    price.classList.add('price');
    price.textContent = `$${item.price.toFixed(2)}`;

    li.appendChild(price);

    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
   
        const cart = getFromLocalStorage(CART) || [];

   
        const itemInCart = findById(cart, item.id);

   
        if (itemInCart === undefined) {
      
       
            const newCartItem = {
                id: item.id,
                quantity: 1, 
            };

            cart.push(newCartItem);
        } else {
       
            itemInCart.quantity++;
        }

        setInLocalStorage(CART, cart);
    });

    removeButton.textContent = 'remove one';

    removeButton.addEventListener('click', () => {
  
        const cart = getFromLocalStorage(CART) || [];

    
        const itemInCart = findById(cart, item.id);

        if (itemInCart) {
      
            if (itemInCart.quantity !== 0) {
                itemInCart.quantity--;
            }
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);
    li.appendChild(removeButton);

    return li;
}
/////////////////////////////////////////////
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}


export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}