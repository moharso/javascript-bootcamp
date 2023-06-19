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

  // Calculate Total Price: Create a method to calculate the total price of all the items in the shopping cart.
  // The total price should be calculated by multiplying the price of each item by its quantity and summing up the results.

  totalPrice() {
    const totalPrice = this.items.reduce((sum, currentItem) => {
      return currentItem.productPrice * currentItem.productQuantity + sum;
    }, 0);
    return totalPrice;
  }

  //Remove Items: Implement a method that allows removing items from the shopping cart.
  //You should be able to specify the item to remove based on its product name.

  removeItem(productName) {
    this.items = this.items.filter((item) => item.productName !== productName);
  }

  // Update Items: Create a method to update the quantity of an item in the shopping cart.
  // This method should take the product name and the new quantity as parameters.

  updateItems(productName, newProductQuantity) {
    const item = this.items.find((item) => item.productName === productName);
    if (item) {
      item.productQuantity = newProductQuantity;
    }
  }

  //Clear Items from Cart: Implement a method that clears all items from the shopping cart, effectively resetting it to an empty state.

  clearCart() {
    this.items = [];
  }

  // Bonus Task: Implement a method named applyCoupon that applies a discount to the total price of the shopping cart based on the provided coupon code.
  // The following coupon codes should be supported: 'SAVE10', 'SAVE20', and 'SAVE50'.
  // Each coupon should provide a respective discount ratio of 10%, 20%, and 50%.

  applyCoupon(couponCode) {
    let discountRatio = 0;
    if (couponCode === "SAVE10") {
      discountRatio = 0.1;
    } else if (couponCode === "SAVE20") {
      discountRatio = 0.2;
    } else if (couponCode === "SAVE50") {
      discountRatio = 0.5;
    }

    const totalPrice = this.totalPrice();
    const discountedPrice = totalPrice - totalPrice * discountRatio;
    return discountedPrice;
  }
}

const cart = new Cart();
const cartItem1 = new CartItem("milk", 1, 2);
const cartItem2 = new CartItem("bread", 2, 5);
const cartItem3 = new CartItem("eggs", 3, 8);

//Adding items
cart.addItem(cartItem1);
cart.addItem(cartItem2);
cart.addItem(cartItem3);
//Removing item
cart.removeItem("milk");
//Calculating total price
console.log(cart.totalPrice()); //Output: 36
//Updating item
cart.updateItems("bread", 10);
//Applying coupon
console.log(cart.applyCoupon('SAVE50')); //Output: 22
//Clearing cart
cart.clearCart()
