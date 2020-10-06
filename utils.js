

export function renderHair(item) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

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

    li.appendChild(button);

    return li;
}