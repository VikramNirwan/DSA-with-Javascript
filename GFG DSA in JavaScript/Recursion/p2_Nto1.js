function printNos(N) {
  //code here
  if (N !== 0) {
    console.log(N);
    printNos(N - 1);
  }
  return;
}

printNos(50);
