// for of
const arr = [1,2,3,4,5];
for (const element of arr) {
    // console.log(element);
    
}

// using map. map is iterable but objects are not map is an object(instance). Map only contain unique keys they are also like object


const myMap = new Map();
myMap.set("A", "Apple");
myMap.set("B", "Ball");
myMap.set("C", "Cat");

// this is like list unpacking in python  called array destructure

for (const [key,value] of myMap) {
    console.log(`${key} for ${value}`);
    
}

// for of loop can't apply to js object (json wale)

// let object = {
//     1 : "One",
//     2 : "Two"
// }
// for (const key of object) {
//     console.log(key);
    
// }

// as object are not iteratbale 

