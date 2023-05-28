//  Algo to find sum of first n natural numbers

// function sum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

//      or

const sum = (n) => (n * (n + 1)) / 2;
console.log(sum(4));
