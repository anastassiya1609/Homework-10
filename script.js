// ---------------------------------- 1
// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;

// let i = 0;

// while (i < numbers.length) {
//   sum += numbers[i];
//   i++;
// }

// console.log(`Сумма чисел: ${sum}`);

// ----------------------------------- 2
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

// for (let i = 0; i < books.length; i++) {

//     const book = books[i];
//     console.log(` Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}.
//     Награды:`);
//     for (const award of book.awards) {
         
//       console.log(`-  ${award}`)
          
//     }
    
//     console.log("------------------")

//     }
    


//   3   Напишите функцию calculateAveragePages, которая принимает массив books из прошлой задачи и возвращает среднее количество страниц.       

function calculateAveragePages(books){
     
     let sumPages = 0; 

    for (const book of books) {
         sumPages += book.numberOfPages;
         
    }

    return sumPages / books.length;
    
}
console.log(calculateAveragePages(books));


// 4
function repeatString (str, n){
return str.repeat(n);
}
console.log(repeatString("Анастасия", 5));




// 5 
function calculateAverage (numbers){

    let sumNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        
     sumNum += num;

    }
    return sumNum / numbers.length;
}

console.log(calculateAverage(numbers = [5, 10, 15, 20, 25]))


// 6
function countEvenNumbers(arr){

    let newArr = [];

    for (const element of arr) {
        if(element % 2 == 0){
            newArr.push(element)
        }
    }
    return newArr ;
}

console.log(countEvenNumbers(arr = [1, 2, 3, 4, 5, 6]));