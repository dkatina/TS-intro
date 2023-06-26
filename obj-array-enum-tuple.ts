
//You can specifically define the content of the object by setting {key: type;}
//however this is again redundant, and you should instad just let typescript infer
//the type from the already set data

const person: {
    name: string;
    age: number;
} = {
    name: 'Dylan',
    age: 24
};

//Typically you should rely on typescripts inference of each data type
const person2 = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking']
};

//A good usecase of explicitly defining the datatype is to override typescripts
//infered type, such as adding a tuple

const person3: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //a tuple
} = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking'],
    role: [1, 'director']
};


//this defines an object that will only take in the value of strings
let favActs: string[];
favActs = ['Sports']

console.log(person);

for (const hobby of person2.hobbies){
    console.log(hobby.toUpperCase());
}


//TUPLES -- is a fixed length and type

let thisTuple: [number, number, string]
thisTuple = [1,2,'three']

//thing to note even though tuples are 'fixed length' you can still push to them

thisTuple.push('beans')


//ENUM -- Added by TS gives you an automatically enumerated list

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person4 = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};

if (person4.role === Role.ADMIN){
    console.log('Is Admin')
}