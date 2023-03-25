// this is your main.js script

let firstName = 'Ron', lastName = 'Lanzilotta', country = 'USA', city = "NYC", age = 31, isMarried = false, year = 2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof '10' === typeof 10)
console.log(parseInt('9.8') === 10)

console.log(
    (4 > 3 && 10 < 12),
    (4 > 3 && 10 > 12),
    (4 > 3 || 10 < 12),
    (4 > 3 || 10 > 12),
    (!(4 > 3)),
    (!(4 < 3)),
    (!(false)),
    (!(4 > 3 && 10 < 12)),
    (!(4 > 3 && 10 > 12)),
    (!(4 === '4')),
    false
    )        

/*
    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let now = new Date()

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
