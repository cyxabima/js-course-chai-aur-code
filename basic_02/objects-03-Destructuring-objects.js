// object de structuring 

let user = {

    name : 'Ukasha',
    fName : 'Anwer',
    roll : 115,
    dept : 'CIS'
}

const {name} = user
console.log(name)
const {name:alice} = user
console.log(alice)


// ! another Example 
const user2 = { 
    name: "Alice", 
    address: { city: "New York", zip: 10001 } 
};

const { address: { city, zip } } = user2;

console.log(city); // Output: New York
console.log(zip);  // Output: 10001
