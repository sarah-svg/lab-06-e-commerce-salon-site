
import { items } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById, getFromLocalStorage, CART } from '../utils.js';


const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');

const cart = getFromLocalStorage(CART) || [];  
for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    if (item.quantity >= 0) {
        const tr = renderTableRow(item);
        table.appendChild(tr);    
    }
}
const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

//////////////////
export function calculateTotal(cartArray) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const trueItem = findById(items, item.id);
        let subtotal = calculateItem(item.quantity, trueItem.price);
        subtotal = Math.round(subtotal * 100) / 100;
        accumulator = accumulator + subtotal;
    }

    return accumulator;
}

////////////////////

export function calculateItem(quantity, price) {
    let linetotal = quantity * price;
    return linetotal;
} 

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
    localStorage.clear();
    window.location.href = '/';
});
//////////
