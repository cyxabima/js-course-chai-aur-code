// let user = {
//     name : "Ukasha",
//     roll : 115,
//     show_info : function(){
//         console.log(this.name , this.roll);
        
//     }

// };
// user.show_info();
// user.name = 'Inshal';
// user.show_info();


// // this only work in object and classes this.name but you cant access  function variable like this.name

// function my(){
//     const user = 'ukasha'
//     console.log(this); // give the details of instance as function is an instance of function class
//     console.log(this.user);
    
// }

// my()
// // in node environment empty object while in browser it is window object
// console.log(this)





// >--------> arrow functions in js <--------< 

const chai = () => {
    return "Here is your Chai";
    
}
console.log(chai())
// you can directly return if you have only one line just like in lambda  called implicit return
const masalaChai = () =>  "Here is your Masala Chai";
console.log(masalaChai())

// or you can use parenthesis
const addChai = () =>  (masalaChai() + "\n" + chai());
console.log(addChai())

// if you are implicitly return object you must have to wrap object in parenthesis as object is in {}

const objReturn = ()=>({name : "ukasha"})
console.log(objReturn())