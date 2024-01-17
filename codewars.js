let outputDiv;

if (typeof document !== 'undefined') {
  outputDiv = document.querySelector('#output');
} else {
  // Обработка случая, когда document не определен (например, в тестовой среде)
  outputDiv = null;
}
// const arr = [[45, 12],[55,21],[19, -2],[104, 20]]
// const currentValue = arr.map(([first, second]) => {
//     if (first >=55 && second>=7) {
//         return 'Senior'
//     } else {
//         return 'Open'
//     }
// })
// console.log(currentValue)

// const expandedForm = n =>{
//     n.toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");
// }

// console.log(expandedForm(12))

// function deleteNth(arr,x) {
//     var cache = {};
//     return arr.filter(function(n) {
//         cache[n] = (cache[n]||0) + 1;
//         return cache[n] <= x;
//     })
// }
// function reverseWords(str) {
//     let temp = str.split(' ')
//     let newWords = temp.map(item => {
//         console.log(Array.from(item).reverse().join(''))
//         return Array.from(item).reverse().join('')
//         // if (item) Array.from(item).reverse()
//     })
//     console.log(newWords)
//
//
//     return newWords.join(' ')
// }

// function validatePIN (pin) {
//     console.log(/\d\d\d\d/.test(pin))
//     if (pin.includes('.') || pin.includes(',')) {
//         return false
//     }
//     if ((pin.length === 4 || pin.length === 6) && Number(pin) > 0) {
//         return true
//     }
//     return false
// }
// console.log(validatePIN('12411'))
// function likes(names) {
//     console.log(names.length)
//     if (names.length === 0) return 'no one likes this'
//     if (names.length === 1) return `${names[0]} likes this`
//     if (names.length === 2) return `${names[0]} and ${names[1]} like this`
//     if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//
// }
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))


// const str = 'qwerty'

// const capitalize = ([first, ...rest])=> {
//   return first.toUpperCase() + rest.join('')
// }

// console.log(capitalize(str))
//function high(words){
  //const alpha = ' abcdefghijklmnopqrstuvwxyz';
  //const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  //return words.split(' ')
      //.map((word, pos) => ({word: word, pos: pos, score: score(word)}))
      //.sort((a, b) => a.score - b.score || b.pos - a.pos)
      //.pop()
      //.word;




  // const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')
  // console.log(score())
  // const parametersToArray = x.split(' ')
  // const hashTable = {}

  // for (let i = 0; i < alphabet.length; i++) {
  //   let letter = alphabet[i]
  //   if (!hashTable[letter]) {
  //     hashTable[letter] = i + 1
  //   }
  // }

  // let findWord = {}
  // for (let i = 0; i < parametersToArray.length; i++) {
  //   let word = parametersToArray[i]
  //   findWord[word] = 0
  //   for (let j = 0; j < word.length; j++) {
  //     findWord[word] += hashTable[word[j]]
  //   }
  // }

  // let arr = Object.values(findWord);
  // let max = Math.max(...arr);
  // let a = Object.entries(findWord).find(([key, value]) => {
  //   if (value === max) {
  //     return key
  //   }
  // })
  // return a[0]
// }
// console.log(high('aa b'))
// function solve(word) {
//   const alpha = ' abcdefghijklmnopqrstuvwxyz'
//   const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0)
//   const withoutConsonants  = word.replace(/[aeiou]/g, ' ')
//   let temp = withoutConsonants.split(' ').map(item => {
//     if (item.length) {
//       return score(item)
//     }
//   }).filter(item => item)
//   return Math.max(...temp);
// };
// solve("zodiacs")
// function solution(string) {
//   let regexp = /[A-Z]/g;
//   let matchesArray = string.match(regexp);
//   if (!matchesArray) return string
//   let arrLetter = string.split('')
//   let arrIndx = []
//   let result = ''
//   arrLetter.forEach((item,index) => {
//     if (matchesArray.includes(item)) {
//       console.log(item,index)
//       arrIndx.push(index)
//     }
//   })
//   arrIndx.forEach((item,index) => {
//     arrLetter.splice(item + index, 0, ' ');
//     result = arrLetter.join('')
//   })
//
//   return result
//
// }
// console.log(solution('highTakeLongTime'))

