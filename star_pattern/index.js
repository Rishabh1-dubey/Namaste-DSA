// star pattern

// *****
// *****
// *****
// *****
// let n=5;

// for (let i = 0; i <n-1; i++) {

//     let row =""
//     for (let j = 1; j <n; j++) {
//       row = row + "*"
//     }
//     console.log(row)
// }

// second patter
// *
// **
// ***
// ****
//  let n =5;

//  for (let i = 0; i < n-1; i++) {
//     let row =""
//     for (let j = 0; j < i+1; j++) {
//         row = row + "*"
//     }
//     console.log(row)

//  }

// 1
// 12
// 123
// 1234

// let n = 5;
// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// 1
// 22
// 333
// 4444
// 55555
// let n = 5;
// for (let i = 1; i <= n ; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row +i;
//   }
//   console.log(row);
// }

// let n = 6;
// for (let i =0; i < n - 1; i++) {
//   let row = "";
//   for (let j =1; j < n - i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }




// 1
// 10
// 101
// 1010
// 10101
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  let switchh = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + switchh;
    if (switchh == 1) {
        switchh = 0;
    } else {
        switchh = 1;
    }
}
  console.log(row);
}
