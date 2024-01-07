// function fbs(n) {
//   if (n < 0) return "please enter positive number";
//   if (n >= 0 && n <= 1) return n;
//   return fbs(n - 1) + fbs(n - 2);
// }

// console.log(fbs(0));

// const isAnagram = function (string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   const frequencyCounter = {};
//   for (let char of string1) {
//     frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
//   }
//   for (let char of string2) {
//     console.log(char);
//     if (!frequencyCounter[char]) {
//       //   console.log(frequencyCounter[char]);
//       return false;
//     } else {
//       console.log("begin", frequencyCounter[char]);
//       frequencyCounter[char] -= 1;
//       console.log(frequencyCounter);
//     }
//   }
//   return true;
// };
// console.log(isAnagram("listenlii", "silentlis"));

// Reverse string

// function isReverse(string3) {
//   let str = "";
//   for (let i = string3.length - 1; i >= 0; i--) {
//     str = str.concat(string3[i]);
//   }
//   return str;
// }
// console.log(isReverse("Diya"));

// //brute force solution
// const twoSum = function (num, target) {
//   let result = [];
//   for (let i = 0; i < num.length - 1; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         result.push([num.indexOf(num[i]), num.indexOf(num[j])]);
//       }
//     }
//   }
//   return result;
// };
// console.log(twoSum([2, 7, 4, 11, 5, 15], 9));

const a = {};
const b = { key: "b" };
const c = { key: "c" };
console.log((a[b] = 123));
console.log((a[c] = 456));
console.log(a);
console.log([..."sayyed"]);
