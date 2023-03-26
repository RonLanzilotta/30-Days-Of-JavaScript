// this is your main.js script

// let firstName = 'Ron', lastName = 'Lanzilotta', country = 'USA', city = "NYC", age = 31, isMarried = false, year = 2023

// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)

// console.log(typeof '10' === typeof 10)
// console.log(parseInt('9.8') === 10)

// console.log(
//     (4 > 3 && 10 < 12),
//     (4 > 3 && 10 > 12),
//     (4 > 3 || 10 < 12),
//     (4 > 3 || 10 > 12),
//     (!(4 > 3)),
//     (!(4 < 3)),
//     (!(false)),
//     (!(4 > 3 && 10 < 12)),
//     (!(4 > 3 && 10 > 12)),
//     (!(4 === '4')),
//     false
//     )        

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

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getTime())


// let base = prompt('', 'Enter base of triangle')
// let height = prompt('', 'Enter base of triangle')
// let area = base * height * 0.5
// console.log(`The are of the triangle is ${area}`)

// let length = prompt('Length' ,'Enter length of rectangle:')
// let width = prompt('Width', 'Enter width of rectangle:')
// let perimeter = parseInt(length) + parseInt(width)
// let area = length * width

// console.log(`The perimeter of a rectangle is ${perimeter}
//              The area of a rectangle is ${area}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = prompt('radius' ,'Enter radius of circle')

// let area = Math.PI * (parseInt(radius) ** 2)
// console.log(`The area of the circle is ${area}`)

// let x1 = prompt('X1', 'Enter value for x1')
// let y1 = prompt('Y1', 'Enter value for y1')
// let x2 = prompt('X2', 'Enter value for x2')
// let y2 = prompt('Y2', 'Enter value for y2')
// let slope = (y2 - y1) / (x2 - x1)
// console.log(slope)

// let hours = prompt('Hours', 'Enter your weekly hours')
// let rate = prompt('Rate', 'Enter your rate')
// console.log(parseInt(hours) * parseInt(rate))

// let x = -3
// let y = x**2 + 6*x + 9

// console.log(y)

// let firstName = "Ronnie"
// let lastName = "Lanzilotta"

// if (firstName.length >= 7) {
//     console.log(`Your name is long`)
// } else {
//     console.log(`Your name is short`)
// }

// if (firstName.length > lastName.length) {
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// } else if (firstName.length < lastName.length) {
//     console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`)
// } else {
//     console.log(`Your first name, ${firstName} is the same length as your family name, ${lastName}`)
// }

// let myAge = 56
// let yourAge = 55

// if (myAge > yourAge) {
//     let difference = myAge - yourAge
//     console.log(`I am ${difference} years older than you`)
// } else if (yourAge > myAge) {
//     let difference = yourAge - myAge
//     console.log(`You are ${difference} years older than me`)
// } else {
//     console.log(`We are the same age`)
// }

// let userBirthYear = prompt('What year were you born?')
// let age = (now.getFullYear() - userBirthYear) - 1

// if (age >= 18) {
//     console.log(`You are ${age}. You are old enough to drive.`)
// } else {
//     let difference = 18 - age
//     console.log(`You are ${age}. You are ${difference} years away from being old enough to drive.`)

// }
