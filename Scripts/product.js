
let mensData = [
    {'src': 'https://cdn.modesens.com/product/54871684_3?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "199",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/45811821?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "109",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/51650876?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "99",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/56317184?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "299",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/55334553?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "399",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/53783588?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "499",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/51143708?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "159",
    'desc': 'Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black',
    'btn': 'Add to Cart'},
    {'src': 'https://cdn.modesens.com/availability/54282256?w=400&',
    'itemName': 'PALM ANGELS',
    'price': "299"
    },
]

let cartArr = JSON.parse(localStorage.getItem('cart_items')) || [];

mensData.forEach(function(elem){
    let card = document.createElement('div'); // Creating the card div
    let itemImg = document.createElement('img'); // Creating the image tag
    itemImg.setAttribute('src', elem.src)
    let itemName = document.createElement('h3') // Creating the h3 tag
    itemName.innerText=elem.itemName;
    let itemDesc = document.createElement('h6') // Creating the h3 tag
    itemDesc.innerText=elem.desc;
    let price = document.createElement('p'); // Creating the p tag
    price.innerText=elem.price;
    let btn = document.createElement('button')
    
    btn.innerText='Add to Cart' // Creating the button

    card.append(itemImg, itemName, itemDesc, price, btn); // Appending the tags in card
    document.querySelector('#cards').append(card);

    btn.addEventListener('click', function() {
        addToCart(elem);
    })
    btn.addEventListener('click', function() {
        btn.style.backgroundColor = '#1c1c1c';
        btn.style.color = 'white'
        btn.innerText = 'ADDED TO CART'

    })
});

function addToCart(elem) {
    cartArr.push(elem);
    localStorage.setItem('cart_items', JSON.stringify(cartArr))
};
