// function isPowerof2(n) {
//   if (n < 1) return false;
//   if (n === 1) return true;
//   if (n % 2 !== 0) {
//     return false;
//   }
//   for (let i = n; i > 0; i /= 2) {
//     if (i / 2 === 1) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isPowerof2(1));
// console.log(isPowerof2(2));
// console.log(isPowerof2(5));

// Or

// function isPowerof2(n) {
//   if (n < 1) return false;

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerof2(1));
// console.log(isPowerof2(2));
// console.log(isPowerof2(5));

// big - o == O(logn);

//        or

function powerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  if ((n & (n - 1)) === 0) {
    return true;
  }
}

console.log(powerOfTwoBitWise(1));
console.log(powerOfTwoBitWise(2));
console.log(powerOfTwoBitWise(5));
