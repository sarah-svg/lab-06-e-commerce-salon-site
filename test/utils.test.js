
// IMPORT MODULES under test here:
import { renderHair } from '../utils.js';

import { renderTableRow } from '../cart/cart-utils.js';
///import { calculateTotal } from '../cart/data-cart.js';
import { calculateItem } from '../cart/cart-utils.js';
const test = QUnit.test;

test('should take in a hair care product and return an li with the appropriate contents', (expect) => {
    const item = {
        id: 'Joico',
        title: 'Daily Care',
        author: 'Joico Hair',
        cover: 'joico.png',
        price: 3,
        onSale: true,
    };



    const expected = '<li class="item on-sale"><p class="title">Daily Care</p><p class="author">Joico Hair</p><img class="cover" src="../assets/joico.png"><p class="price">$3.00</p><button>Add to cart</button></li>';

    const actual = renderHair(item);
    expect.equal(actual.outerHTML, expected);

});
///{ 
    //id: 'Joico',
   // quantity: 5,
///},

test('should take in a cartItem and return a tr element with the apporiate contents', (expect) => {
    const cartItem = {
        id: 'Joico',
        quantity: '5',
    };
    const expected = '<tr><td>Daily Care</td><td>$3</td><td>5</td><td>$15</td></tr>';
    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);
  
});
test('should take in a cartItem and returns the total price for a single item', (assert) => {
    const cartItemQuantity = 5;
    const cartItemPrice = 3;
        
        
    const expected = '15';
    const actual = calculateItem(cartItemQuantity, cartItemPrice);

    assert.equal(actual, expected);
  
});
