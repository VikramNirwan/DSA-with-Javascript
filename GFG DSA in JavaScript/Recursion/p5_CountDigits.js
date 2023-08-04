function cntDig(n) {
  if (n === 0) return 0;
  Math.floor(n / 10);
  let count = 1;
  return count + cntDig(Math.floor(n / 10));
}

console.log(cntDig(12341));
