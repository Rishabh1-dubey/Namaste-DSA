const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 2];

const removeDuplicate = function (arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  return x + 1;
};
const k =removeDuplicate(arr);
console.log(arr.slice(0,k))
