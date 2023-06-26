//You can explicitly set the type of the return of a function, however if you have
// no specific reasoning to do so you should again just let TS infer

function add(n1: number, n2: number): number {
    return n1 + n2
}

//void return types mean the function is not returning anything
function printResult(num:number): void {
    console.log('Result: ', num)
}