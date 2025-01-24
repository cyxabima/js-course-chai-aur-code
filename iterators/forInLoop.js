// no need to type string in key as it is evaluated as variable 

let jsObj = {
    name : "Ukasha",
    age : 19,
    dep : "CIS" 

}
// just like python for in apply by default on key it apply on keys but array it iterate on index no of array

for (const key in  jsObj) {
    console.log(`${key} :-- ${jsObj[key]}`);
    

}
// ! The keys in an Object are enumerable properties, so for...in works to iterate over them



// in map for in loop doesn't work 
// in object key must be string 
// in map key could be any thing