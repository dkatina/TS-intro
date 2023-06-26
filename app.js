//You can specifically define the content of the object by setting {key: type;}
//however this is again redundant, and you should instad just let typescript infer
//the type from the already set data
var person = {
    name: 'Dylan',
    age: 24
};
//Typically you should rely on typescripts inference of each data type
var person2 = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking']
};
//A good usecase of explicitly defining the datatype is to override typescripts
//infered type, such as adding a tuple
var person3 = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking'],
    role: [1, 'director']
};
//this defines an object that will only take in the value of strings
var favActs;
favActs = ['Sports'];
console.log(person);
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//TUPLES -- is a fixed length and type
var thisTuple;
thisTuple = [1, 2, 'three'];
//thing to note even though tuples are 'fixed length' you can still push to them
thisTuple.push('beans');
//ENUM -- Added by TS gives you an automatically enumerated list
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person4 = {
    name: 'Dylan',
    age: 24,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
if (person4.role === Role.ADMIN) {
    console.log('Is Admin');
}
