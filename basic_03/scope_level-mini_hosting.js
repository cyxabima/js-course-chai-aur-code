function one() {
    let user = 'Ukasha';
    function two() {
        let website =  'anwer.rf.gd';
        console.log(user+ website);
    }
    two()
    // console.log(website)
}

// one()

// hosting in function 

// 1st way to declare function
// here calling function before declaration is possible
addOne(4)
function addOne(val){

    return val + 1;
}


// 2nd way to declare a function 
// this called function statement and variable hold the reference of function there we cant call function before declaring variable 
const addTwo = function (val) {
    return val + 2
}
addTwo(23)
