//Union types the arguments can be nums or strings
function combine(n1: number | string , n2: number | string) {
    if ( typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2;
    } else {
        return n1.toString() + n2.toString()
    }
}

//Literal types have a defined type and value
const literalNumber = 30

//you can also set the type as a literal which can be useful in setting parameters types

let accept: 'do-accept' | 'dont-accept';
accept = 'do-accept';

//TYPE ALIASES
// setting a type that accepts a number or string
type Combinable = number | string;

let thing: Combinable;
thing = 5
thing = 'five'

//can also use literals to set types

type Days = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
function spitDays(day: Days){
    console.log(day)
}
 
spitDays('Monday')

//you can also give an object and alias

type User = { name: string; age: number };
const u1: User = { name: 'Dylan', age: 24 }; // this works!
