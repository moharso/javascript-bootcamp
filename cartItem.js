// Create a JavaScript class called CartItem that represents an item in a shopping cart.
//Each item should have properties such as the product name, price, and quantity.
//Your class should have the following functionalities:

class CartItem {
  constructor(name, price, quantity) {
    (this.productName = name),
      (this.productPrice = price),
      (this.productQuantity = quantity);
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  // Add Items: Implement a method that allows adding items to the shopping cart. Each item should contain a product name, price, and quantity.

  addItem(products) {
    this.items.push(products);
    return this.items;
  }

  //Remove Items: Implement a method that allows removing items from the shopping cart. 
  //You should be able to specify the item to remove based on its product name.

  removeItem(productName) {
    this.items = this.items.filter((item) => item.productName !== productName);
  }

  //Clear Items from Cart: Implement a method that clears all items from the shopping cart, effectively resetting it to an empty state.

  clearCart() {
    this.items = [];
  }
}

const cart = new Cart();
const cartItem1 = new CartItem("milk", 1, 2);
const cartItem2 = new CartItem("bread", 2, 5);
const cartItem3 = new CartItem("eggs", 3, 8);

//Adding items
cart.addItem(cartItem1);
cart.addItem(cartItem2);

console.log(cart);
cart.removeItem("milk");
