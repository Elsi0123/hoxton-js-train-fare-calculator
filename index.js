let kmsTravelled = Number(prompt('How many kms do you want to travel?'))
let age = Number(prompt('What is your age?'))
let pricePerKm = 0.21

let juniorDiscountRate = 0.2
let seniorDiscountRate = 0.4

let fare = kmsTravelled * pricePerKm
let juniorFare = fare - fare * juniorDiscountRate
let seniorFare = fare - fare * seniorDiscountRate
// console.log
if (age < 18) {
  console.log(`
KMs Travelled: ${kmsTravelled}
Age: ${age}
You get the Junior Discount!
You need to pay: £${juniorFare.toFixed(2)}
`)
// console.log
} else if (age > 65) {
  console.log(`
KMs Travelled: ${kmsTravelled}
Age: ${age}
You get the Senior Discount!
You need to pay: £${seniorFare.toFixed(2)}
  `)
} else {
  console.log(
    `%c
KMs Travelled: ${kmsTravelled}
Age: ${age}
You need to pay: £${fare.toFixed(2)}
  `)
}