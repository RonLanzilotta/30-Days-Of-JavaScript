// this is your main.js script

// a = 5
// b = 10

// a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

// let num = 46

// if (num % 2 != 0) {
//     console.log(`${num} is an odd number`)
// } else {
//     console.log(`${num} is an even number`)

// }

// let grade = 100

// switch(true) {
//     case grade > 89:
//         console.log(`Student got an A`)
//         break;
//     case (grade > 69 && grade < 90):
//         console.log(`Student got an B`)
//         break;
//     case (grade > 59 && grade < 70):
//         console.log(`Student got an C`)
//         break;
//     case (grade > 49 && grade < 60):
//         console.log(`Student got an D`)
//         break;
//     case grade < 50:
//         console.log(`Student got an F`)
//         break;
//     default:
//         console.log(`Student did not show up!`)
// };

// let userInput = prompt(`Enter month`);
// let month = userInput.toLowerCase()

// console.log(month)

// switch (month){
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log(`Winter`)
//         break;
//     case 'september':
//     case 'october':
//     case 'november':
//         console.log(`Autumn`)
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log(`Spring`)
//         break;
//     case 'june':
//     case 'july':
//     case 'august':
//         console.log(`Summer`)
//         break;
//     default:
//         console.log(`${month} is not a month. Please enter a valid month`)
// }

// let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// let weekend = ['saturday', 'sunday']
// let userInput = prompt('What day is it?')
// let day = userInput.toLowerCase()

//  if (weekdays.includes(day)) {
//     console.log(`${day} is a weekday`)
//  } else if (weekend.includes(day)) {
//     console.log(`${day} is a weekend`)
//  } else {
//     console.log(`${day} is not a day`)
//  }
 
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
let userInput = prompt('Enter a month')
let input = userInput.toLowerCase()

if (months.includes(input)) {
    if (input === 'february') {
        console.log(`${input} has 28 days.`)
    } else if ((input !== 'september') || (input !== 'april') || (input !== 'june') || (input !== 'november')) {
        console.log(`${input} has 31 days.`)
    } else {
        console.log(`${input} has 30 days`)
    }
} else {
    console.log(`${input} is not a month!`)
}