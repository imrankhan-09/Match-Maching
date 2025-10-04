//reverse an arrys
const arr = [1,2,2,3,4,4,5];
const unique = [...new Set(arr)];
console.log(unique); // [1,2,3,4,5]

var x = 10; // function-scoped, re-declared, hoisted
let y = 20; // block-scoped, re-assignable
const z = 30; // block-scoped, not re-assignable


const arr1 = [1,2];
const arr2 = [3,4];
const merge = [...arr1, ...arr2]; // [1,2,3,4]


const arrys = [1,2,3,4,5,6,7,8];

function sum(...nums){
  return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3)); // 6


