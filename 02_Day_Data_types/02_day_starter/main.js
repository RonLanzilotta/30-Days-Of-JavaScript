// this is your main.js script
let challenge = '30 days of Javascript'

let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let pattern = /\d+/g

let income = sentence.match(pattern)

function sum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum = sum + parseInt(arr[i])
        }
    return sum;
}

console.log(sum(income))