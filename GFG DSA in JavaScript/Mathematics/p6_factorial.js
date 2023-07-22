// Factorial of a Number

//-----------------------------------iterative soln----------------------

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

//-----------------------------------recursive soln----------------------

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

let x = factorial(5);
console.log(x);
