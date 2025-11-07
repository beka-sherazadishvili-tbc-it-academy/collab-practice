const productList = document.querySelector("#product-list");
const cartList = document.querySelector("#cart-list");
const totalDisplay = document.querySelector("#total-price");
const emptyBtn = document.querySelector("#empty-cart-btn");

const cartItems = [];

function showItems() {
    cartList.innerHTML = '';

    cartItems.forEach((item) => {
        const newItem = document.createElement("li");

        newItem.innerHTML = `<span class="item-name">${item.name} (x${
        item.quantity
        })</span><span class="item-price">$${(item.totalPrice)
            .toFixed(2)}</span><button class="remove-btn">Remove</button>`;
        cartList.appendChild(newItem);
    });
}

function itemExists(name) {
    return cartItems.find(item => item.name === name);
}

function totalAmount() {
    totalDisplay.innerText = cartItems.reduce((acc, curr) => 
        acc + curr.totalPrice, 0).toFixed(2);
}