// найти гласные
// function searchVowels(string) {
  // const vowels = ['a', 'e', 'i', 'o', 'u']
  // let count = 0
  // for (let stringElement of string) {
  //   if (vowels.includes(stringElement)) {
  //     count++
  //   }
  // }
  // return count
  // const match = string.match(/[aeuou]/gi)
  // return match.length ? match.length : 0

// }
// console.log(searchVowels('heelloo'))
// let maxSequence = function(arr){
//   let maxSum = 0;
//   let currentSum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//
//     currentSum += arr[i];
//
//     if (currentSum <= 0) {
//       currentSum = 0;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }
//
//   return maxSum;
// }
//
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// let encryptThis = function(text) {
//   let arrNew = text.split(' ')
//   let result= ''
//   arrNew.forEach((element,index) => {
//     console.log(element)
//     if (index === 0) {
//       result += `${element.charCodeAt(0)}`
//     } else {
//       result += ` ${element.charCodeAt(0)}`
//
//     }
//     if (element.length >=2) {
//       let arr2 = element.split('')
//       arr2.splice(1, 1, element[element.length-1]);
//       arr2.splice(element.length-1, 1,element[1]);
//       arr2.splice(0, 1);
//       result +=`${arr2.join('')}`
//     }
//   })
//
//   return result
// }
// console.log(encryptThis('The more he saw the less he spoke'))



// module.exports = (str) => {
//   let result = ''
//
//   let lines = str.split(/\r\n|\r|\n/g);
//   lines.forEach(item => {
//
//     if (item.includes('= ')) {
//       result += item.replace(/= /, '<h1>')+'</h1>'
//     }
//     let b = item.match(/\'(.*?)\'/g) || []
//     if (b.length) {
//       result += `<p>${item.replace(/'/g, '"')}</p>`
//     }
//     if (item.includes('* ')) {
//       result +=item.replace(/\* /, '<li>')+'</li>'
//     }
//     if (!item.includes('* ') && !item.includes('= ') && !b.length) {
//       let localResult = `${item.split(' ((')[0]}`
//       let h = item.match(/\(.*?\)/g) || ['a']
//       if (h[0].includes(' ')) {
//         let y = h[0].split(' ')
//         localResult += y[0].replace('((', '<a href="')
//         localResult += '>' +y[1].replace(')', '</a>')
//       }
//       if (item.split(')) ')[1]) {
//         localResult +=`${item.split(')) ')[1]}`
//       }
//
//       if (localResult) {
//         result += `<p>${localResult}</p>`
//
//       }
//
//     }
//   })
//   result += result[result.lastIndexOf('</li>')] + '/ui>'
//
//   return result.replace(/<li>/, '<ui><li>')
// }
// console.log(module.exports('* test'));

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// function pigIt(str){
    //Code here
// }

// function f(x) {
//     debugger
//     x++
//     (x=x-3)&& ++x
//     return --x
// }
// let y = f(2)
// console.log(y)
// function filter_list(arr) {
//     const result = arr.filter(item => {
//         return typeof item === 'number'
//     })
//     return result
// }
// console.log(filter_list([1,2,'a','b']))

