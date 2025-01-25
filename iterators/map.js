let myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // changing the same array
// for (const i in myNum) {
//     myNum [i] += 10;
// }

// console.log(myNum); 

// // creating a new array

// let updated = []
// for (const i in myNum) {
//     updated.push(myNum [i] +10);
// }
// console.log(updated);

// map to get ride of looping and updating
let square_myNum_addtwo_filter50 = myNum.map((num)=> num ** 2)
                                        .map( (num) => num + 2)
                                        .filter((num) => num > 50);
console.log(square_myNum_addtwo_filter50);
