// rest operator  spread operator 
function calculateCartPrice(...price) {
    console.log(price);
    
}

calculateCartPrice(1,2,3,4,5,67,4)


// all the key in object de reference to name age and locations

function greet({ name = 'Guest', age = 18, location = 'Earth' } = {}) {
    return `Hello ${name}, age ${age}, from ${location}`;
}

console.log(greet({ name: 'Alice', age: 25, location: 'Wonderland' })); 
// Output: Hello Alice, age 25, from Wonderland

// console.log(greet({ name: 'Bob' })); 
// // Output: Hello Bob, age 18, from Earth
