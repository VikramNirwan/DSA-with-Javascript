// let arr = [-6,-2,8,20,4]

// function arr(arr) {

//     let pivot = arr[arr.length-1]
//     do{
//         for(let i = 0; i<arr.length-1;i++){
//             let leftArr,rightArr = [];
//             if(pivot < arr[i]){
//                 leftArr.push(arr[i])
//             }else if(pivot > arr[i]){
//                 rightArr.push(arr[i])
//             }
//         }
//     }
//     while(leftArr.length > 1 || rightArr.length > 1)

// }

// solution -->

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot < arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [8, 20, -2, -6, 4];
console.log(quickSort(arr));

// worst case - O(n^2)
// avg case = O(nlogn)
