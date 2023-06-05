function recursiveFactorial(n) {
  if (n < 2 && n >= 0) {
    // if only condition n === 0 is present this will also work, its a base case
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));

//O(n) --> Linear
