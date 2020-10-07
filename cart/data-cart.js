import { items, cart } from '../data.js';
import { findById } from '../utils.js';

const total = calculateTotal(cart);

//const totalCell = document.querySelector('.total');
document.getElementById('total').innerHTML = total;
//totalCell.textContent = `Total: $${total}`;

function calculateTotal(cartArray) {
 // initialize an accumulator to 0
    let accumulator = 0;

    //for every item in the cart
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
     //go get the item's true data
        const trueItem = findById(items, item.id);

     //use the true data's price with the cart's quantity to get the subtotal for this item
        //const subtotal = trueItem.price * item.quantity;
        let subtotal = calculateItem(item.quantity, trueItem.price);
        subtotal = Math.round(subtotal * 100) / 100;
        // add that subtotal to the accumulator
        accumulator = accumulator + subtotal;
    }

    return accumulator;
}





export function calculateItem(quantity, price) {
   // initialize an accumulator to 0
    let linetotal = quantity * price;
    return linetotal;
} 
