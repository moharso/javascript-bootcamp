// Write a sorting algorithm of your choice with using only for loop or forEach. 
const myArr = [-6, 50, 4, 86, 8, 1, -2, 33]

function sortArr(arr) {
    arr.forEach((elem, index) => {
      for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] < arr[index]) {
          // Swap elements if they are in the wrong order
          [arr[index], arr[i]] = [arr[i], arr[index]];
        }
      }
    });
  
    return arr;
  }

  console.log(sortArr(myArr)) //Output: [ -6, -2,  1,  4, 8, 33, 50, 86]