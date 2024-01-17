// Your task is to write a function that takes
// a string and return a new string with all vowels removed.

// function disemvowel(str) {
//     const lettersVowels = ['i', 'e', 'o','u','a','A','U','I', 'E', 'O',]
//     let result = [...str].filter(item => !lettersVowels.includes(item))
//       return result.join('');
//     }

// console.log(disemvowel('This website is for losers LOL!'))

// function findUniq(arr) {
//   let obj = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1
//     return acc
//   }, {})
//  let result = Object.keys(obj).find(item => {
//    return obj[item] === 1
//  })
//  return result
// }
// findUniq([ 3, 10, 3, 3, 3 ])

const obj = {
  id: 1,
  parent: null,
  children: [
    {
      id: 2,
      parent: 1,
      children: [
        {
          id: 3,
          parent: 2
        },
        {
          id:4,
          parent: 2
        }
      ]
    }
  ]
}
let a = ''
console.time('label')

function deepSearch(obj, id) {
  for (let index = 0; index < obj.children.length; index++) {
    const element = obj.children[index];
    if (element.id === id) {
          a = element
          return a
    }
     if (element.children instanceof Array && element.children.length) {
        deepSearch(element, id)
    }
  }
}


const s = deepSearch(obj, 4)
console.timeEnd('label')

console.log(a)

