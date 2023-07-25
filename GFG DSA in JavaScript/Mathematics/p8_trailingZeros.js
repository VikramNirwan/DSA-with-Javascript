function trailingZeroes(n) {
  let count = 0;
  for (let i = n; i >= 5; i = Math.floor(i / 5)) {
    count = count + Math.floor(i / 5);
  }
  return count;
}

console.log(trailingZeroes(125));
