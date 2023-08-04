function secondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }

  if (arr.length === 2) {
    return Math.min(arr[0], arr[1]);
  }

  let newArr = [arr[0], arr[1]];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] >= newArr[0]) {
      newArr[0] = arr[i];
    } else if (arr[i] >= newArr[1]) {
      newArr[1] = arr[i];
    }
  }
  return Math.min(newArr[0], newArr[1]);
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));
console.log(secondLargest([10, 5, 10]));
console.log(secondLargest([10, 10, 10]));
