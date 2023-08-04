// Naive approach

// function gcd(a, b) {
//   let diviser = Math.min(a, b);
//   while (diviser > 0) {
//     if (a % diviser === 0 && b % diviser === 0) {
//       return diviser;
//     }
//     diviser--;
//   }
//   return diviser;
// }

// console.log(gcd(90, 120));

// By using Euclidian algorithm

function gcd(a, b) {
  let diviser = Math.min(a, b);
  let rem = Math.max(a, b) % diviser;

  if (rem === 0) {
    return diviser;
  } else {
    let i = rem;
    while (i > 0) {
      if (diviser % rem === 0 && rem % i === 0) {
        return rem;
      }
      i--;
    }
    return 1;
  }
}

console.log(gcd(129, 120));