// Vowel Count
// function getCount(str) {
//   let vowelsCount = 0
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   str.split('').forEach(element => {
//     if (vowels.includes(element)) {
//       vowelsCount += 1
//     }
//   });
//   return vowelsCount;
// }

// Count letters in string
// function letterCount(s) {
//   let objLetter = {}
//   s.split('').forEach(element => {
//     if (objLetter[element]) {
//       objLetter[element] = objLetter[element] + 1
//     } else {
//       objLetter[element] = 1
//     }
//   });
//   return objLetter
// }

// function twoSum(numbers, target) {
//   let map = new Map();
//   let result = []
//
//   numbers.forEach((item, index) => {
//     map.set(item, index)
//   })
//   for (let i = 0; i <numbers.length ; i++) {
//     let diff = target - numbers[i]
//     if (map.has(diff)) {
//       result.push(i)
//       result.push(map.get(diff))
//       break
//     }
//   }
// console.log(result)
// }
// twoSum([1,2,3], 4)

// Day of the Year
// function toDayOfYear(arr) {
//   let [day, month, year] = arr
//   return (new Date(year,month -1,day) - new Date(year,0,0))/86400000
// }
// Mumbling
// function accum(s) {
	// your code
//   let arrFromS = s.split('')
// let str = ''  
// arrFromS.forEach((element, ind) => {
//   str+=element.toUpperCase()
//   let count = ind
//   while (count) {
//     str+=element.toLowerCase()
//     count--
//   }
//   if (arrFromS.length -1  !== ind) {
//   str+='-'

//   }
// });
//   return str
// return s.split('')
//   .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
//   .join('-');
// }
// outputDiv.innerHTML = accum("abcd") 


// const myfunction = async function(a) {
//   return await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a)
//     }, 500);
//   })
// }

// let result
// const start = async function(a, b) {
//   result = await myfunction(a, 'test');
  
//   console.log(result);
// }
// // Call start
// start(456442);

// function main() {
// 	return new Promise(runner);
// }

// async function runner(resolve, reject) {
// 	if (window.a === 7) {
// 		// Если нашли нужное значение
// 		console.log('Пошел запрос');
// 		var result = await zapros();
// 		console.log('Прошел запрос', result);

// 		return resolve(result);
// 	} else {
// 		// Повторная попытка
// 		return setTimeout(() => {
// 			console.log('Повтор');
// 			 runner(resolve, reject);
// 		}, 1000);
// 	}
// }

// function zapros() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			return resolve('Информация');
// 		}, 1500);
//   });
// }

// window.a = 7;
// main().then((res) => {
// 	console.log(`Результат запроса, после ожидание нужных условий = ${res}`);
// });

// function createPhoneNumber (numbers) {
//   let format = "(xxx) xxx-xxxx";
//   for (let index = 0; index < numbers.length; index++) {
//     format = format.replace('x', numbers[index]);
//   }
//   return format

//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

// console.log(a)
// outputDiv.innerHTML = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 

// The Fruit Juice
// function Jar() {
//   console.log(this)
//   this.amounts = {}
//   this.total = 0
// }

// Jar.prototype.add = function(amount, type) {
//   if (!this.amounts[type]) {
//     this.amounts[type] = 0
//   }
//     this.amounts[type]+= amount
//     this.total += amount
  
// };

// Jar.prototype.pourOut = function(amount) {
//   for (let type in this.amounts) {
//      this.amounts[type] -= amount * this.getConcentration(type);
//    } 
//   this.total -= amount;
// };

// Jar.prototype.getTotalAmount = function() {
//   return this.total
// };

// Jar.prototype.getConcentration = function(type) {
//   let concentration = this.amounts[type] / this.total;
//   return concentration > 0 ? concentration : 0;
// }

// class Jar {
//   constructor() {
//     console.log(this);
//     this.amounts = {};
//     this.total = 0;
//   }
//   add(amount, type) {
//     if (!this.amounts[type]) {
//       this.amounts[type] = 0;
//     }
//     this.amounts[type] += amount;
//     this.total += amount;

//   }
//   pourOut(amount) {
//     for (let type in this.amounts) {
//       this.amounts[type] -= amount * this.getConcentration(type);
//     }
//     this.total -= amount;
//   }
//   getTotalAmount() {
//     return this.total;
//   }
//   getConcentration(type) {
//     let concentration = this.amounts[type] / this.total;
//     return concentration > 0 ? concentration : 0;
//   }
// }





// let jat = new Jar
// console.log(jat)
// function runLengthEncoding(str){
//   let count = 1
//   let element = str[0]
//   let result = []
//   for (let i = 1; i <= str.length; i++) {
//     if (element === str[i]) {
//       count++
//     } else {
//       result.push([count, element])
//       element = str[i]
//       count = 1
//     }
//   }

//   return result
// }
// Jaden Casing Strings
// String.prototype.toJadenCase = function () {
  
//   function capitalizeFirstLetter([first, ...rest]) {
//     return first.toUpperCase() + rest.join('')
// }

// return this.split(' ').map(capitalizeFirstLetter).join(' ');
// };
// var str = "Three men, six options, don\'t choose.";

// function hiddenWord(num) {
//   let result = ''
//   const hashTable = {
//     "a" : 6,
//     "b" : 1 ,
//     "d" : 7,
//     "e" : 4,
//     "i" : 3,
//     "l" : 2,
//     "m" : 9,
//     "n" : 8,
//     "o" : 0,
//     "t" : 5
//   }
//   let temp = num.toString().split('')
//   for (const iterator of temp) {
//     Object.entries(hashTable).forEach(([key, value]) => {
//       console.log(value)
//     if (iterator == value) {
//       result+=key
//     }
     
//     })
//     console.log(iterator)
    
//   }

//   return result
// }

// Merge in 2048
// function merge (line) {
//   debugger
//   const zeroes = []
//   const merged = []
  
//   let prev = null
//   line.forEach((curr, index) => {
//     if (curr === 0) {
//       zeroes.push(0)
//       return
//     }
    
//     if (prev !== curr) {
//       merged.push(curr)
//       prev = curr
//     } else {
//       merged[merged.length - 1] *= 2
//       zeroes.push(0)
//       prev = null
//     }
//   })

//   return [...merged, ...zeroes]
// }
// var each = function(arr, callback, thisArg) {
//   var i, length = arr.length;
//   for (i = 0; i < length; i = i + 1) {
//     callback.call(thisArg, arr[i], i, arr);
//   }
// };
// var Person = function(name) {
//   this.name = name;
// };
// debugger
// Person.prototype.say = function(phrase) {
//   console.log(this.name + ' says ' + phrase);
// }

// Person.prototype.mumble = function(phrases) {
//   each(phrases, function(phrase) {
//     this.say(phrase);
//   }, this);
// }

// var johnDoe = new Person('John Doe');
// johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);
// outputDiv.innerHTML = merge([2,0,2,2])

// массив по ссылке
// function persistence(num) {
//   debugger;
//   let i = 0;
//   while (num.toString().length !== 1) {
//     num = [...num.toString()].reduce((a,b)=>a*b);
//     i++
//   }
  
//   return i
// }
// ------------------------------------------------
// function letterCount(str) {
//     let hashTable = {}
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//       const element = str[i];
//       if (hashTable[element]) {
//         hashTable[element] = hashTable[element] + 1
//       } else {
//         hashTable[element] = 1
//       }
//     }

//     Object.entries(hashTable).forEach(([key, value]) => {
//       result += `${value}${key}`
//   })

//   return result
// }
// letterCount('aaabbbbccFFFFFF') -> 3a4b2c6F
// ------------------------------------------------

// ------------------------------------------------
// Get the Middle Character
// function getMiddle(s)
// {
//   if (!Number.isInteger(s.length/2)) {
//     return s[Math.floor(s.length/2)]
//   } else {
//     let temp = `${s[(s.length/2)-1]}`
//     temp+= `${s[s.length/2]}`
//     return temp
//   }
// }
// Test.assertEquals(getMiddle("test"),"es");
// ------------------------------------------------

//Stop gninnipS My sdroW!
// function spinWords(string){
//   let result = ''
//   let words = string.split(' ')
//   if (words.length === 1 && string.length > 5) {
//    return string.split('').reverse().join('')
//   }
//   result = words.reduce((acc, item, index)=> {
//     if (item.length >= 5) {
//       acc +=`${item.split('').reverse().join('')} `
//       return acc
//     }    
//     return acc +=`${item} ` 
//   }, '')
//   console.log(result)
//   return result.trim()
// }
// assert.strictEqual(spinWords("Welcome"), "emocleW");
// outputDiv.innerHTML = spinWords('Seriously this is the last one')

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// function solution(number){
//   let count = 0
//   if (number < 0) return 0
//   for (let num = 1; num < number; num++) {
//     if ((count/5) > number) {
//       console.log('больше ', count/5, count)
//       return count
//     }
//     if (num % 3 === 0 && num % 5 === 0) {
//       count += num;
//       continue
//     }
//     if (num % 3 === 0 || num % 5 === 0) {
//       count += num
//     }
//   }

//   return count
// }


//debounce
// outputDiv.innerHTML = solution(200)
// const fethcing = (url) => {
//   console.log(url)
// }

// function debounce(callback, delay) {

// let timer = null;
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(()=> {
//       callback(...args)
//     }, delay)
//   }
// }

// const fethc = debounce(fethcing, 300)

// fethc(1);
// fethc(2);
// fethc(3);
// fethc(4);
// fethc(5);
// console.time('123')

// const tree = {
//   value: 1,
//   children:[
//     {
//       value:2,
//       children: [
//         {value: 3}
//       ]
//     },
//     {
//       value:4,
//       children: [
//         {value: 5},
//         {value: 6}
//       ]
//     },
//   ]
// }

// function getTreeValues(tree) {
//   const stack = [tree];
//   const result = [];
//   while(stack.length > 0) {
//     debugger
//     const node = stack.pop();
//     if (node.value !== undefined) {
//       result.push(node.value)
//     }
//     if (node.children?.length) {
//       stack.push(...node.children)
//     }
//   }
//   return result
// }

// function getTreeValues(tree) {
//   debugger
//   const stack = [tree];
//   const result = [];
//   while(stack.length > 0) {
//     const node = stack.pop();
//     if (node.value !== undefined) {
//       result.push(node.value)
//     }
//     if (node.children?.length) {
//       node.children.forEach(element => {
//         stack.push(element)
//       });
//     }
//   }
//   return result
// }
// console.timeEnd('123')
// console.log(getTreeValues(tree))/// [1,2,3,4,5,6]

// const obj = {
//   id: 1,
//   parent: null,
//   children: [
//     {
//       id: 2,
//       parent: 1,
//       children: [
//         {
//           id: 3,
//           parent: 2
//         },
//         {
//           id:4,
//           parent: 2
//         }
//       ]
//     }
//   ]
// }
// let a = ''
// console.time('label')

// function deepSearch(obj, id) {
//   for (let index = 0; index < obj.children.length; index++) {
//     const element = obj.children[index];
//     if (element.id === id) {
//           a = element
//           return a
//     }
//      if (element.children instanceof Array && element.children.length) {
//         deepSearch(element, id)
//     }
//   }
// }


// const s = deepSearch(obj, 4)
// console.timeEnd('label')

// console.log(a)

// (function(m, e, t, r, i, k, a) {
//   debugger
//   m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
//   m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
// })
// (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");


// Decreasing Inputs
// function add(...args) {
//   let result = 0
//   if (!args.length) return result

//   for (let index = 0; index < args.length; index++) {
//     const element = args[index];
//     const num = index + 1
//     result += element/num
    
//   }
//   return Math.round(result)

// }

// const list = [{guid: '1', name: 1},{guid: '2', name: 2},{guid: '3', name: 3}]
// const tabSetting = {'1': {name: 1}, '2': {name: 2}, '3': {name: 3}, '4': {name: 4}}

// let guids = list.map(item => item.guid) 
// let tabSettingKeys = Object.keys(tabSetting)
// tabSettingKeys.forEach(key  => {
//   if (!guids.includes(key )) {
//     delete tabSetting[key]
//   }
// })

// console.log(tabSetting)
// Highest and Lowest
// highAndLow("1 2 3 4 5");  // return "5 1"
// function highAndLow(numbers){
//   const arr = numbers.split(' ')
//  let max = parseInt(arr[0])
//  let min = parseInt(arr[0])
//  debugger
//  for (let i = 0; i < arr.length; i++) {
//   const element = +arr[i]
//   if (element > max) {
//     max = element
//   }
//   if (element < min) {
//     min = element
//   }
//  }

//  return `${max} ${min}`
// }
// ---
// Unique In Order
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

// function uniqueInOrder (item) {
//   if (!item[0]) return []
//   let prev = item[0]
//   let result = [item[0]]

//   for (let i = 0; i < item.length; i++) {
//     const element = item[i]
//     if (prev == element) {
//       continue
//     } else {
//       result.push(element)
//       prev = element
//     }
//   }

//   return result
// }

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// const tree = {
//   value: 1,
//   children:[
//     {
//       value:2,
//       children: [
//         {value: 3}
//       ]
//     },
//     {
//       value:4,
//       children: [
//         {value: 5},
//         {value: 6}
//       ]
//     },
//     {
//       value:8,
//       children: [
//         {value: 9},
//         {
//         value: 10,
//         children: [
//             {value: 7}
//           ]
//         }
//       ]
//     },
//   ]
// }
// // recurcive
// function getTreeValuesRecurcive(node) {
//   const values = []

//   function traverse(node) {
//     values.push(node.value)

//     if (node.children) {
//       node.children.forEach(item => {
//         traverse(item)
//       })
//     }
//   }
//   traverse(node)

//  return values
// }

// //stack
// function getTreeValuesStack(tree) {
//   const values = []
//   let stack = [tree]
  
//   while(stack.length > 0) {
//      let node = stack.pop()
//      if (node.value) {
//       values.push(node.value)
//      }
//      if (node.children !== undefined) {
//       node.children.forEach(item => {
//         stack.push(item)
//       })
//      }
//   }

//  return values
// }
// let a = {
//   namess: () => {
//     console.log(this)
//     return this
    
// }
// }
// function namess() {
//   console.log(this)
//   return this
  
// }

// function findMissingLetter(array) {
//   const data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let start = data.indexOf(array[0]);
//   let currentIndex = start;
//   while (currentIndex < data.length) {
//     let currentElement = data[currentIndex];
//     if (!array.includes(currentElement)) {
//       return currentElement;
//     }
//     currentIndex++;
//   }
//   return '42'; 
// }


// Find the odd int
// export function findOdd(arr) {
//   if (arr.length == 1) {
//     return arr[0]
//   }
//   let acc = arr.reduce((acc, item) => {
//     acc[item] = acc[item] + 1 || 1
//     return acc
//   }, {})
//   console.log(acc)

//   for (let [key, value] of Object.entries(acc)) {
//     if (value % 2 != 0) {
//       console.log(key)
//       return `${key}`
//     }
//   }

//   return acc;
// }

// ***********************
// Count the number of Duplicates
function duplicateCount(text) {
  let count = 0
  const res = {}

  if (!text) {
    return count
  }
  
  for (const iterable of text) {
    if (typeof text === 'string') {
      let normalizedString = iterable.toLowerCase()
      res[normalizedString] = res[normalizedString] + 1 || 1
    }
  }

  for (let [key, value] of Object.entries(res)) {
    if (value > 1) {
      count++
    }
  }

  return count


}
console.log(duplicateCount(''))
if (outputDiv) {
  outputDiv.innerHTML = duplicateCount('aabbcde')
}

export {duplicateCount}