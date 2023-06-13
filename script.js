// Create custom functions that will consist only standard .for loop or .forEach (up to you)
// and make following array methods with exact same functionalities  from scratch
// 1. .map
const mapArr = [1, 2, 3, 4, 5];
const mapFunc = (arr) => {
  const mapArrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    mapArrCopy.push(arr[i] * 3);
  }
  return mapArrCopy;
}

console.log(mapFunc(mapArr)); // Output: [ 3, 6, 9, 12, 15 ]

// 2. .filter
const filterArr = [5, 96, 0, -9, 23, 16, 8];
const filterFunc = (arr) => {
    const filterArrCopy = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            filterArrCopy.push(arr[i]);
        }
    }
    return filterArrCopy 
}

console.log(filterFunc(filterArr)) // Output: [ 96, 23, 16 ]

// 3. .every
const everyArr = [68, 33, 46, 99, -3]

const everyFunc = (arr) => {
    let result = false
    arr.forEach(function(arr1) {
        if (arr1 > 45) {
            result = true
        }
    })
    return result
}

console.log(everyFunc(everyArr)) // Output: true

// 4. .some

const someArr = ["Vilnius", "Kaunas", "Palanga", "Ignalina"]

const someFunc = (arr) => {
    let result = false
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "Ignalina") {
            result = true
        }
    }
    return result
}

console.log(someFunc(someArr)) // Output: true

// Write a sorting algorithm of your choice with using only for loop or forEach.
const myArr = [-6, 50, 4, 86, 8, 1, -2, 33];

const sortArr = (arr) => {
  arr.forEach((arr1, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] < arr[index]) {
        // Swap elements
        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
    }
  });

  return arr;
}

console.log(sortArr(myArr)); // Output: [ -6, -2,  1,  4, 8, 33, 50, 86]
