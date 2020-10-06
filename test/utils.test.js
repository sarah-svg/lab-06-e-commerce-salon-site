
// IMPORT MODULES under test here:
import { renderHair } from '../utils.js';

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
