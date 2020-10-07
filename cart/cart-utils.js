import { items as sourceOfTruth } from '../data.js';
import { findById } from '../utils.js';

/*
    const cartItem = {
        id: 'airplanes',
        quantity: 2
    };
*/

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    // we need the name and the price of the book
    // the name and price of the book live in the sourceOfTruth
 
    const itemData = findById(
        // findById takes an array
        sourceOfTruth, 
        // and an id to match against
        cartItem.id
    );

  
    const price = itemData.price;
    const title = itemData.title;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = title;

    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}

