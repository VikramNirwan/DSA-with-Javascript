// given --> arr of n elements
// find index of target element t in  arr
// return -1 if not present

function linear(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linear([-5, 2, 10, 4, 6], 10));
console.log(linear([-5, 2, 10, 4, 6], 6));
console.log(linear([-5, 2, 10, 4, 6], 20));
