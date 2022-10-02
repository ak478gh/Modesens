
    let cartItemFromLS = JSON.parse(localStorage.getItem('cart_items')) ||[];
    // console.log(cartItemFromLS)

    // Calculating the price of total items.
    let totalPrice = cartItemFromLS.reduce(function(acc,el) {
        return acc + +el.price;
    },0);
    // Calculating the total price.
    document.querySelector('#kharch').innerText = '$ '+totalPrice;

    // Calculating the number of total items.
    document.querySelector('#counter').innerText = cartItemFromLS.length;

    // Creating the card div
    cartItemFromLS.forEach(function(elem, i){
        let card = document.createElement('div');
        
        let itemImg = document.createElement('img'); // Creating the image tag
        itemImg.setAttribute('src', elem.src)

        let itemName = document.createElement('h3'); // Creating the h3 tag
        itemName.innerText=elem.itemName;

        let itemDesc = document.createElement('h6') // Creating the h3 tag
        itemDesc.innerText=elem.desc;

        let price = document.createElement('p'); // Creating the p tag
        price.innerText = elem.price;

        let desc = document.createElement('div')
        desc.setAttribute('id', 'itemDesc')

        let itemPrice = document.createElement('div')
        itemPrice.setAttribute('id', 'itemPrice')

        let remove = document.createElement('button');
        remove.innerText = 'REMOVE'
        
        desc.append(itemName, itemDesc)
        itemPrice.append(price, remove)
        card.append(itemImg, desc, itemPrice); // Appending the tags in card

        document.querySelector('#cards').append(card); // Appending the card in container;

        remove.addEventListener('click', function(elem) {
            console.log(elem.target.parentNode.parentNode.remove());
            deleteItem(i);
        })
    });

    function deleteItem(i) {
        cartItemFromLS.splice(i, 1);
        // console.log(cartItemFromLS)
        localStorage.setItem('cart_items', JSON.stringify(cartItemFromLS)) // Updating the items in LS
        window.location.reload(); // Reloading the Page
    };
    