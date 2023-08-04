function insertAtIndex(arr, sizeOfArray, index, element) {
  // code here
  for (let i = sizeOfArray - 1; i >= index; i--) {
    if (i === index) {
      arr[i] = element;
    } else {
      arr[i] = arr[i - 1];
    }
  }
  return;
}
