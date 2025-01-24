// ! IIFE (Immediately Invoked Function Expression)

// if you are two iife aik sath you must have to use semi colon because it does not know when the execution stop

// ()() function must be in first parenthesis then second parenthesis is for calling function
// named iife

(function db_connect(){
    console.log("Connected to DB ")
})();

(function db_connect(name){
    console.log("Connected to DB ", name)
})("Ukasha");


//((parameter)=>(return))(for call --> arguments)
let dis  = ((name,fname)=>(`this ${name} father is ${fname}`))("Ukasha", "Anwer");
console.log(dis);


