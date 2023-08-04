// function reverse(arr) {
//   if (arr.length === 1) {
//     return arr;
//   } else {
//     let revArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       revArr.push(arr[i]);
//     }
//     return revArr;
//   }
// }
// console.log(reverse([1, 2, 3, 4, 5]));
// console.log(reverse([5]));

// using two pointer method

function reverse(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j--;
    }
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([5]));
