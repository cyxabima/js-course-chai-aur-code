// ?? concat method and spread operator
const dc_heroes = ["super man", "flash", "bat man"];
const marvel_heroes = ["thor", "iron man", "spider man"];

// concat returns new array
const allHeroes = dc_heroes.concat(marvel_heroes);
console.log(allHeroes);

// concat returns new array
const all_Heroes = [...dc_heroes, ...marvel_heroes];
console.log(all_Heroes);

// flat method
const multiDimensionArray = [1, 2, 3, [2, 1, 3, [344, 131, 131, 455, [1, 22, 23]]]]
console.log(multiDimensionArray);

const useAbleArray = multiDimensionArray.flat().flat().flat()
console.log(useAbleArray);

// array from more tings

console.log(Array.from('Ukasha'))
console.log(Array.isArray('Hitesh'))

console.log(Array.of(1,2,3,3,44,4,5))