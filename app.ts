let userInput: unknown;
let userName: string;

//unknown allows you to store any data in a variable similar to any
//however if you try to assign a unkown variable as the value of a defined variable
//it wont work

userInput = 5;
userInput = 'Max';
// cannont assign unkown var to a string var
// userName = userInput;

//if you wanted to do this you would have to check the type stored in the unknown

if (typeof userInput === 'string'){
    userName = userInput;
}

//never type, a function that will never return ANYTHING not even undefined or null
//the infered type is void, however never can be assumed or explicitly declared
function throwError(message: string, code: number){
    throw { message: message, code: code};
}