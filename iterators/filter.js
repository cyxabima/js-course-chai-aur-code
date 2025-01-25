// // filter 
// // why use filter as foreach does not return but we want to filter the array and want returned one for usage

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let new_arr= [] ;
// arr.forEach((numbers) => {
//     if (numbers % 3 == 0) new_arr.push(numbers);
// })

// // .. but we can't return in for each loop

// const even = arr.filter((number) => (number % 2 == 0));
// console.log(even);
// // above i use the parenthesis in body to return value which meet that criteria as function will automatically return that value

// const odd = arr.filter((number)=>{
//     return number % 2 != 0
// })

// console.log(odd);

// console.log(new_arr);

const library = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        available: true,
        copies: 5,
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        genre: "Programming",
        available: false,
        copies: 0,
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        genre: "Computer Science",
        available: true,
        copies: 3,
    },
    {
        title: "Design Patterns",
        author: "Erich Gamma",
        genre: "Software Engineering",
        available: true,
        copies: 2,
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        genre: "Programming",
        available: false,
        copies: 0,
    },
    {
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        genre: "Programming",
        available: true,
        copies: 7,
    },
];


let search = library.filter((bk) => bk.available && bk.genre == "Programming");
// or 
search = library.filter((bk) => {
    return bk.available && bk.genre == "Programming"
});

console.log(search);

