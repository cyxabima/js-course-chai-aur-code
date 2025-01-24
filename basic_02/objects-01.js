// there are two ways to create objects

// - singleton using Object.create constructor

// literal
mySymbol = Symbol("key1")
const jsUser = {
    name: "Ukasha",
    fullName: "Ukasha Anwer",
    'age': 19, // no need to write keys in form of string by default treated as string
    isLoggedIn: true,
    [mySymbol] : "key!" // using symbol as a key 
}

// console.log(jsUser.age);
// // or 
// // console.log(jsUser[age]); // throw an error as age is string not a variable 
// console.log(jsUser['age']);
// console.log(jsUser[mySymbol]); // must not be string as a symbol

// changing value in object 

jsUser.name = "Inshal"
// Object.freeze(jsUser); // make changes impossible freezing the value 
jsUser.name = "Urwah"
// adding functions to object

jsUser.greeting = function(){
    console.log(`hello ${this.fullName}`);
    
}
console.log(jsUser);

jsUser.greeting()
console.log(jsUser.greeting);



