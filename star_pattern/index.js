// star pattern

// *****
// *****
// *****
// *****
// let n=5;

// for (let i = 0; i <n-1; i++) {

//     let row =""
//     for (let j = 0; j <n; j++) {
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

let n = 5;
for (let i = 1; i <= n ; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (i);
  }
  console.log(row);
}
