
 //IMPORT MODULES under test here:
import { renderHair, addNewItem } from '../utils.js';

import { renderTableRow } from '../cart/cart-utils.js';
///import { addNewItem } from '../admin/admin.js';
import { items } from '../data.js';
//import { calculateTotal } from '../cart/cart.js';
//import { calculateItem } from '../cart/cart.js';
//import { addNewItem } from '../admin.js';
const test = QUnit.test;
/////////////PASS1
test('should take in a hair care product and return an li with the appropriate contents', (expect) => {
    const item = {
        id: 'Joico',
        title: 'Daily Care',
        author: 'Joico Hair',
        cover: 'joico.png',
        price: 3,
        onSale: true,
    };



   
    // eslint-disable-next-line no-useless-escape
    const expected = '<li class=\"item on-sale\"><p class=\"title\">Daily Care</p><p class=\"author\">Joico Hair</p><img class=\"cover\" src=\"../assets/joico.png\"><p class=\"price\">$3.00</p><button>Add to cart</button><button>remove one</button></li>';
    const actual = renderHair(item);
    expect.equal(actual.outerHTML, expected);

});
///{ 
    //id: 'Joico',
   // quantity: 5,
///},
////////////PASS2
test('should take in a cartItem and return a tr element with the apporiate contents', (expect) => {
    const cartItem = {
        id: 'Joico',
        quantity: '5',
    };
    const expected = '<tr><td>Daily Care</td><td>$3</td><td>5</td><td>$15</td></tr>';
    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);
  
});
////////////    PASS3


test('should take in a cartItem and returns the total price for a single item', (expect) => {
    const cartItemQuantity = 1;
    const cartItemPrice = 3;
        
    const expected = 3;
    const actual = (cartItemQuantity, cartItemPrice);

    expect.equal(actual, expected);
  
});


//////////// PASS
//////////////////////////
test('addNewItem should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newItem = {
        title: 'Deep Clean',
        price: 5 
    };

    const expected = [
        { 
            id: 'Joico',
            title: 'Daily Care',
            author: 'Joico Hair',
            cover: 'joico.png',
            price: 3,
            onSale: true,
        },
        {
            id: 'Matrix',
            title: 'Matrix Biolage Color',
            author: 'Biolage',
            cover: 'matrix.png',
            price: 4,
            onSale: true,
        },
        {
            id: 'Pravana',
            title: 'Perfect Blonde',
            author: 'Pravana Hair Care',
            cover: 'pravana.png',
            price: 2,
            onSale: false,
        },
        {
            id: 'Chi',
            title: 'Silk Infusion Reconstructing Complex',
            author: 'faruq',
            cover: 'chi.png',
            price: 4,
            onSale: true,
        },
        {
            id: 'Tigi',
            title: 'Rehab For Hair',
            author: 'Bead Head Hair',
            cover: 'tigi.png',
            price: 2,
            onSale: false,
        },
        {
            title: 'Deep Clean',
            price: 5,
        },
    ];


    addNewItem(newItem);

    

    expect.deepEqual(items, expected);
});