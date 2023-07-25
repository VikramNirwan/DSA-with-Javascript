function printNos(N) {
  //code here
  if (N !== 0) {
    printNos(N - 1);
    console.log(N);
  }
  return;
}
printNos(50);
