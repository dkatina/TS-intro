function add1(n1: number , n2: number) {
    return n1 + n2;
}

// It is not necessary to define the type of a variable on the same line your define
//it's value. This is redundant and not best practice.
let number3: number = 5;

// defining variable type is only necessary when you are not yet setting the var
let number4: number

number4 = 5

const number1 = 5;
const number2 = 2.8;

let bigNum = add(number1, number2)
console.log(bigNum);