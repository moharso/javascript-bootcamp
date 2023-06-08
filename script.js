// First function: If statements
const checkNumber = (number) => {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
};

console.log(checkNumber(0));

// Second function: Function takes at least 3 arguments.
const evenOrOdd = (a, b, c) => {
    const averageSum = (a + b + c) / 3 
    if (averageSum % 2 == 0) {
        return "Even number"
  } else {
      return "Odd number"
  }
}

  console.log(evenOrOdd(3, 3, 3))

//Third function: Use Object key & value pairs in it.
const shoppingList = (item1, item2) => {
  const list = {
    item1: item1,
    item2: item2,
  };
  return `Need to buy ${list.item1} and ${list.item2}`;
};

console.log(shoppingList("milk", "bread"));
