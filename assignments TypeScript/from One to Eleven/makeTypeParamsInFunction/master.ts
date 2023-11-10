function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2


//=======================>

function printInfo(valueOne: number | string, valueTwo: number | string) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work


let arr: (number | boolean[] | (string | (string | number)[])[] )[];

arr = [2, 10, [true], ['words', 'e'], 20]