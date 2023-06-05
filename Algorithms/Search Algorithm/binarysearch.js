// // function binarySearch(arr, target) {
// //   if (arr.indexOf(target) === arr.length / 2) {
// //     return indexOf(t);
// //   }

// //   if (arr.indexOf(target) < arr.length / 2) {
// //     for (let i = 0; i < arr.length / 2; i++) {
// //       if (arr[i] === target) {
// //         return i;
// //       }
// //     }
// //   }

// //   if (arr.indexOf(target) > arr.length / 2) {
// //     for (let i = arr.length - 1; i > arr.length / 2; i--) {
// //       if (arr[i] === target) {
// //         return i;
// //       }
// //     }
// //   }
// //   return -1;
// // }

// // console.log(binarySearch([-5, 2, 10, 4, 6], 10));
// // console.log(binarySearch([-5, 2, 10, 4, 6], 6));
// // console.log(binarySearch([-5, 2, 10, 4, 6], 20));

// // Above solution is not correct a proper binary search prob.

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightindex = arr.length - 1;

//   while (leftIndex <= rightindex) {
//     let middleIndex = Math.floor((leftIndex + rightindex) / 2);

//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }

//     if (target < arr[middleIndex]) {
//       rightindex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// bigO = O(logn)
