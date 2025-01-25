let num = [1,2,3,4];
const sumOfArrayItems = num.reduce((acc, currVal)=> acc + currVal,0);
console.log(sumOfArrayItems);

const library = [
  { title: "Clean Code", author: "Robert C. Martin", genre: "Programming", copies: 5 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", copies: 2 },
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", genre: "Computer Science", copies: 4 },
  { title: "Design Patterns", author: "Erich Gamma", genre: "Software Engineering", copies: 3 },
  { title: "Eloquent JavaScript", author: "Marijn Haversine", genre: "Programming", copies: 1 },
  { title: "You Don’t Know JS", author: "Kyle Simpson", genre: "Programming", copies: 6 },
];


const totalBooks = library.reduce((accumulator,currBk) => accumulator + currBk.copies,0)
console.log("Total books are: ",totalBooks);

