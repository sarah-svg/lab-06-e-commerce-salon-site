

export function renderHair(care) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('hair');

    if (care.onSale) {
        li.classList.add('on-sale');
    }

    title.classList.add('title');
    title.textContent = care.title;

    li.appendChild(title);

    author.classList.add('author');
    author.textContent = care.author;

    li.appendChild(author);
    cover.classList.add('cover');

    cover.src = `../assets/${care.cover}`;

    li.appendChild(cover);

    price.classList.add('price');
    price.textContent = `$${care.price.toFixed(2)}`;

    li.appendChild(price);

    button.textContent = 'Add to cart';

    li.appendChild(button);

    return li;
}