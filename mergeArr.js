let outputDiv = document.querySelector("#output");
const alpha = "abcdefghijklmnopqrstuvwxyz";

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function highAndLow(length) {
  let max = ["42"];
  for (let i = 0; i < 1000000; i++) {
    max.push(alpha[getRandomArbitrary(0, length)]);
  }
  return max;
}

// outputDiv.innerHTML = highAndLow()
const arr1 = highAndLow(alpha.length);
const arr2 = highAndLow(alpha.length - 15);

function merge(a, b) {
  const hash = {};
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    hash[element] = true;
  }
  for (let i = 0; i < b.length; i++) {
    const element = b[i];
    hash[element] = true;
  }

  return Object.keys(hash);
}

function mergeHash(a, b) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (!map.has(element)) {
      map.set(element, true);
      result.push(element);
    }
  }
  for (let i = 0; i < b.length; i++) {
    const element = b[i];
    if (!map.has(element)) {
        map.set(element, true);
        result.push(element);
      }
  }

  return result;
}

let test = ["apple", "car"];
let tes2 = ["apple", "car2"];

console.time("hash");
const arr3 = merge(arr1, arr2);
console.timeEnd("hash");

console.time("Set");
const arr4 = [...new Set([...arr1, ...arr2])];
console.timeEnd("Set");

console.time("mergeHash");
const arr5 = mergeHash(arr1, arr2);
console.timeEnd("mergeHash");

// const arr3 = merge(test, tes2)
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
