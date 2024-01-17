function sum(a,b) {
	return a+b
}
let mul =(a,b) => a*b

function calculate() {
    debugger
    let counter = 0
	return function () {
        return ++counter
  }
}

let a = calculate()
a()
a()
a()
a()
console.log(a())
console.log(calculate()())
console.log(calculate())
console.log(calculate())