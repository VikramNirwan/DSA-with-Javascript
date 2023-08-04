function largestElement(arr) {
  let index;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      index = i - 1;
    } else if (arr[i] > arr[i - 1]) {
      if (index < i) {
      }
    }
  }
  return index;
}

console.log(largestElement([20, 8, 40, 10, 40]));
