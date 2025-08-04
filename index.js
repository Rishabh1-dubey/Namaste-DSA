//create a function that find element inside the array if it is not able to find the array then retur the -1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let userInput = Number(prompt("Enter a number to search:"));
// function searchArray(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return console.log(`the index  number is ${i} and the number is ${arr[i]}`);
//     }
//   }
//   return -1;
// }

// const result = searchArray(arr, userInput);
// console.log(result);

// ----------------------------------------------------------

// write a function that count number of neg

// const arr = [1, 2, 3, 4, -5, -6, -7, -8];

// let userInput = Number(prompt("Enter your Number here"))

// function countNeg(arr) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       counter++;
//     }
//   }
//   return counter;
// }

// let result = countNeg(arr);
// console.log(result);

// --------------------------------------------------------------

//find the largest number inside in your array

// let arr = [12, 34, 13, 56, 7, 8, 45];

// let largest = -Infinity;

// function largestNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//  return  largest;
// }

// let result = largestNumber(arr);
// console.log(result)

// find the smallest number in your array

// let arr = [10, 2, 3, 4, 5, 6, 67, 889];

// let smallest = arr[0];

// function smallestNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (smallest > arr[i]) {
//       smallest = arr[i];
//     }
//   }
//   return smallest
// }

// let result = smallestNumber(arr)
// console.log(result)

// ---------------------------------------------------------
//find the second largest Number in the array'

let arr = [12, 13, 14, 23, 34, 54]; //34

let firstLargest = -Infinity;
let secondLargest = -Infinity;

function secondLargestArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
return firstLargest ,secondLargest;
}

let result = secondLargestArray(arr)
console.log('the second largest number is ',result)
console.log('the fist largest number is ',firstLargest)
