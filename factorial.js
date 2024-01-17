// let outputDiv = document.querySelector('#output')

function factorialRecurcive (x) {
    if (x == 1) return 1
    let a = factorialRecurcive(x - 1)
    return x * a
}

function factorialStack (target) {
    let result = 1
    let x = 1
    while(x !== target) {
        result = result * x
        x++;
    }

    return result;
}
// 10500 и рекурсия падает
// console.time("factorialRecurcive");
// const arr3 = factorialRecurcive(11000);
// console.timeEnd("factorialRecurcive");

console.time("factorialStack");
const arr4 = factorialStack(1000000);
console.timeEnd("factorialStack");

// factorial (factorial(1) x = 1 -> 1
// factorial (factorial(2) x = 2 -> 2 * factorial(1) = 2
// factorial (factorial(3) x = 3 -> 3 * factorial(2) = 6
// factorial (factorial(4) x = 4 -> 4 * factorial(3) = 24

// outputDiv.innerHTML = factorialStack(4)

