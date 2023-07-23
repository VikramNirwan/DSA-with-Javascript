function digitsInFactorial(N) {
  // // code here
  // let fact = 1;
  // for(let i = 2; i<=N; i++){
  //     fact*= i;
  // }

  // let count = 0;
  // while (fact > 0){
  //     fact = Math.floor(fact /10);
  //     count++
  // }
  // return count;

  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum = sum + Math.log10(i);
  }
  return 1 + Math.floor(sum);
}
console.log(digitsInFactorial(5));
