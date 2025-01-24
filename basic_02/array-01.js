const arr1 = [1,2,3,4,4,45,9];
arr1.push(8888);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(23)
console.log(arr1);
arr1.shift()
console.log(arr1);


console.log(`| ${arr1.join(' | ')} |`)

console.log(arr1.includes(299));
console.log(arr1.indexOf(2));

// splice and slice 
console.log(arr1.slice(0,4)); // return the new array without changing original array
console.log("original Array",arr1);

// ?? splice(start index, no of items to be deleted , item to be added)

console.log(arr1.splice(1,5)); // return the new array but also change original array and last value is included
console.log("original Array",arr1);


console.log(arr1.splice(1,0,"Ukasha")); // return the empty array as no element is deleted
console.log("original Array",arr1);





