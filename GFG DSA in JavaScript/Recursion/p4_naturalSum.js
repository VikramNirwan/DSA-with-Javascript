function rec_Sum(n) {
  if (n <= 1) return n;
  return n + rec_Sum(n - 1);
}
console.log(rec_Sum(3));
