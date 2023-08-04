// function indexOfLargestEl(arr) {
//   let index = 0;
//   let value = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (value < arr[i]) {
//       value = arr[i];
//       index = i;
//     }
//   }
//   return index;

// }

function indexOfLargestEl(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[index] < arr[i]) {
      index = i;
    }
  }
  return index;
}

let arr = [20, 8, 40, 10, 40];
// let arr = [20, 20, 20, 20, 20];
console.log(indexOfLargestEl(arr));
