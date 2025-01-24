// merging two object 
source1 = {
    1: 'A',
    2: 'B',
    
};
source2 = {
    3: 'C',
    4: 'D',

};
// target in which you want to add and sources the object yoy want to add 
merged = Object.assign({},source1,source2) // --> here target is empty object


console.log(merged)


newMerged = Object.assign(source1,source2)
console.log(source1); // as source1 is a target it is changed therefore we using an empty object as target so that our actual object doesn't change 


// now using spread operator

merged_object = {...source1, ...source2}
console.log(merged_object);


// key , value list: array and nested list:array of entries like items in py

console.log(Object.keys(merged_object));
console.log(Object.values(merged_object));
console.log(Object.entries(merged_object));
console.log(merged_object.hasOwnProperty(1));
console.log(merged_object.hasOwnProperty(13));
