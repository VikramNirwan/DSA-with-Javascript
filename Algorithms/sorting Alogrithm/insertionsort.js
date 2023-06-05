// input = [-6,20,8,-2,4]

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let nti = arr[i];

//     for (let j = i; j >= 0; j--) {
//       if (arr[j] > nti) {
//         arr[j + 1] = arr[j];
//       } else if (arr[j] < nti) {
//         arr[j + 1] = nti;
//       }
//     }
//   }
// }

// const arr = [-6, 20, 8, -2, 4];
// insertionSort(arr);
// console.log(arr);

// if(arr[i] === arr[j]){
//     continue;
// }

// correct answer

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);

// big-o = O(n^2)
