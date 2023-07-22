// Number is palindrome or not
// Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome.

// -------------------------------------------Using reverse method

// function isPal(n) {
//   let rev = 0,
//     temp = n;
//   while (temp !== 0) {
//     let ld = temp % 10;
//     rev = rev * 10 + ld;
//     temp = Math.floor(temp / 10);
//   }
//   return rev === n;
// }

// let number = 4553;
// console.log(isPal(number));

// ------------------------------------------By Using Two pointer method

function isPal(n) {
  let num = n.toString();

  if (num.length === 1) {
    return true;
  } else {
    let i = 0,
      j = num.length - 1;

    while (i < j) {
      if (num[i] !== num[j]) {
        return false;
      }
      i++;
      j--;
    }
  }
  return true;
}
let number = 4554;
console.log(isPal(number));
