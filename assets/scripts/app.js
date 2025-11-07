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
        })</span><span class="item-price">$${(
        item.price * item.quantity
        ).toFixed(2)}</span><button class="remove-btn">Remove</button>`;
        cartList.appendChild(newItem);
    });
}

function itemExists(name) {
  for (const item of cartItems) {
    if(item.name === name){
        return item;
    }
  }
  return false;
}

function totalAmount() {
    let totalAmount = 0;

    for(const item of cartItems) {
        totalAmount += item.price * item.quantity;
    }

    totalDisplay.innerText = totalAmount.toFixed(2);
}
