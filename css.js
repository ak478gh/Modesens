
    let cartItemFromLS = JSON.parse(localStorage.getItem('cart_items')) ||[];
    // console.log(cartItemFromLS)

    // Calculating the prince of total items.
    // let totalPrice = cartItemFromLS.reduce(function(acc,el) {
    //     return acc + +el.price;
    // },0);
    // document.querySelector('h2>span').innerText = totalPrice;

    // Calculating the number of total items.
    // document.querySelector('h1>span').innerText = cartItemFromLS.length;

    // Creating the card div
    cartItemFromLS.forEach(function(elem){
        let card = document.createElement('div');
        
        let itemImg = document.createElement('img'); // Creating the image tag
        itemImg.setAttribute('src', elem.src)

        let itemName = document.createElement('h3'); // Creating the h3 tag
        itemName.innerText=elem.itemName;

        let itemDesc = document.createElement('h6') // Creating the h3 tag
        itemDesc.innerText=elem.desc;

        let price = document.createElement('p'); // Creating the p tag
        price.innerText = elem.price;

        let remove = document.createElement('button');
        remove.innerText = 'REMOVE'
        document.querySelector('#cards').append(card); // Appending the card in container
        card.append(itemImg, itemName, itemDesc, price, remove); // Appending the tags in card

        remove.addEventListener('click', function(elem) {
            console.log(elem.target.parentNode.remove());
        })
    });

    // function removeItem(elem) {
    //     console.log(elem.)
    // }
