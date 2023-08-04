function isSortedArray(arr) {
  if (arr.length === 1) {
    return true;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSortedArray([8, 12, 15]));
console.log(isSortedArray([15, 15, 15]));
console.log(isSortedArray([100]));
console.log(isSortedArray([100, 20, 200]));
console.log(isSortedArray([200, 100]));
