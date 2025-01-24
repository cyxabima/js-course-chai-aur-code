// falsy value
// false , 0, -0, null, undefined, NaN, "", BigInt 0n 

// Truty value
// "false", "0", {}, [], " ", function(){}


//checking Array
const myArray = [];
if (myArray.length === 0 ){
    console.log("Array is empty");
    
}

// checking Object
const myObj = {};

if(! Object.keys(myObj).length){
    console.log("Object is empty");
    
}