productList.addEventListener("click", (e) => {
  const closestBtn = e.target.closest(".product-item");

  if (!closestBtn) return;

  const productName = closestBtn.querySelector(".product-name").innerText;
  const productPrice = closestBtn.querySelector(".product-price").innerText;
  const ifExists = itemExists(productName);

  if (ifExists) {
    ifExists.quantity++;
  } else {
    cartItems.push({
      name: productName,
      price: parseFloat(productPrice.substring(1)),
      quantity: 1,
      get totalPrice () {
        return this.quantity * this.price;
      },
    });
  }

  showItems();
  totalAmount();
});

emptyBtn.addEventListener("click", () => {
  cartList.innerHTML = "";
  cartItems.length = 0;
  totalAmount();
});

cartList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");

  if (e.target === removeBtn) {
    const itemName = removeBtn.previousSibling.previousSibling.innerText.split(' ')[0];

    const ifExists = itemExists(itemName);

    if (ifExists) {
      cartItems.splice(cartItems.indexOf(ifExists), 1);
    }

    showItems();
    totalAmount();
  }
});
