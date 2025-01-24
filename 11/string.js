const name  =  "Ukasha"
const repoCount = 7
// in javaScript  strings are immutable object not array array in js are mutable 

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);


let myString  = new String('Hello')
console.log(myString.toUpperCase());
console.log(myString.charAt(4));
console.log(myString.indexOf('e'));
console.log(myString.substring(1,3)); // -ve indexing is not allowed
console.log(myString.slice(-2));
console.log(myString.slice(-2,myString.length));
console.log(myString.split('e'));
console.log(myString.endsWith('o'));
console.log(myString.startsWith('H'));
console.log(myString.trim()); // --> remove extra white space 
console.log(myString.valueOf());

